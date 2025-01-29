

-- Create database
CREATE DATABASE TicketBookingDB;
USE TicketBookingDB;

-- Users table for login credentials
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bookings table for ticket reservations
CREATE TABLE bookings (
    booking_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    event_name VARCHAR(255) NOT NULL,
    event_date DATE NOT NULL,
    seat_number VARCHAR(10) NOT NULL,
    booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- Sample user data (passwords should be hashed in actual implementations)
INSERT INTO users (username, email, password_hash) 
VALUES ('john_doe', 'john@example.com', 'hashed_password123'),
       ('jane_doe', 'jane@example.com', 'hashed_password456');

-- Sample booking data
INSERT INTO bookings (user_id, event_name, event_date, seat_number) 
VALUES (1, 'Family Adventure', '2025-05-15', 'A12'),
       (2, 'Educational Tour', '2025-06-10', 'B7');

