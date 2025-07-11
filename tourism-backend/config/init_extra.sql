-- Create hotels table
CREATE TABLE IF NOT EXISTS hotels (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  destination_id INT,
  package VARCHAR(100),
  image VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sample hotels
INSERT INTO hotels (name, description, destination_id, package, image) VALUES
  ('Adi Kailash Hotel', 'Best hotel near Adi Kailash', 1, '5000', 'adi-hotel.jpg'),
  ('Om Parvat Retreat', 'Stay near Om Parvat', 2, '4500', 'om-hotel.jpg'),
  ('Panchachuli Base Camp Lodge', 'Comfort at Panchachuli', 3, '4000', 'panchachuli-hotel.jpg');

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS gallery_images (
  id INT AUTO_INCREMENT PRIMARY KEY,
  image_url VARCHAR(255) NOT NULL,
  uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
