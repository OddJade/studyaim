package com.projectTeam.studyaim.userService;

import com.projectTeam.studyaim.model.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/account")
public class AccountController {
    @Autowired
    private UserService userService;

    @PutMapping("/register")
    public void replacePost(@RequestBody UserDto newUser) {
        if(userService.isAlreadySignUp(newUser.getUserName())){
            throw new RuntimeException("already exist user");
        }
        userService.modifyUserPassword(newUser);
    }

}