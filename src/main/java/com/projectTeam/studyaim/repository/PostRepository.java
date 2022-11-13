package com.projectTeam.studyaim.repository;

import com.projectTeam.studyaim.model.PostCategory;
import com.projectTeam.studyaim.model.PostDto;
import com.projectTeam.studyaim.model.UserDto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepository extends JpaRepository<PostDto, Long> {
    List<PostDto> findByPostTitle(String postTitle);
    long countByPostType(PostCategory postType);
    //    Page<PostDto> findByPostType(PostCategory postType, Pageable pageable);       // Pageable을 사용할 경우
    List<PostDto> findByPostTypeOrderByPostCreatedAtDesc(PostCategory postType);                            // 전체 데이터를 불러올 경우
    List<PostDto> findByUserDtoOrderByPostCreatedAtDesc(UserDto userDto);
    List<PostDto> findTop6ByOrderByPostCreatedAtDesc();

    PostDto getById(Long postId);
}
