package com.example.bookapi.service;

import com.example.bookapi.model.Book;
import com.example.bookapi.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Book addBook(Book book) {
        return bookRepository.save(book);
    }

    public Book getBookById(Integer id) {
        return bookRepository.findById(id).orElse(null);
    }

    public Book updateBook(Integer id, Book book) {
        Optional<Book> existing = bookRepository.findById(id);
        if (existing.isPresent()) {
            Book b = existing.get();
            b.setTitle(book.getTitle());
            b.setAuthor(book.getAuthor());
            return bookRepository.save(b);
        }
        return null;
    }

    public boolean deleteBook(Integer id) {
        if (bookRepository.existsById(id)) {
            bookRepository.deleteById(id);
            return true;
        }
        return false;
    }
} 