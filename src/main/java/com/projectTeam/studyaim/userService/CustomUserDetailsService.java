package com.projectTeam.studyaim.userService;

import com.projectTeam.studyaim.model.UserDto;
import com.projectTeam.studyaim.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    /*
    DB에서 유저 정보를 직접 가져오는 작업을 하는 메서드
    패스워드 부분 처리는 알아서 함.
    해당 username을 가지는 사용자가 있는지 찾아서 리턴만 해준다.
     */
    @Override
    @Transactional(rollbackFor = Exception.class) // 모든 예외, 에러에 대해 rollback 하여 트랜잭션 처리 / 옵션 없이 @Transactional만 기입 시 Checked Exception에 대해서는 rollback 수행 X
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        UserDto userDto = userRepository.findByUserName(username);
//        if (userDto == null) {
//            throw new UsernameNotFoundException("해당 사용자를 찾을 수 없습니다. : " + username);
//        }

//        CustomUserDetails customUserDetails = new CustomUserDetails();
//        customUserDetails.setUsername(userDto.getUserName());
//        customUserDetails.setUserEnabled(userDto.getUserEnabled());
//        customUserDetails.setUserProfileImage(userDto.getUserProfileImage());
//        customUserDetails.setUserThumbnailImage(userDto.getUserThumbnailImage());
//        customUserDetails.setPassword(userDto.getUserPassword());
//        ArrayList<GrantedAuthority> auth = new ArrayList<GrantedAuthority>();
//        for (RoleDto role : userDto.getRoles()) {
//            auth.add(new SimpleGrantedAuthority(role.getRoleName()));
//        }
//        customUserDetails.setAuthorities(auth);

//        return new CustomUserDetails(userDto); // 시큐리티 세션에 유저 정보가 저장된다.
        return userRepository.findOneWithAuthoritiesByUserName(username)
                .map(userDto -> createUser(username, userDto))
                .orElseThrow(() -> new UsernameNotFoundException(username + " -> cannot found user in database"));
    }

    private org.springframework.security.core.userdetails.User createUser(String username, UserDto user) {
        if(!user.getUserEnabled()) {
            throw new RuntimeException(username + "not enabled user");
        }
        List<GrantedAuthority> grantedAuthorities = user.getRoles().stream()
                .map(authority -> new SimpleGrantedAuthority(authority.getRoleName()))
                .collect(Collectors.toList());
        return new org.springframework.security.core.userdetails.User(user.getUserName(),
                user.getUserPassword(),
                grantedAuthorities);
    }
}