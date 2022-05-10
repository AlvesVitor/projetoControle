package com.controller.apicontroler.service;

import java.awt.AWTException;
import java.awt.Robot;
import org.springframework.stereotype.Service;

@Service
public class KeyboardService {

//  action 0 = preciona e solta
//  action 1 = apenas preciona 
//  action 2 = apenas solta 
    public String keyboard(int action, int key) throws Exception {
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
        return "Success";
    }

}
