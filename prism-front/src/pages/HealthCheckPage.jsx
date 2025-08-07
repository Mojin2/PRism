import React, { useState } from "react";
import axios from "axios";

function HealthCheckPageWithButton() {
  const [healthStatus, setHealthStatus] = useState(null); // 초기 상태는 null
  const [message, setMessage] = useState("");

  const checkHealth = async () => {
    setHealthStatus("Checking..."); // 버튼 클릭 시 상태 업데이트
    setMessage("백엔드 상태를 확인 중입니다...");

    try {
      const response = await axios.get("http://localhost:8080/api/health");
      console.log(response.data);
      if (response.status === 200) {
        setHealthStatus("Healthy");
        setMessage(response.data.message);
      } else {
        setHealthStatus("Unhealthy");
        setMessage("200이 아닌 상태 코드가 반환되었습니다.");
      }
    } catch (error) {
      setHealthStatus("Unhealthy");
      if (error.response) {
        // 서버 응답이 있을 경우
        setMessage(
          `에러: ${error.response.status} - ${error.response.statusText}`
        );
      } else if (error.request) {
        // 요청은 보냈지만 응답을 받지 못한 경우
        setMessage(
          "에러: 서버로부터 응답이 없습니다. 백엔드가 실행 중이 아닐 수 있습니다."
        );
      } else {
        // 그 외 에러
        setMessage(`에러: ${error.message}`);
      }
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>백엔드 헬스 체크</h1>
      <p>아래 버튼을 눌러 백엔드 상태를 확인하세요.</p>
      <button
        onClick={checkHealth}
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        헬스 체크 시작
      </button>

      {healthStatus && (
        <>
          <hr style={{ marginTop: "20px" }} />
          <p>
            <strong>상태:</strong>
            <span
              style={{
                color:
                  healthStatus === "Healthy"
                    ? "green"
                    : healthStatus === "Unhealthy"
                    ? "red"
                    : "orange",
                fontWeight: "bold",
              }}
            >
              {healthStatus}
            </span>
          </p>
          <p>
            <strong>메시지:</strong> {message}
          </p>
        </>
      )}
    </div>
  );
}

export default HealthCheckPageWithButton;
