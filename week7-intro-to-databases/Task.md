Build a Simple CRUD API using Express (MVC Architecture)

# Task: Build a Simple CRUD API using Express (MVC Architecture)

## Objective

Create a simple RESTful API for managing a **collection of books** using **Express.js**. The API should follow the **MVC (Model-View-Controller)** architecture and include **middlewares**, both **custom** and **third-party**.

---

## Requirements

### 1. Project Structure (MVC)

Organize your project as follows:

```
/book-api  
│── /src  
│   │── /controllers  
│   │   ├── bookController.js  
│   │── /models  
│   │   ├── bookModel.js  
│   │── /routes  
│   │   ├── bookRoutes.js  
│   │── /middlewares  
│   │   ├── customMiddleware.js   
│   │── app.js  
│   │── server.js  
│── package.json  
│── .env  
```

---

### 2. Features to Implement (CRUD Operations)


| Method | Endpoint     | Description             |
| ------ | ------------ | ----------------------- |
| GET    | `/books`     | Retrieve all books      |
| GET    | `/books/:id` | Retrieve a book by ID   |
| POST   | `/books`     | Add a new book          |
| PUT    | `/books/:id` | Update an existing book |
| DELETE | `/books/:id` | Delete a book           |

Each **book** should have:

* `title` (String, required)
* `author` (String, required)
* `yearPublished` (Number, required)

---

### 3. Middlewares

#### A. Third-Party Middlewares (Use these)

* `express.json()` → To parse JSON requests.
* `morgan` → Log API requests.

#### B. Custom Middleware (Create one)

* **Request Logger Middleware:** Logs each request method and URL.
* **Validation Middleware:** Ensure that `title`, `author`, and `yearPublished` are provided when creating or updating a book.

---

### 5. Additional Requirements

* Use **environment variables** (`dotenv`) to store sensitive information like the database connection string.
* Separate **routes, controllers, and models** following MVC principles.
* Return **proper HTTP status codes** and error messages.

## Submission

* Upload your project to a new **GitHub** repo and share the repository link.
