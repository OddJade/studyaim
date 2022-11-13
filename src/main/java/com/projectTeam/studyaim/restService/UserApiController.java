package com.projectTeam.studyaim.restService;

import com.projectTeam.studyaim.model.UserDto;
import com.projectTeam.studyaim.userService.UserService;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
class UserApiController {
    @Autowired
    private UserService userService;

    @GetMapping("/users") // 모든 유저 정보 반환
    List<UserDto> allUsers(){
        return userService.allUsers();
    }

    @PostMapping("/users") // 회원가입
    UserDto newUser(@RequestBody UserDto userDto) {
        return userService.newUser(userDto);
    }

    @GetMapping("/users/info/{userName}")
    public JSONObject findUserInfo(@PathVariable String userName) {
        return userService.getUserInfo(userName);
    }

    @DeleteMapping("/users/{userId}") // 회원탈퇴
    void deleteUser(@PathVariable Long userId) {
        userService.deleteUser(userId);
    }

}
