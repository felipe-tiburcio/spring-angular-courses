package com.ftatech.spring_angular_courses.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ftatech.spring_angular_courses.model.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
}
