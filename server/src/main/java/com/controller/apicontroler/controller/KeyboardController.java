package com.controller.apicontroler.controller;

import java.awt.AWTException;
import java.awt.Robot;
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

//    action 0 = preciona e solta
//    action 1 = preciona 
//    action 2 = solta 
    @PostMapping("/{action}")
    public ResponseEntity<String> keyboard(@PathVariable(value = "action", required = true) int action, @RequestBody int key) throws Exception {
        System.err.println(key);
        System.setProperty("java.awt.headless", "false");
        try {
            Robot robot = new Robot();

            switch (action) {
                case 0:
                    robot.keyPress(key);
                    robot.keyRelease(key);
                    break;
                case 1:
                    robot.keyPress(key);
                    break;
                case 2:
                    robot.keyRelease(key);
                    break;
            }

        } catch (AWTException e) {
            e.printStackTrace();
        }
        return ResponseEntity.status(HttpStatus.ACCEPTED).body("Success");
    }

}
