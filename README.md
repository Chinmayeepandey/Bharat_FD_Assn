
## 🚀 A FAQ Management System with Multi-language Support📝 with an Admin Panel, API, and Redis Caching, built with Node.js, Express.js, MongoDB, and Docker.

### 📌 Features

- ✔ Create, Read, Update, and Delete (CRUD) FAQs
- ✔ Admin Dashboard for managing FAQs easily
- ✔ Multi-language Translation Support using Google Cloud Translate
- ✔ Markdown Support for rich text formatting
- ✔ REST API for programmatic access
- ✔ Redis Caching for fast responses
- ✔ Dockerized Deployment
- ✔ Automated Testing with Jest & Supertest

### 🛠️ Tech Stack

- Backend: Node.js, Express.js
- Database: MongoDB
- Cache: Redis
- Admin Panel: AdminJS
- Testing: Jest, Supertest
- Containerization: Docker, Docker Compose

### 📦 Installation

🔹 Prerequisites
- 1.Install Node.js (>= v18)
- 2.Install Docker & Docker Compose
- 3.Get a Google Cloud API Key for translations

### Clone the Repository:
``` sh
git clone https://github.com/chinzproject/faq-management.git

cd faq-management/backend
```
### Create a .env File:
```sh
PORT=8000
MONGO_URI=mongodb://mongo:27017/faq_db
REDIS_HOST=redis
REDIS_PORT=6379
GOOGLE_APPLICATION_CREDENTIALS=/app/src/config/translation-api-key.json
```
### Start the Application (Using Docker):
```sh
docker-compose up --build -d
```
### 🚀 The server will start at:
- API: http://localhost:8000/api/faqs
- Admin Panel: http://localhost:8000/admin

### 🚀 API Endpoints:
- Method	                         Endpoint	                              Description
- GET	                            /api/faqs                              	Get all FAQs
- POST	                           /api/faqs	                              Create a new FAQ
- PUT	                            /api/faqs/:id	                          Update an FAQ
- DELETE	                         /api/faqs/:id	                          Delete an FAQ
- GET	                            /api/health	                            Check server health

### 🛠️ Running Tests
```sh
npm test
```
✅ Uses Jest & Supertest to validate API functionality.

### 🖥️ Admin Panel:

- Open http://localhost:8000/admin
- Manage FAQs easily (create, edit, delete)

### 📦 Deployment:
🔹 Using Docker
```sh
docker-compose up --build -d
```
🔹 Without Docker
```sh
npm install
npm start
```
🤝 Contributing:

- 1.Fork the repo
- 2.Create a new branch (git checkout -b feature-branch)
- 3.Commit changes (git commit -m "Added feature X")
- 4.Push to the branch (git push origin feature-branch)
- 5.Create a Pull Request

## 📝 License:
This project is MIT Licensed.

## 📞 Contact:
💬 For any queries, feel free to reach out! 🚀

