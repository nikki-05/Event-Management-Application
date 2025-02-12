# 🎉 Event Management Application 📅  

A **full-stack MERN (MongoDB, Express.js, React, Node.js) event management platform** where users can **create, view, and manage events** in real time. The app supports **user authentication**, **guest access**, **event filtering**, and **WebSockets for live attendee updates**.

---

## 🚀 **Features**  
✅ **User Authentication** (Register, Login, Guest Access)  
✅ **Create & Manage Events** (CRUD functionality)  
✅ **Real-time Updates** (Live attendee count using WebSockets)  
✅ **Event Filtering** (Upcoming, Past, All Events)  
✅ **Responsive UI** (Beautiful, easy-to-use interface)  
✅ **JWT Authentication** (Secure login system)  

---

## 🛠️ **Tech Stack**
### **Frontend**  
- React.js  
- Axios (API requests)  
- React Router (Navigation)  
- Normal CSS 

### **Backend**  
- Node.js  
- Express.js  
- MongoDB (Database)  
- Mongoose (ODM)  
- JSON Web Token (JWT for authentication)  
- WebSockets (Real-time event updates)  

---

## 🏗️ **Installation & Setup**

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/nikki-05/Event-Management-Application.git
cd Event-Management-Application
```

### **2️⃣ Install Dependencies**
#### **Frontend Setup**  
```sh
cd frontend
npm install
npm start  # Runs on localhost:3000
```
#### **Backend Setup**  
```sh
cd backend
npm install
npm run dev  # Runs on localhost:5000
```

---

## 🌐 **Environment Variables (.env)**
Create a `.env` file inside the `backend` folder and add:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```


## 📦 **Deployment**
The project is deployed using **Vercel**.  
### **Frontend Deployment**
```sh
vercel --prod
```
### **Backend Deployment (Free Hosting)**
Use **Render** or **Railway** for backend hosting.

---

## 📸 **Screenshots**
### **Homepage**
![Homepage](public/assets/homepage_screenshot.png)
### **Create Event Page**
![Create Event](public/assets/create_event_screenshot.png)

---

## 📜 **License**
This project is **open-source** and available under the MIT License.

---

## 🤝 **Contributing**
Want to improve this project?  
1. Fork the repository  
2. Create a new branch (`feature-branch`)  
3. Commit your changes (`git commit -m "Added new feature"`)  
4. Push and submit a pull request  

---

## 📧 **Contact**
💡 **Developer:** Nikita Tiwari  
📩 **Email:** nikitatewari1633@gmail.com  
🌐 **GitHub:** [nikki-05](https://github.com/nikki-05)  

🔥 Happy Coding! 🚀
