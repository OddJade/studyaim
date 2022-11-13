package com.projectTeam.studyaim.openviduService;

import com.projectTeam.studyaim.model.PostDto;
import com.projectTeam.studyaim.model.SessionDto;
import com.projectTeam.studyaim.repository.SessionRepository;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SessionService {
    @Autowired
    private SessionRepository sessionRepository;


    public SessionDto createSession(JSONObject requestBody) {
        SessionDto sessionDto = SessionDto.builder()
                .sessionTitle((String) requestBody.get("sessionTitle"))
                .numConnectedObject(0)
                .sessionModerator((String) requestBody.get("sessionModerator"))
                .build();

        return sessionRepository.save(sessionDto);
    }

    public JSONArray retrieveSessions() {
        List<SessionDto> sessions = sessionRepository.findAll();
        JSONArray result = new JSONArray();

        for (SessionDto session : sessions) {
            JSONObject item = new JSONObject();
            item.put("sessionId", session.getSessionId());
            item.put("sessionTitle", session.getSessionTitle());
            item.put("numConnectedObject", session.getNumConnectedObject());
            item.put("sessionModerator", session.getSessionModerator());
            result.add(item);
        }

        return result;
    }

    public JSONObject retrieveSession(Long sessionId) {
        SessionDto sessionDto = sessionRepository.findById(sessionId).orElse(null);

        JSONObject result = new JSONObject();
        result.put("sessionId", sessionDto.getSessionId());
        result.put("sessionTitle", sessionDto.getSessionTitle());
        result.put("sessionModerator", sessionDto.getSessionModerator());

        return result;
    }
    public JSONObject modifySessionTitle(JSONObject modifiedSessionTitle, Long sessionId) {
        JSONObject jsonObject = new JSONObject();

        sessionRepository.findById(sessionId)
                .map(sessionDto -> {
                    sessionDto.setSessionTitle((String) modifiedSessionTitle.get("sessionTitle"));
                    jsonObject.put("sessionId", sessionDto.getSessionId());
                    jsonObject.put("sessionTitle", sessionDto.getSessionTitle());
                    jsonObject.put("sessionCreatedAt", sessionDto.getSessionCreatedAt());
                    jsonObject.put("sessionUpdatedAt", sessionDto.getSessionUpdatedAt());
                    jsonObject.put("numConnectedObject", sessionDto.getNumConnectedObject());
                    jsonObject.put("sessionModerator", sessionDto.getSessionModerator());
                    return sessionRepository.save(sessionDto);
                });

        return jsonObject;

    }

    public void removeSession(Long sessionId) {
        sessionRepository.deleteById(sessionId);
    }

    public JSONObject incrementConnectedObject(Long sessionId) {
        SessionDto sessionDto = sessionRepository.findById(sessionId).orElse(null);
        JSONObject result = new JSONObject();
        String myStatus = (sessionDto.getNumConnectedObject() >= 6) ? "FAILED" : "SUCCESS";
        result.put("status", myStatus);
        if (sessionDto.getNumConnectedObject() < 6) {
            sessionDto.setNumConnectedObject(sessionDto.getNumConnectedObject() + 1);
        }
        result.put("numConnectedObject", sessionDto.getNumConnectedObject());
        sessionRepository.save(sessionDto);

        return result;
    }

    public JSONObject decrementConnectedObject(Long sessionId) {
        SessionDto sessionDto = sessionRepository.findById(sessionId).orElse(null);
        JSONObject result = new JSONObject();
        String myStatus = (sessionDto.getNumConnectedObject() <= 0) ? "FAILED" : "SUCCESS";
        result.put("status", myStatus);
        if (sessionDto.getNumConnectedObject() > 0) {
            sessionDto.setNumConnectedObject(sessionDto.getNumConnectedObject() - 1);
        }
        result.put("numConnectedObject", sessionDto.getNumConnectedObject());
        sessionRepository.save(sessionDto);

        return result;
    }

}
