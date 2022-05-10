package com.controller.apicontroler.controller;

import com.controller.apicontroler.service.KeyboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/keyboard")
public class KeyboardController {
    
    @Autowired
    private KeyboardService keyboardService;
    
    @PostMapping("/{action}")
    public ResponseEntity<String> keyboard(@PathVariable(value = "action", required = true) int action, @RequestBody int key) throws Exception {
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(keyboardService.keyboard(action, key));
    }
    
}
