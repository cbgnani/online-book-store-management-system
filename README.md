# Book Store Management System

## 📌 Project Description

The **Book Store Management System** is a web-based application developed using Spring Boot. The application allows users to manage book details by performing operations such as adding, viewing, updating, and deleting books. The system uses MySQL for database management and Thymeleaf for rendering dynamic web pages.

The project follows the **MVC architecture** and demonstrates CRUD operations, database integration, and RESTful service concepts using modern Java technologies.

---

## 🚀 Technologies Used

* Java
* Spring Boot
* Spring Data JPA
* Thymeleaf
* MySQL
* HTML / CSS
* Maven

---

## ⚙️ Features

* Add new books to the system
* View list of available books
* Update book details
* Delete books from the system
* Manage personal book list
* Dynamic web pages using Thymeleaf

---

## 📂 Project Structure

```
bookStore
│
├── controller
│   ├── BookController
│   └── MyBookListController
│
├── entity
│   ├── Book
│   └── MyBookList
│
├── repository
│   ├── BookRepository
│   └── MyBookRepository
│
├── templates
│   ├── home.html
│   ├── bookRegister.html
│   ├── bookList.html
│   ├── bookEdit.html
│   └── myBooks.html
│
└── BookStoreApplication
```

---

## 🛠️ How to Run the Project

1. Clone the repository from GitHub.
2. Open the project in an IDE such as IntelliJ IDEA or VS Code.
3. Configure the MySQL database in `application.properties`.
4. Create the required database in MySQL.
5. Run the `BookStoreApplication` class.

The application will start on:

```
http://localhost:8080
```

---

## 🎯 Learning Objectives

This project demonstrates:

* Spring Boot application development
* MVC architecture implementation
* CRUD operations using Spring Data JPA
* Database connectivity with MySQL
* Dynamic UI development using Thymeleaf

---

## 👨‍💻 Author

Nani C

