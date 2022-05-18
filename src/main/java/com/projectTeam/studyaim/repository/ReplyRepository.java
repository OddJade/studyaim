package com.projectTeam.studyaim.repository;

import com.projectTeam.studyaim.model.PostDto;
import com.projectTeam.studyaim.model.ReplyDto;
import com.projectTeam.studyaim.model.UserDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReplyRepository extends JpaRepository<ReplyDto, Long> {
    List<ReplyDto> findByUserDtoOrderByPostCreatedAtDesc(UserDto userDto);
    Page<ReplyDto> findByPostDtoOrderByPostCreatedAtAsc(PostDto postDto, Pageable pageable);
}
