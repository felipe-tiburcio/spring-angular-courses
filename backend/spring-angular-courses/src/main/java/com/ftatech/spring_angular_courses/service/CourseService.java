package com.ftatech.spring_angular_courses.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ftatech.spring_angular_courses.model.Course;
import com.ftatech.spring_angular_courses.repository.CourseRepository;

@Service
public class CourseService {
    CourseRepository courseRepository;

    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public List<Course>fetchCourses() {
        return courseRepository.findAll();
    }
}
