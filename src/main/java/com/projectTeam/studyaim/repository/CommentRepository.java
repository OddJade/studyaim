package com.projectTeam.studyaim.repository;

import com.projectTeam.studyaim.model.CommentDto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<CommentDto, Long> {
//    List<CommentDto> findByReferenceIdAndCommentType(Long referenceId, CommentCategory commentType);
////    List<CommentDto> findByReferenceId(Long referenceId);
//    List<CommentDto> findByCommentId(Long commentId);
}
