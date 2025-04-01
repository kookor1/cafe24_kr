(function () {
    // 현재 로드된 <script> 태그들 중에서 geekstudio.js를 찾음
    const scripts = document.getElementsByTagName("script");

    let clientId = null;

    for (let script of scripts) {
        if (script.src && script.src.includes("geekstudio.js")) {
            const url = new URL(script.src);
            clientId = url.searchParams.get("client_id");
            break;
        }
    }

    // 결과 사용 예
    if (clientId) {
        console.log("✅ client_id:", clientId);

        // 전역 변수로 노출하고 싶다면
        window.__GEEKSTUDIO_CLIENT_ID__ = clientId;
    } else {
        console.warn("⚠️ client_id 쿼리 파라미터가 없습니다.");
    }
})();
