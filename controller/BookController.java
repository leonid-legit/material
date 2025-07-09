package com.example.bookapi.controller;

import com.example.bookapi.model.Book;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/books")
public class BookController {

    private final List<Book> books = new ArrayList<>();

    public BookController() {
        books.add(new Book(1, "Effective Java", "Joshua Bloch"));
        books.add(new Book(2, "Clean Code", "Robert C. Martin"));
    }

    @GetMapping
    public List<Book> getBooks() {
        return books;
    }

    @PostMapping
    public Book addBook(@RequestBody Book book) {
        book.setId(books.size() + 1);
        books.add(book);
        return book;
    }

    @GetMapping("/{id}")
    public Book getBook(@PathVariable int id) {
        return books.stream()
                    .filter(b -> b.getId() == id)
                    .findFirst()
                    .orElse(null);
    }
}
