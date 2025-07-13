import React, { useState } from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import "../CustomDropdown/customdropdown.css";

const CustomDropdown = ({ lable, options, onSelect }) => {
    const [value, setValue] = useState('');
    const [selectedValue, setSelectedValue] = useState('');

    const handleClick = (selectedVal) => {
        setSelectedValue(selectedVal);
        onSelect(selectedVal);
    };

    return (
        <>
            <label className='item-search-label'>{lable}</label>
            <Dropdown className='dropdown-custom' onSelect={handleClick}>
                <Dropdown.Toggle id="dropdown-custom-components" type="button">
                    <i className="bi bi-search me-2"></i>
                    {selectedValue ? selectedValue : lable}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Form.Control
                        autoFocus
                        className=" my-1"
                        placeholder="Search..."
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                    />
                    <ul className="list-unstyled">
                        {options && options.filter(
                            (option) =>
                                !value || option.toLowerCase().startsWith(value.toLowerCase())
                        ).map((option, index) => (
                            <Dropdown.Item eventKey={option} key={index}>
                                {option}
                            </Dropdown.Item>
                        ))}
                    </ul>
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
};

export default CustomDropdown;
