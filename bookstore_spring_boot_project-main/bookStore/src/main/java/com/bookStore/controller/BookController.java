package com.bookStore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.bookStore.entity.Book;
import com.bookStore.entity.MyBookList;
import com.bookStore.service.BookService;
import com.bookStore.service.MyBookListService;

import java.util.List;

@RestController
@RequestMapping("/api")
public class BookController {
	
	@Autowired
	private BookService service;
	
	@Autowired
	private MyBookListService myBookService;
	
	// Book endpoints
	@GetMapping("/books")
	public List<Book> getAllBooks() {
		return service.getAllBook();
	}
	
	@GetMapping("/books/{id}")
	public Book getBookById(@PathVariable int id) {
		return service.getBookById(id);
	}
	
	@PostMapping("/books")
	public Book addBook(@RequestBody Book book) {
		service.save(book);
		return book;
	}
	
	@PutMapping("/books/{id}")
	public Book updateBook(@PathVariable int id, @RequestBody Book book) {
		book.setId(id);
		service.save(book);
		return book;
	}
	
	@DeleteMapping("/books/{id}")
	public void deleteBook(@PathVariable int id) {
		service.deleteById(id);
	}
	
	// My Books endpoints
	@GetMapping("/mybooks")
	public List<MyBookList> getMyBooks() {
		return myBookService.getAllMyBooks();
	}
	
	@PostMapping("/mybooks")
	public MyBookList addToMyBooks(@RequestBody MyBookList myBook) {
		myBookService.saveMyBooks(myBook);
		return myBook;
	}
	
	@DeleteMapping("/mybooks/{id}")
	public void deleteFromMyBooks(@PathVariable int id) {
		myBookService.deleteById(id);
	}
}
