import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './booknowmodal.css';

const BookingSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().matches(/^[0-9]{10}$/, 'Enter a valid 10-digit phone').required('Phone is required'),
  people: Yup.number().min(1, 'At least 1 person').max(20, 'Max 20 people').required('Number of people is required'),
  date: Yup.string().required('Date is required'),
  role: Yup.string().oneOf(['Solo', 'Family', 'Group'], 'Select a role').required('Role is required'),
});

const BookNowModal = ({ open, onClose, packageName }) => {
  if (!open) return null;
  return (
    <div className="booknow-modal-overlay">
      <div className="booknow-modal">
        <button className="booknow-modal-close" onClick={onClose}>&times;</button>
        <h2 className="booknow-modal-title">Book Now: {packageName}</h2>
        <Formik
          initialValues={{ name: '', email: '', phone: '', people: 1, date: '', role: '' }}
          validationSchema={BookingSchema}
          onSubmit={async (values, { setSubmitting, resetForm, setStatus }) => {
            try {
              const response = await fetch('http://localhost:5000/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...values, destination: packageName })
              });
              if (response.ok) {
                setStatus('Booking request sent! We will contact you soon.');
                setTimeout(() => {
                  setStatus('');
                  resetForm();
                  onClose();
                }, 1500);
              } else {
                const data = await response.json();
                setStatus(data.error || 'Booking failed. Please try again.');
              }
            } catch (err) {
              setStatus('Booking failed. Please try again.');
            }
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, status }) => (
            <Form className="booknow-form">
              <label>Destination
                <Field type="text" name="destination" value={packageName} disabled className="booknow-input" />
              </label>
              <label>Name
                <Field type="text" name="name" className="booknow-input" />
                <ErrorMessage name="name" component="div" className="form-error" />
              </label>
              <label>Email
                <Field type="email" name="email" className="booknow-input" />
                <ErrorMessage name="email" component="div" className="form-error" />
              </label>
              <label>Phone
                <Field type="text" name="phone" className="booknow-input" />
                <ErrorMessage name="phone" component="div" className="form-error" />
              </label>
              <label>Role
                <Field as="select" name="role" className="booknow-input">
                  <option value="">Select</option>
                  <option value="Solo">Solo</option>
                  <option value="Family">Family</option>
                  <option value="Group">Group</option>
                </Field>
                <ErrorMessage name="role" component="div" className="form-error" />
              </label>
              <label>Number of People
                <Field type="number" name="people" min={1} max={20} className="booknow-input" />
                <ErrorMessage name="people" component="div" className="form-error" />
              </label>
              <label>Date
                <Field type="date" name="date" className="booknow-input" />
                <ErrorMessage name="date" component="div" className="form-error" />
              </label>
              <button type="submit" className="booknow-btn" disabled={isSubmitting}>Book Now</button>
              {status && <div className="form-success" style={{marginTop:'0.7rem'}}>{status}</div>}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default BookNowModal; 