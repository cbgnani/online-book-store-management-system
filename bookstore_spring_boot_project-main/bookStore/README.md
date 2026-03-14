Online Book Store Management System
Project Overview

The Online Book Store Management System is a web-based application developed using Spring Boot, Spring Data JPA, MySQL, Thymeleaf, HTML, and CSS. The application allows users to view and search for available books, while administrators can manage the bookstore inventory by adding, updating, and deleting book records.

The project demonstrates the implementation of CRUD operations, database integration, and MVC architecture using Spring Boot.

Features
Book Management

Display list of books available in the store

Search books by title or author

View book details

Admin Operations

Add new books

Update book details

Delete books from inventory

Manage book records

Technologies Used

Java

Spring Boot

Spring Data JPA

MySQL

Thymeleaf

HTML

CSS

Git & GitHub

Project Architecture
Controller Layer
↓
Service Layer
↓
Repository Layer
↓
MySQL Database

Controller: Handles user requests

Service: Contains business logic

Repository: Manages database operations using Spring Data JPA

Database Structure
Books Table
Column	Type
id	INT
title	VARCHAR
author	VARCHAR
price	DOUBLE
Application Workflow

The application displays a list of books available in the store.

Users can search for books by title or author.

Admin can add new books to the database.

Admin can update book details when needed.

Admin can delete books from the store inventory.

All book data is stored and retrieved from the MySQL database using Spring Data JPA.

How to Run the Project
1. Clone the Repository
   git clone https://github.com/yourusername/online-book-store.git
2. Open in IntelliJ IDEA

Import the project as a Maven project.

3. Configure Database

Update application.properties:

spring.datasource.url=jdbc:mysql://localhost:3306/bookstore
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
4. Run the Application

Run the main Spring Boot class.

5. Open in Browser
   http://localhost:1001