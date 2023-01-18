package com.willianmendesf.bookstoremanager.controller;

import com.willianmendesf.bookstoremanager.entity.Book;
import com.willianmendesf.bookstoremanager.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bookstore")
public class BookController {

    @Autowired
    private BookService service;

    @GetMapping("/list")
    public List<Book> list() {
        return service.list();
    }

    @PostMapping("/search/id/{id}")
    public Book search(@PathVariable Long id) {
        return service.search(id);
    }
}
