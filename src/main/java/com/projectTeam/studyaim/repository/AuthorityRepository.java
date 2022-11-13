package com.projectTeam.studyaim.repository;

import com.projectTeam.studyaim.model.RoleDto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorityRepository extends JpaRepository<RoleDto, String> {
}
