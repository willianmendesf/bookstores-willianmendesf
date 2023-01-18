package com.willianmendesf.bookstoremanager.controller;

import com.willianmendesf.bookstoremanager.entity.Author;
import com.willianmendesf.bookstoremanager.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/author")
public class AuthorController {

    @Autowired
    private AuthorService service;

    @GetMapping("/list")
    private List<Author> list() {
        return service.list();
    }

    @PostMapping("/author/{id}")
    private Author author(@PathVariable Long id) {
        return service.author(id);
    }
}
