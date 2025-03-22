package com.balu5387.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5000")
public class TodoController {

    @Autowired
    TodoRepository todoRepository;
    @GetMapping("")
    public List<Todo> getTasks(){
        return  todoRepository.findAll();
    }
    @PostMapping("add")
    public ResponseEntity<?> addTask(@RequestBody Todo todo){
        todoRepository.save(todo);
        return new ResponseEntity<>("Task Added", HttpStatus.OK);
    }
    @DeleteMapping("delete/{id}")
    public ResponseEntity<?> deleteTask(@PathVariable Integer id){
        todoRepository.deleteById(id);
        return new ResponseEntity<>("Task Deleted",HttpStatus.OK);
    }

}
