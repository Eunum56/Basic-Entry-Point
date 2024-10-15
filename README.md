# Basic Login/Signup with Dashboard

## Project Overview

This project is a web application that allows users to sign up, log in, and access a secure dashboard. It is built using React for the frontend and Node.js with Express for the backend. User authentication is managed with JSON Web Tokens (JWT), and passwords are securely hashed using bcrypt.

## Features

- User registration (signup)
- User authentication (login)
- Secure dashboard accessible only to logged-in users
- Password hashing for security
- JWT for session management

## Tech Stack

### Frontend

- **React**: JavaScript library for building user interfaces
- **React Router**: For client-side routing

### Backend

- **Node.js**: JavaScript runtime for the server
- **Express**: Web framework for Node.js
- **MongoDB**: NoSQL database for storing user data
- **Mongoose**: ODM for MongoDB
- **Bcrypt**: For hashing passwords
- **JSON Web Token (JWT)**: For secure authentication
- **Cookie-parser**: For parsing cookies
- **CORS**: To handle Cross-Origin Resource Sharing
- **Dotenv**: For environment variable management

## Demo

You can view live demo here :

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- MongoDB (local or remote instance)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Eunum56/Basic-Entry-Point
   cd Basic-Entry-Point
   ```

2. Start Backend Server:

   ```bash
   npm install
   ```

   To Install the Backend Dependences

   ```bash
   npm run dev
   ```

   To start the Backend Server (Install nodemon if you haven't)

3. Start Frontend Server:
   Go to Frontend folder

   ```bash
      cd </frontend>
   ```

   ```bash
   npm install
   ```

   To Install Frontend Dependences

   ```bash
   npm run dev
   ```

   To start the Frontend Server

4. Create a `.env` file in the Root `Basic-Entry-Point` directory with the following variables

   PORT=4000
   MONGO_URL=your_mongodb_uri
   JWT_TOKEN=your_jwt_secret
   NODE = development

## Contributing

We welcome contributions! Whether you're fixing a bug, adding a feature, or improving documentation, your help is appreciated.
