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
    (async function (CAFE24API) {window.DPromotionCafe24 = CAFE24API;
        /*
        const className = "dpromotion-area";
        document.querySelectorAll(`.${className}`).forEach((el) => {
            const appId = el.dataset.id;
            const script = document.createElement("script");
            script.src = `https://play.dpromotion.io/play/${appId}?use_type=script`;
            el.appendChild(script);
        });
        */

        // 현재 timestamp (캐시 우회를 위한)
        const timestamp = Date.now();
        // geekstudio.js 파일을 body 맨 하단에 삽입
        const geekScript = document.createElement("script");
        geekScript.src = `https://cdn.jsdelivr.net/gh/kookor1/cafe24_kr/geekstudio.js?v=${timestamp}&client_id=${clientId}`;
        geekScript.defer = true;
        document.body.appendChild(geekScript);

    })(CAFE24API.init({
        client_id: clientId,
        version: '2025-03-01', // ← 필요시 명시 가능
    }));
})();
