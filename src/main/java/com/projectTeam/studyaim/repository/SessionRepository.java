package com.projectTeam.studyaim.repository;

import com.projectTeam.studyaim.model.SessionDto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SessionRepository extends JpaRepository<SessionDto, Long> {

}
