package com.willianmendesf.bookstoremanager.repository;

import com.willianmendesf.bookstoremanager.entity.Author;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorRepository extends JpaRepository<Author, Long>  {

}
