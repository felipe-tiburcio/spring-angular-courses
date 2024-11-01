package com.ftatech.spring_angular_courses.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ftatech.spring_angular_courses.model.Course;
import com.ftatech.spring_angular_courses.service.CourseService;

@RestController
@RequestMapping("/api/courses")
@CrossOrigin(origins = { "*" })
public class CourseController {

    private final CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping
    public List<Course> getCourses() {
        return courseService.fetchCourses();
    }
}
