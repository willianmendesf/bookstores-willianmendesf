package com.willianmendesf.bookstoremanager.service;

import com.willianmendesf.bookstoremanager.entity.Author;
import com.willianmendesf.bookstoremanager.repository.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthorService {

    @Autowired
    private AuthorRepository repository;

    public List<Author> list() {
        return repository.findAll();
    }

    public Author author(Long id) {
        return repository.getById(id);
    }
}
