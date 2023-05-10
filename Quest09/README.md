# Quest 09. 서버와 클라이언트의 대화

## Introduction
* 이번 퀘스트에서는 서버와 클라이언트의 연동, 그리고 웹 API의 설계 방법론 중 하나인 REST에 대해 알아보겠습니다.

## Topics
* expressJS, fastify
* AJAX, `XMLHttpRequest`, `fetch()`
* REST, CRUD
* CORS

## Resources
* [Express Framework](http://expressjs.com/)
* [Fastify Framework](https://www.fastify.io/)
* [MDN - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [MDN - XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
* [REST API Tutorial](https://restfulapi.net/)
* [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
* [MDN - CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

## Checklist
* 비동기 프로그래밍이란 무엇인가요?
  - 비동기 : 특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고 다음 코드를 먼저 실행하는 프로그램 특성
  - 콜백을 통해 비동기적 작업을 할 때의 불편한 점은 무엇인가요? 콜백지옥이란 무엇인가요?
    - 콜백 : 비동기 작업이 끝난 이후, 실행될 함수
    - 콜백지옥 : 어떤 비동기 작업에 의해서 발생하는 콜백들이 점점 늘어나 무수히 많아지는 경우. 관리하기 힘들어 진다는 특성이 있다.
  - 자바스크립트의 Promise는 어떤 객체이고 어떤 일을 하나요?
    - 비동기 처리에 사용되는 객체
    - 비동기 처리의 결과 또는 상태에 따라서 resolve(또는 fulfill, 완료), reject(실패), pending(처리중)의 상태를 갖는다.
    - 콜백 then() 또는 async/await 동기 처리와 함께 사용한다.
  - 자바스크립트의 `async`와 `await` 키워드는 어떤 역할을 하며 그 정체는 무엇일까요?
    - 비동기 코드를 동기적으로 하는 역할을 갖고 있다.
    - promise 객체를 반환하는 비동기 메소드와 함께 사용한다.
    - promise 객체를 활용하는 문법적인 장치일 뿐이다.
  
* 브라우저 내 스크립트에서 외부 리소스를 가져오려면 어떻게 해야 할까요?

  ​	=>HTTP 요청을 통해 서버에 리소스를 요청하여 받아온다.

  - 브라우저의 `XMLHttpRequest` 객체는 무엇이고 어떻게 동작하나요?
    - 서버와 상호작용 하기 위해 존재하는 객체
    - HTTP 이외에도 ftp나 다른 프로토콜을 사용할 수 있다.
    - 상태 코드는 다음과 같다
      - 0 (uninitialized) - (request가 초기화되지 않음)
      - 1 (loading) - (서버와의 연결이 성사됨)
      - 2 (loaded) - (서버가 request를 받음)
      - 3 (interactive) - (request(요청)을 처리하는 중)
      - 4 (complete) - (request에 대한 처리가 끝났으며 응답할 준비가 완료됨) 

  - `fetch` API는 무엇이고 어떻게 동작하나요?XHR 객체와 비슷한 역할을 수행하는 객체

    - XHR 객체와 비슷한 역할을 수행하는 객체

    - 콜백에서 request, response 객체를 접근할 수 있습니다.
    - promise 객체를 반환합니다
    - same origin이 아닐 경우, 자격 증명을 따로 설정해야 합니다. (ex. 기본값으로 쿠키 미포함)

* REST는 무엇인가요?

  - 일관적인 인터페이스, Stateless, Cacheable, 계층화, 클리이언트-서버 구조 원칙 채용한 아키텍쳐를 말한다
  - REST API는 어떤 목적을 달성하기 위해 나왔고 어떤 장점을 가지고 있나요?
    - 구성 요소 상호작용의 규모 확장성(scalability of component interactions)
    - 인터페이스의 범용성 (Generality of interfaces)
    - 구성 요소의 독립적인 배포(Independent deployment of components)
    - 중간적 구성요소를 이용해 응답 지연 감소, 보안을 강화, 레거시 시스템을 인캡슐레이션 (Intermediary components to reduce latency, enforce security and encapsulate legacy systems)
    - 일관적인 API 설계로, 특정 HTTP 요청이 의도하는 바를 명확히 파악할 수 있다는 장점이 있다.
  - RESTful한 API 설계의 단점은 무엇인가요?
    - 메소드가 제한적이다
    - 표준이 존재하지 않는다

* CORS란 무엇인가요? 이러한 기능이 왜 필요할까요? CORS는 어떻게 구현될까요?

  - 최초의 리소스를 받아온 서버와, 이후 추가적은 리소스를 받아오는 서버가 상이한 경우 보안성을 보장하기 위해 정한 규칙을 의미한다.
  - 현대에 이르러서 상이한 경우가 점점 늘어남에 따라서 CORS 예외 규칙의 필요성이 증가
  - SOP원칙에 따라 기본값으로는 보안적인 이유로 타 서버에서 리소스를 받아오는것을 제한하나, CORS 규칙을 지킨다면 예외적으로 허용해주는 형태이다
  - 동작 방식
    - 브라우저가 자신이 받아온 origin 서버가 아닌, 타 서버로 리소스를 요청하고자 한다.
    - 브라우저가 서버에 리소스를 요청하기 전에, preflight 요청을 먼저 보낸다
    - Simple Request라 부르는 형태의 요청은, preflight 요청 없이도 사용할 수 있다.
      - Simple Request는 다음의 요건들을 충족해야 한다
        - GET, HEAD, POST 메소드만 사용 가능하다
        - 사용할 수 있는 헤더 목록
          - Accept
          - Accept-Language
          - Content-Language
          - Content-Type (다음의 값들만 허용됩니다)
            - application/x-www-form-urlencoded
            - multipart/form-data
            - text/plain
          - DPR
          - Downlink
          - Save-Data
          - Viewport-Width
          - Width
        - 요청에 ReadableStream 객체가 사용되지 않습니다.
    - preflight 요청의 형태는 다음과 같다
      - HTTP OPTIONS 메소드를 통해 preflight 요청을 보내고 본 요청이 전송가능할지 확인한다.
      - 허용된다면, 이후 보내고자 했던 본 요청을 전송한다.
    - 공통적으로, 서버에서 돌려준 response에 `Access-Control-Allow-Origin` 헤더 값을 검사하여 origin 도메인의 허용 범위를 확인한다.
      - 허용한다면, 이후 보내고자 했던 요청을 전송한다
      - 허용하지 않는다면, CORS 에러를 출력한다
    - `Access-Control-Allow-Origin` 헤더 외에도, 허용 HTTP method, 허용 헤더 종류 등의 정보를 받을 수 있고 이를 참고하여 사용해야한다.

## Quest
* 이번 퀘스트는 Midterm에 해당하는 과제입니다. 분량이 제법 많으니 한 번 기능별로 세부 일정을 정해 보고, 과제 완수 후에 그 일정이 얼마나 지켜졌는지 스스로 한 번 돌아보세요.
  * 이번 퀘스트부터는 skeleton을 제공하지 않습니다!
* Quest 05에서 만든 메모장 시스템을 서버와 연동하는 어플리케이션으로 만들어 보겠습니다.
  * 클라이언트는 `fetch` API를 통해 서버와 통신합니다.
  * 서버는 8000번 포트에 REST API를 엔드포인트로 제공하여, 클라이언트의 요청에 응답합니다.
  * 클라이언트로부터 온 새 파일 저장, 삭제, 다른 이름으로 저장 등의 요청을 받아 서버의 로컬 파일시스템을 통해 저장되어야 합니다.
    * 서버에 어떤 식으로 저장하는 것이 좋을까요?
  * API 서버 외에, 클라이언트를 띄우기 위한 서버가 3000번 포트로 따로 떠서 API 서버와 서로 통신할 수 있어야 합니다.
  * Express나 Fastify 등의 프레임워크를 사용해도 무방합니다.
* 클라이언트 프로젝트와 서버 프로젝트 모두 `npm i`만으로 디펜던시를 설치하고 바로 실행될 수 있게 제출되어야 합니다.
* 이번 퀘스트부터는 앞의 퀘스트의 결과물에 의존적인 경우가 많습니다. 제출 폴더를 직접 만들어 제출해 보세요!

## Advanced
* `fetch` API는 구현할 수 없지만 `XMLHttpRequest`로는 구현할 수 있는 기능이 있을까요?
* REST 이전에는 HTTP API에 어떤 패러다임들이 있었을까요? REST의 대안으로는 어떤 것들이 제시되고 있을까요?
