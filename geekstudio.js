(function () {
    // geekstudio.js를 로드한 <script> 태그에서 client_id 추출
    const scripts = document.getElementsByTagName("script");
    let clientId = null;

    for (let script of scripts) {
        if (script.src && script.src.includes("geekstudio.js")) {
            const url = new URL(script.src);
            clientId = url.searchParams.get("client_id");
            break;
        }
    }

    if (!clientId) {
        console.error("❌ client_id 쿼리 파라미터가 없습니다.");
        return;
    }

    // CAFE24API 초기화 및 실행
    (function (CAFE24API) {
        CAFE24API.getEncryptedMemberId(clientId, function (err, res) {
            if (err) {
                console.log("getEncryptedMemberId error:", err);
            } else {
                console.log("getEncryptedMemberId result:", res);
            }
        });

        CAFE24API.getCustomerIDInfo(function (err, res) {
            if (err) {
                console.log("getCustomerIDInfo error:", err);
            } else {
                console.log("getCustomerIDInfo result:", res);
            }
        });

        CAFE24API.getCustomerInfo(function (err, res) {
            if (err) {
                console.log("getCustomerInfo error:", err);
            } else {
                console.log("getCustomerInfo result:", res);
            }
        });

    })(CAFE24API.init({
        client_id: clientId,
        // version: '2025-03-01' ← 필요시 명시 가능
    }));
})();
