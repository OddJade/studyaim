package com.projectTeam.studyaim.repository;

import com.projectTeam.studyaim.model.PostCommentDto;
import com.projectTeam.studyaim.model.PostDto;
import com.projectTeam.studyaim.model.UserDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostCommentRepository extends JpaRepository<PostCommentDto, Long> {
    Page<PostCommentDto> findByPostDtoOrderByCommentCreatedAtAsc(PostDto postDto, Pageable pageable);
    List<PostCommentDto> findByUserDtoOrderByCommentCreatedAtDesc(UserDto userDto);
}
