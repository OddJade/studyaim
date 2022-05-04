package com.projectTeam.studyaim.userService;

import com.projectTeam.studyaim.model.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/account")
public class AccountController {
    @Autowired
    private UserService userService;

    @PutMapping("/register")
    public void replacePost(@RequestBody UserDto newUser) {
        userService.modifyUserPassword(newUser);
    }

}