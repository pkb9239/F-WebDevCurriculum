# Quest 18-F. 프로그레시브 웹앱

## Introduction
* 이번 퀘스트에서는 2021년 현재 웹 프론트엔드의 많은 최신 기술 중 프로그레시브 웹앱에 관해 알아보겠습니다.

## Topics
* Progressive Web App(PWA)
* Service Worker
* Cache & CacheStorage API
* Web Manifest

## Resources
* [MDN - Progressive web apps (PWAs)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
* [MDN - Progressive web app Introduction](https://developer.mozilla.org/ko/docs/Web/Progressive_web_apps/Introduction)
* [MDN - Service Worker API](https://developer.mozilla.org/ko/docs/Web/API/Service_Worker_API)
* [web.dev - Progressive Web Apps](https://web.dev/progressive-web-apps/)

## Checklist
* 웹 어플리케이션을 프로그레시브 웹앱 형태로 만들면 어떤 이점을 가질까요?
  - 앱의 장점과, 웹의 장점을 모두 얻을 수 있다
  - 네이티브 앱에 비해서 파일의 용량이 적다
  - 기기의 메뉴, 또는 화면에 앱을 표시할 수 있다
  - 오프라인 상태를 대응할 수 있다
  - 따라서 접근성이 좋아진다
* 서비스 워커란 무엇인가요? 웹 워커와의 차이는 무엇인가요?
  - js를 다른 스레드에서 구동시킬 수 있는 기능.
  - DOM 객체에 접근할 수 없다.
  - 차이
    - 서비스 워커는 네트워크 요청을 핸들링 할 수 있다
    - 웹 워커는 특정 탭에 종속적, 서비스 워커는 특정 앱에 종속적 (탭이 여러개 켜져 있더라도 하나의 서비스 워커만 작동한다)
* PWA의 성능을 높이기 위한 방법론에는 어떤 것들이 있고, 어떤 식으로 적용할 수 있을까요?
  - 정적으로 존재하는 (변할 확률이 없거나 적은) 파일에 대해 캐싱을 진행한다
  - 혼합 응답 스트리밍? 을 사용한다
    - 하나의 파일에 대해서도 고정적인 부분과 변동 사항이 발생할 부분을 나누어 변동 사항만 받아온다는 의미같다.

## Quest
* 텍스트 에디터 프로그램을 PWA 형태로 만들어 보세요.
  * 필요한 에셋을 적절히 캐싱하되, 버전업이 되었을 때 캐싱을 해제할 수 있는 형태가 되어야 합니다.
  * 해당 PWA를 데스크탑에 인스톨 가능하도록 만들어 보세요.
  * 오프라인인 경우에는 임시저장 기능을 만들어, 온라인인 경우를 감지하여 자동으로 서버에 반영되도록 만들어 보세요.

## Advanced
* 본 퀘스트의 주제로 고려되었으나 분량상 선정되지 않은 주제들은 다음과 같습니다. 시간날 때 한 번 찾아 보세요!
  * Search Engine Optimization(SEO)
  * CSS-in-JS와 Styled Component
  * Server-Side Rendering(SSR)
