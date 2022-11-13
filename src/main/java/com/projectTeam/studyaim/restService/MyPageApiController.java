package com.projectTeam.studyaim.restService;

import com.projectTeam.studyaim.model.UserDto;
import com.projectTeam.studyaim.userService.UserService;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class MyPageApiController {
    @Autowired
    private UserService userService;

    // 마이페이지를 눌렀을때의 요청 API + 작성글 조회
    @GetMapping("/users/{userName}")
    public ResponseEntity<UserDto> findUser(@PathVariable String userName) {
        return ResponseEntity.ok(userService.getMyUserWithRoles().get());
    }

    @PutMapping("/users/{userId}") // 예전 유저 정보 변경 api로 보임
    UserDto replaceUser(@RequestBody UserDto newUser, @PathVariable Long userId) {
        return userService.replaceUser(newUser, userId);
    }

    @PutMapping("/users/modify") // 유저 정보 변경
    public void replacePost(@RequestBody UserDto newUser) {
        userService.modifyUserPassword(newUser);
    }

    // 마이페이지 체크 박스에 따른 게시글 / 댓글 삭제
    @PostMapping("/users/mypage")
    void deleteMyPosts(@RequestBody JSONObject items,
                       @RequestParam String type) {
        userService.deleteMyPosts(type, items);
    }

    @GetMapping("/mypage/{userName}") // 게시글 및 댓글, 답글 및 댓글 get
    public JSONObject requestPostsOrCommentsOrReplies(@PathVariable String userName, @RequestParam(required = false, defaultValue = "myPosts") String menuType) {
        return userService.searchMyData(userName, menuType);
    }

    @GetMapping("/mypage/info/{userName}")
    public JSONObject requestUserInfo(@PathVariable String userName) {
        return userService.getUserInfo(userName);
    }


}
