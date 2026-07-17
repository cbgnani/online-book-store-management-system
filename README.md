# Online Bookstore Management System

A full-stack bookstore application with Spring Boot REST API backend and React frontend, running on a single port (8080).

---

## 🚀 Quick Start

### Prerequisites
- Java 11 or higher
- Node.js 14+ and npm
- Maven 3.6+
- MySQL 5.7+ running

### 1. Setup Database
```sql
CREATE DATABASE bookstore;
```

### 2. Run Application
```bash
run.bat
```

✅ Opens at **http://localhost:8080**

---

## 📋 How It Works

### Architecture
- **Frontend (React):** 5 components - Home, BookList, BookRegister, BookEdit, MyBooks
- **Backend (Spring Boot):** REST API with 8 endpoints for book management
- **Database (MySQL):** Two tables - `books` and `mybooks`
- **Single Port:** React build bundled in Spring Boot → served from same port

### User Flow
1. User accesses http://localhost:8080
2. FallbackController serves React's index.html
3. React Router displays requested page (home, books, register, edit, my-books)
4. User actions trigger API calls to Spring Boot `/api/*` endpoints
5. Spring Boot processes requests and returns JSON responses
6. React updates UI with data from database

---

## 📁 Project Structure

```
bookStore/                          # Spring Boot Backend
  ├── src/main/java/com/bookStore/
  │   ├── controller/
  │   │   ├── BookController.java        # All API endpoints
  │   │   └── FallbackController.java    # React routing handler
  │   ├── entity/
  │   │   ├── Book.java                  # Book model
  │   │   └── MyBook.java                # Personal collection model
  │   └── repository/
  │       ├── BookRepository.java        # Database access for books
  │       └── MyBookRepository.java      # Database access for mybooks
  ├── resources/application.properties    # Database config
  └── pom.xml                            # Java dependencies

bookstore-frontend/                 # React Frontend
  ├── src/components/
  │   ├── Home.js                    # Landing page
  │   ├── BookList.js                # Browse & manage books
  │   ├── BookRegister.js            # Add new book form
  │   ├── BookEdit.js                # Edit book form
  │   └── MyBooks.js                 # Personal collection
  ├── src/services/api.js            # Axios HTTP client
  ├── src/App.js                     # Routes & navigation
  └── public/index.html              # Entry HTML file

run.bat                             # Start application (one command)
```

---

## 🔌 API Endpoints

All endpoints start with `/api`

| Method | Endpoint | Description |
|--------|----------|-------------|
| **GET** | `/books` | Get all books |
| **GET** | `/books/{id}` | Get single book by ID |
| **POST** | `/books` | Add new book (send JSON with bookName, authorName, bookPrice, publishDate) |
| **PUT** | `/books/{id}` | Update book details |
| **DELETE** | `/books/{id}` | Delete book |
| **GET** | `/mybooks` | Get personal collection |
| **POST** | `/mybooks` | Add book to personal collection |
| **DELETE** | `/mybooks/{id}` | Remove from personal collection |

### Example Request
```bash
# Get all books
curl http://localhost:8080/api/books

# Add new book
curl -X POST http://localhost:8080/api/books \
  -H "Content-Type: application/json" \
  -d '{"bookName":"1984","authorName":"George Orwell","bookPrice":13.99,"publishDate":"1949-06-08"}'
```

---

## ⚙️ Development

### Frontend Development
```bash
cd bookstore-frontend
npm install --legacy-peer-deps

# Start dev server (http://localhost:3000) - auto-reloads on changes
npm start

# Build for production
npm run build
```

### Backend Development
```bash
cd bookStore

# Start server (http://localhost:8080) - auto-reloads via DevTools
mvn spring-boot:run

# Build JAR file
mvn clean package -DskipTests
```

### Database Configuration
Edit `bookStore/src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/bookstore
spring.datasource.username=root
spring.datasource.password=password
```

---

## 📦 Production Build

1. Build React frontend:
```bash
cd bookstore-frontend
npm run build
```

2. Copy build to backend:
```bash
xcopy build bookStore\src\main\resources\static\ /E /Y
```

3. Build backend JAR:
```bash
cd bookStore
mvn clean package -DskipTests
```

4. Run:
```bash
java -jar bookStore/target/bookStore-0.0.1-SNAPSHOT.jar
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18, React Router 6, Axios, Bootstrap 5 |
| **Backend** | Spring Boot 2.7.5, Spring Data JPA, Hibernate |
| **Database** | MySQL 8.0 |
| **Build** | Maven, npm |
| **Language** | Java 11, JavaScript (React) |

---

## 📖 Features

✅ Browse all books with pricing and author information  
✅ Register and add new books to inventory  
✅ Edit existing book details  
✅ Delete books from inventory  
✅ Maintain personal collection of favorite books  
✅ Responsive UI works on all screen sizes  
✅ Single-port deployment (no CORS issues)  
✅ Clean REST API  

---

## 🐛 Troubleshooting

### Port 8080 Already in Use
```bash
netstat -ano | findstr :8080
taskkill /PID <PID_NUMBER> /F
```

### MySQL Connection Error
- Ensure MySQL is running
- Verify database "bookstore" exists: `CREATE DATABASE bookstore;`
- Check credentials in `application.properties` match your MySQL setup

### React Build Not Updating After Changes
```bash
cd bookstore-frontend
npm run build
# Copy build folder to bookStore/src/main/resources/static/
cd ../bookStore
mvn clean package -DskipTests
java -jar target/bookStore-0.0.1-SNAPSHOT.jar
```

### Direct URLs Return 404 (e.g., /edit/5)
- Ensure `FallbackController.java` exists in backend
- This controller routes non-API requests to React's index.html
- Rebuild and restart backend

### npm install Fails
```bash
npm install --legacy-peer-deps
```

---

## 📝 Key Files to Know

| File | Purpose |
|------|---------|
| `BookController.java` | All REST API logic |
| `FallbackController.java` | Routes React client-side navigation |
| `App.js` | React routing setup (5 routes) |
| `api.js` | Axios client for API calls |
| `application.properties` | Database configuration |
| `pom.xml` | Java dependencies |
| `package.json` | JavaScript dependencies |

---

**Version:** 1.0.0  
**Status:** ✅ Production Ready  
**Last Updated:** July 17, 2026
