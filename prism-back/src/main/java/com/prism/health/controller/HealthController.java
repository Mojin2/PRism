package com.prism.health.controller;
import com.prism.health.dto.HealthCheckResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {

    @GetMapping("/api/health")
    public ResponseEntity<HealthCheckResponse> healthcheck(){
        return ResponseEntity.ok(new HealthCheckResponse("ok","backend running!"));
    }

}
