const userModel = require('./models/userModel');

const testimonials = [
  {
    userName: 'Amit Sharma',
    userEmail: 'amit.sharma@example.com',
    rating: 5,
    review: 'My trip with exploreHimalayas was unforgettable! The guides were knowledgeable and the views were breathtaking.'
  },
  {
    userName: 'Priya Singh',
    userEmail: 'priya.singh@example.com',
    rating: 4,
    review: 'Excellent service and amazing destinations. I felt safe and inspired throughout the journey.'
  },
  {
    userName: 'Rahul Verma',
    userEmail: 'rahul.verma@example.com',
    rating: 5,
    review: 'The best trekking experience I have ever had. Highly recommended for adventure lovers!'
  },
  {
    userName: 'Sunita Joshi',
    userEmail: 'sunita.joshi@example.com',
    rating: 4,
    review: 'Beautifully organized, friendly staff, and stunning locations. I will definitely travel with them again!'
  }
];

async function seedTestimonials() {
  for (const t of testimonials) {
    try {
      await userModel.addTestimonial(t.userName, t.userEmail, t.rating, t.review);
      console.log(`Inserted testimonial for ${t.userName}`);
    } catch (err) {
      console.error(`Failed to insert testimonial for ${t.userName}:`, err.message);
    }
  }
  process.exit();
}

seedTestimonials(); 