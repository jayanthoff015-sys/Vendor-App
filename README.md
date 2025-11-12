# 🧾 Vendor Invoicing & Payment Tracker

A full-stack web application to **manage vendors, track invoices, monitor payments**, and generate alerts for overdue transactions.  
Built for internal company use to streamline accounting and finance operations.

---

## 🚀 Project Summary

This platform provides a **comprehensive system** for managing vendors, invoices, and payments in an organization.  
It enables **admin onboarding**, **invoice uploads**, **payment tracking**, and **alert reminders** for overdue invoices — similar to real-world accounting flows used in companies like Zerodha.

---

## 📋 Features

### 👤 Admin & Account Management
- Onboard new vendors with contact and payment info  
- Manage accountant and auditor roles  
- Maintain vendor bank and tax details (TDS, GST, etc.)

- <img width="1915" height="910" alt="Screenshot 2025-11-12 220225" src="https://github.com/user-attachments/assets/6d45ba9d-1c7b-4b4b-af4d-43e55cafc113" />


<img width="1915" height="911" alt="Screenshot 2025-11-12 220207" src="https://github.com/user-attachments/assets/89d5b864-1cee-4aa7-8b22-6a34b31cf6f4" />


### 💰 Invoice Management
- Add, view, edit, and delete invoices  
- Attach proof of invoices or scanned copies (future backend integration)  
- Track status: _Pending, Paid, Overdue_  
- View invoice analytics in dashboard (Total, Pending, Overdue, Average payment time)

### 💳 Payment Tracking
- Record payment transactions with reference number  
- Track payment methods (Bank Transfer, Cheque, Cash, etc.)  
- Manage reconciliation for completed invoices

### 🔔 Alerts & Notifications
- Automatic reminders for overdue invoices (to be implemented with backend scheduler)  
- Color-coded status tags for quick visibility

### 📊 Dashboard
- Shows summarized financial metrics:
  - Total invoices
  - Pending amount
  - Average turnaround time
  - Overdue invoices
- Displays **recent activities** like new invoices or payments

- <img width="1903" height="910" alt="Screenshot 2025-11-12 220102" src="https://github.com/user-attachments/assets/fcd6dd09-14de-4b62-abe9-a60108de02f7" />



---

## 🧱 System Design Overview

### 🖥️ Frontend
- **React.js** with functional components  
- **React Router DOM** for client-side routing  
- **Plain CSS** (no templates or UI frameworks)  
- Modular page components:  
  - `Dashboard.jsx`  
  - `Vendors.jsx`  
  - `Invoices.jsx`  
  - `Payments.jsx`  
  - `Alerts.jsx`  
  - `Navbar.jsx`

### ⚙️ Backend (Planned / Node Integration)
- **Node.js** with **Express.js**
- REST API routes:
  - `POST /api/vendors` — Add vendor
  - `POST /api/invoices` — Add invoice
  - `POST /api/payments` — Record payment
  - `GET /api/dashboard` — Fetch summary
- **Mongoose + MongoDB** for database  
  - `Vendor` — stores vendor and contact info  
  - `Invoice` — stores invoice details and due dates  
  - `Payment` — stores transaction data  
  - `Document` — stores uploaded proof files  
  - `Alert` — stores reminders and notifications  

---

## 🧩 Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React.js, React Router DOM, CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB with Mongoose |
| State Management | useState, useEffect hooks |
| Version Control | Git & GitHub |
| Deployment | Replit / Render / Vercel (Frontend) |

---

## 🧑‍💻 Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/vendor-invoice-tracker.git
cd vendor-invoice-tracker
