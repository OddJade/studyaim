package com.projectTeam.studyaim.userService;
// 사용자 데이터베이스에 저장된 사용자를 가져올 때 사용하는 클래스
// UserRepository를 이용해 사용자를 생성하고 로그인 시 인증에 사용할 메서드를 작성한다

import com.projectTeam.studyaim.model.RoleDto;
import com.projectTeam.studyaim.model.UserDto;
import com.projectTeam.studyaim.repository.PostRepository;
import com.projectTeam.studyaim.repository.ReplyRepository;
import com.projectTeam.studyaim.repository.UserRepository;
import com.projectTeam.studyaim.util.SecurityUtil;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private PostRepository postRepository;
    @Autowired
    private ReplyRepository replyRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder; // /configuration/WebSecurityConfig에서 Bean객체로 등록함.


    public UserService(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    private final String clientId = "bee5cefdb5d9d94c0b32f71cf0de38e7";
    private final String clientSecret = "LcnyKGSgPVuOolspq5ococnDLfrlDqXM";

    // 사용자 엔티티 생성 메서드
    public UserDto save(UserDto userDto) {
        if (userRepository.findOneWithAuthoritiesByUserName(userDto.getUserName()).orElse(null) != null) {
            throw new RuntimeException("already exist user");
        }

        RoleDto role = RoleDto.builder()
                .roleId(1L)
                .build();

        UserDto user = UserDto.builder()
                .userName(userDto.getUserName())
                .userPassword(passwordEncoder.encode(userDto.getUserPassword()))
                .userEnabled(true)
                .roles(Collections.singleton(role))
                .build();
        return userRepository.save(user);
    }

    // getUserWithAuthorities 메소드는 username을 파라미터로 받아 해당 유저의 정보 및 권한 정보를 리턴
    // getMyUserWithAuthorities 메소드는 위에서 만든 SecurityUtil의 getCurrentUsername() 메소드가 리턴하는 username의 유저 및 권한 정보를 리턴
    @Transactional(readOnly = true)
    public Optional<UserDto> getUserWithRoles(String username) {
        return userRepository.findOneWithAuthoritiesByUserName(username);
    }

    @Transactional(readOnly = true)
    public Optional<UserDto> getMyUserWithRoles() {
        return SecurityUtil.getCurrentUsername().flatMap(userRepository::findOneWithAuthoritiesByUserName);
    }

    @Transactional(readOnly = true)
    public JSONObject getUserInfo(String username) {

        UserDto user = userRepository.findByUserName(username);
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("userId", user.getUserId());
        jsonObject.put("userName", user.getUserName());
        jsonObject.put("userGrade", user.getUserGrade());
        jsonObject.put("userStars", user.getUserStars());
        jsonObject.put("userProfileImage", user.getUserProfileImage());

        return jsonObject;
    }

    public boolean isAlreadySignUp(String username) {
        return (userRepository.countByUserName(username) >= 1) ? true : false;
    }

    public UserDto modifyUserPassword(UserDto newUser) {
        UserDto foundUser = userRepository.findByUserName(newUser.getUserName());

        if (foundUser == null) {
            // 기존에 없는 경우 새로 객체를 만들어서 저장하기.
            System.out.println("유저없음");
            // 비밀번호 암호화
            newUser.setUserPassword(passwordEncoder.encode(newUser.getUserPassword()));

            // 기본 활성화 상태
            RoleDto role = RoleDto.builder()
                    .roleId(1L)                 // 기본 권한 1번 == ROLE_USER
                    .build();
            newUser.setRoles(Collections.singleton(role));
            return userRepository.save(newUser);
        } else {
            foundUser.setUserPassword(passwordEncoder.encode(newUser.getUserPassword()));
            foundUser.setUserProfileImage(newUser.getUserProfileImage());
            foundUser.setUserThumbnailImage(newUser.getUserThumbnailImage());

            return userRepository.save(foundUser);
        }
    }

    // Called from UserApiController (GET /api/users )
    public List<UserDto> allUsers() {
        return userRepository.findAll();
    }

    // Called from UserApiController (GET /api/users/{userName} )
    public UserDto findUser(String userName) {
        return userRepository.findByUserName(userName);
    }

    // Called from UserApiController (POST /api/users )
    public UserDto newUser(UserDto userDto) {
        return userRepository.save(userDto);
    }

    // Called from UserApiController (DELETE /api/users/{userId} )
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }

}
