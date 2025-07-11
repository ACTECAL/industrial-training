-- Create destinations table
CREATE TABLE IF NOT EXISTS destinations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  image VARCHAR(255),
  package VARCHAR(100),
  details VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE DATABASE IF NOT EXISTS tourism_db;
USE tourism_db;

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create admins table
CREATE TABLE IF NOT EXISTS admins (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  destination_id INT NOT NULL,
  hotel_id INT,
  booking_date DATE NOT NULL,
  guests INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  message TEXT,
  status ENUM('pending','confirmed','cancelled') DEFAULT 'pending',
  user_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert default destinations
INSERT INTO destinations (title, description, image, package, details) VALUES
('Adi Kailash', 'Known as Chhota Kailash, Adi Kailash is a sacred mountain in the Kumaon Himalayas near the Indo-Tibetan border and one of the Punch kailash.', 'https://your-image-url.com/adi-kailash.jpg', '₹35,000', '8 Days / 7 Nights, All-Inclusive, Group Tour'),
('Om Parvat', 'A spiritually significant peak where the natural snow formation forms the sacred "OM" symbol, making it a must-visit destination pilgrims.', 'https://your-image-url.com/om-parvat.jpg', '₹28,000', '6 Days / 5 Nights, Meals & Transport Included'),
('Panchachuli Base Camp', 'A stunning trek in the Darma Valley, leading to panoramic views of the majestic Panchachuli peaks of Uttarakhand.', 'https://your-image-url.com/panchachuli.jpg', '₹22,000', '5 Days / 4 Nights, Trekking Adventure more');