package com.projectTeam.studyaim.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class ReplyDto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long replyId;

    @ManyToOne
    @JoinColumn(name = "userId")
    @JsonIgnore
    private UserDto userDto;

    @ManyToOne
    @JoinColumn(name = "postId")
    @JsonIgnore
    private PostDto postDto;

    private String replyContent;
    private int star;

    @OneToMany(mappedBy = "replyDto", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ReplyCommentDto> replyComments = new ArrayList<>();

    @Column(updatable = false)
    private LocalDateTime postCreatedAt;
    private LocalDateTime postUpdatedAt;

    @PrePersist
    public void prePersist() {
        // utc
//        LocalDateTime now = LocalDateTime.now().atZone(ZoneId.of("Asia/Seoul")).toLocalDateTime();
        LocalDateTime now = ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime();
        this.postCreatedAt = now;
        this.postUpdatedAt = now;
    }

    @PreUpdate
    public void preUpdate() {
        this.postUpdatedAt = ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime();
    }
}
