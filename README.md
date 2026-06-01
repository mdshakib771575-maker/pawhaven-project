# 🐾 PawHaven - Pet Adoption Platform

## 📖 Project Overview

PawHaven is a full-stack Pet Adoption Platform built with the MERN Stack. The platform helps connect pet owners, shelters, and pet lovers by providing a simple and secure way to list pets for adoption and submit adoption requests.

Users can browse available pets, view detailed pet information, and submit adoption requests. Pet owners can manage their listings and approve or reject adoption requests through a dedicated dashboard.

---

## 🌐 Live Website

🔗 Live Site: https://pawhaven-tan.vercel.app

## 💻 Client Repository

🔗 Client Repo: https://github.com/mdshakib771575-maker/pawhaven-project

## ⚙️ Server Repository

🔗 Server Repo:https://github.com/mdshakib771575-maker/pawhaven-server

---

## ✨ Features

* Browse all available pets with detailed information
* Secure JWT Authentication with HTTPOnly Cookies
* Google Login Authentication
* Submit pet adoption requests
* Pet owners can approve or reject adoption requests
* Search pets by name using MongoDB `$regex`
* Filter pets by species using MongoDB `$in`
* Add, Update, and Delete pet listings
* Dashboard for managing listings and requests
* Responsive design for Mobile, Tablet, and Desktop
* Loading Spinner and Custom 404 Page
* Toast Notifications for all success and error messages
* Protected Private Routes

---

## 🏗️ Technologies Used

### Frontend

* Next.js
* React.js
* Tailwind CSS
* Hero UI
* React Hook Form
* Axios
* React Hot Toast
* Framer Motion

### Backend

* Node.js
* Express.js
* MongoDB
* JWT
* Cookie Parser
* CORS
* Dotenv

### Database

* MongoDB Atlas

### Authentication

* Firebase Authentication
* Google Authentication
* JWT Authentication

---

## 📂 Main Pages

### Public Pages

* Home
* All Pets
* Login
* Register
* Pet Details

### Private Pages

* Dashboard
* Add Pet
* My Listings
* My Requests
* Update Pet

---

## 🔐 Authentication Features

### Login

* Email & Password Login
* Google Login
* Protected Routes
* Redirect after successful login

### Registration

* Name
* Email
* Photo URL
* Password Validation

  * Minimum 6 characters
  * At least one uppercase letter
  * At least one lowercase letter
  * Confirm password matching

---

## 🐶 Pet Management

### Add Pet

Users can add pets with:

* Pet Name
* Species
* Breed
* Age
* Gender
* Image URL
* Health Status
* Vaccination Status
* Location
* Adoption Fee
* Description
* Owner Email

### Update Pet

Pet owners can update their own listings.

### Delete Pet

Pet owners can delete their listings with confirmation.

---

## ❤️ Adoption System

### Adoption Request

Users can:

* Submit adoption requests
* Select pickup date
* Add custom message

### Request Status

* Pending
* Approved
* Rejected

### Adoption Control

* Owners cannot adopt their own pets
* Only one request can be approved
* Once approved, pet status becomes adopted
* Further requests are blocked

---

## 🔍 Search & Filter

### Search

* Search pets by name using MongoDB `$regex`

### Filter

* Filter pets by species using MongoDB `$in`

### Sorting

* Sort pets by category/species

---

## 📦 NPM Packages Used

### Client Side

```bash
next
react
react-dom
tailwindcss
axios
firebase
react-hook-form
react-hot-toast
framer-motion
hero-ui
lucide-react
sweetalert2
```

### Server Side

```bash
express
mongodb
cors
dotenv
jsonwebtoken
cookie-parser
bcryptjs
```

---

## 🚀 Installation & Setup

### Clone Repository

```bash
git clone https://github.com/mdshakib771575-maker/pawhaven-project
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_API_URL=
```

Server `.env`

```env
PORT=5000
DB_USER=
DB_PASS=
JWT_SECRET=
NODE_ENV=production
```

### Run Project

```bash
npm run dev
```

---

## 📱 Responsive Design

The application is fully responsive and optimized for:

* Mobile Devices
* Tablets
* Laptops
* Desktop Screens

---

## 👨‍💻 Developer

Developed by Shakib Hazari

---

## 📄 License

This project is created for educational and learning purposes.
