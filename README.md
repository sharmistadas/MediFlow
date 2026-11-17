# MediFlow
A smart healthcare management system for efficient patient records, medical services, and streamlined healthcare operations.
# 🏥 MediFlow – Smart Clinic Management System

**One Platform. Every Patient. Connected Care.**

MediFlow is a modern and responsive Clinic Management System designed to simplify daily healthcare operations. It provides a centralized platform for managing patients, doctors, appointments, prescriptions, billing, and clinic activities.

The project currently focuses on **Frontend Development using React.js**, with interactive dashboards, role-based navigation, and simulated data. Python backend and MySQL database integration will be implemented in future development phases.

---

## 🚀 Project Overview

MediFlow supports three different user roles:

- **Admin:** Manages complete clinic operations.
- **Doctor:** Manages appointments, consultations, prescriptions, and patient history.
- **Receptionist:** Handles patient registration, appointment booking, and billing.

## ✨ Features

### 🔐 Authentication
- Login and registration pages.
- Role-based demo login.
- Admin, Doctor, and Receptionist dashboards.
- Form validation.
- Logout functionality.

### 👨‍💼 Admin Dashboard
- Dashboard overview and statistics.
- Patient management.
- Doctor management.
- Appointment management.
- Prescription management.
- Billing management.
- Department management.
- Staff management.
- Reports and analytics.
- Clinic settings.

### 🩺 Doctor Dashboard
- View today's appointments.
- Manage assigned patients.
- Access patient details and medical history.
- Manage consultations.
- Create prescriptions.
- View previous prescriptions.
- Manage doctor profile.

### 🧑‍💻 Receptionist Dashboard
- Register new patients.
- Manage patient records.
- Book appointments.
- View and manage appointments.
- Generate patient invoices.
- Manage payments.
- View payment history.

### 📊 Reports & Analytics
- Patient statistics.
- Appointment reports.
- Monthly revenue charts.
- Doctor-wise appointment statistics.
- Payment status reports.

### 🎨 UI/UX Features
- Modern healthcare dashboard.
- Responsive design.
- Reusable React components.
- Interactive tables and forms.
- Search and filtering.
- Status badges.
- Toast notifications.
- Professional sidebar navigation.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Frontend development |
| Vite | Development environment |
| JavaScript | Application logic |
| Bootstrap 5 | Responsive UI |
| CSS3 | Custom styling |
| React Router DOM | Page navigation |
| React Icons | UI icons |
| Recharts | Analytics and charts |
| Axios | Future API integration |

---

## 📁 Project Structure

```text
MediFlow/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   │   ├── auth/
│   │   ├── admin/
│   │   ├── doctor/
│   │   └── receptionist/
│   │
│   ├── context/
│   ├── data/
│   ├── routes/
│   ├── services/
│   ├── styles/
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
└── README.md
```

---

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project folder

```bash
cd mediflow
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open in browser

```text
http://localhost:5173
```

---

## 🔄 Application Workflow

```text
              LOGIN PAGE
                  |
          Select User Role
                  |
       -----------------------
       |          |          |
      ADMIN     DOCTOR   RECEPTIONIST
       |          |          |
   Dashboard  Dashboard  Dashboard
       |          |          |
   Manage     Appointments  Register
   Patients   Consultations Patients
   Doctors    Prescriptions Appointments
   Billing    Patient       Billing
   Reports    History       Payments
       |          |          |
       -----------------------
                  |
           CLINIC OPERATIONS
```

---

## 🗺️ Future Development

The project is currently focused on frontend development.

Planned enhancements:

- Python backend integration.
- MySQL database integration.
- REST API development.
- JWT authentication.
- Secure role-based authorization.
- Real-time appointment management.
- Prescription and medical record storage.
- Payment gateway integration.
- Cloud deployment.

---

## 🎯 Project Objective

The main objective of MediFlow is to develop a centralized and user-friendly clinic management platform that reduces manual administrative work and improves the efficiency of daily healthcare operations.

This project is also developed as a practical Full Stack Development learning project, covering frontend architecture, reusable components, routing, state management, and future backend integration.

---

## 👩‍💻 Developer

**Sharmistha Das**

Frontend Developer | Full Stack Python Developer (Trainee)

GitHub: [sharmistadas](https://github.com/sharmistadas)

---

## 📄 License

This project is developed for educational and portfolio purposes.

---

⭐ If you find this project interesting, feel free to explore the repository and share your feedback.
