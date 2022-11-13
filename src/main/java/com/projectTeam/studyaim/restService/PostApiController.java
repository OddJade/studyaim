package com.projectTeam.studyaim.restService;

import com.projectTeam.studyaim.model.PostCategory;
import com.projectTeam.studyaim.model.PostDto;
import com.projectTeam.studyaim.postService.PostService;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
class PostApiController {
    @Autowired
    private PostService postService;
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 메인 페이지 관련 API
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    @GetMapping("/main/posts")
    JSONArray requestTopSix() {
        return postService.requestTopSix();
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 게시글 관련 API
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//    @GetMapping("/posts")
//    JSONObject requestGetPageable(@RequestParam(required = false, defaultValue="JOB") PostCategory postType, final Pageable pageable){
//        return postService.findByPostTypeWithPageable(postType, pageable);
//    }

    @GetMapping("/posts")
    JSONObject requestGet(@RequestParam(required = false, defaultValue="JOB") PostCategory postType){
        return postService.findByPostType(postType);
    }

    @PostMapping("/posts")
    PostDto newPost(@RequestBody JSONObject requestBody) {
        return postService.save(requestBody);
    }

    // Single item
    @GetMapping("/posts/{postId}")
    JSONObject one(@PathVariable Long postId) {
        return postService.findSingleItem(postId);
    }

    @PutMapping("/posts/{id}")
    PostDto replacePost(@RequestBody PostDto newPost, @PathVariable Long id) {
        return postService.modifyById(newPost, id);

    }

    @DeleteMapping("/posts/{postId}")
    void deletePost(@PathVariable Long postId) {
        postService.deleteById(postId);
    }
}