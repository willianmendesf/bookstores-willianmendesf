package com.willianmendesf.bookstoremanager.service;

import com.willianmendesf.bookstoremanager.entity.Book;
import com.willianmendesf.bookstoremanager.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepository repository;

    public List<Book> list() {
        return repository.findAll();
    }

    public Book search(Long id) {
        return repository.getById(id);
    }

}
