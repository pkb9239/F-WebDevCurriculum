# Quest 08. 웹 API의 기초

## Introduction
* 이번 퀘스트에서는 웹 API 서버의 기초를 알아보겠습니다.

## Topics
* HTTP Method
* node.js `http` module
  * `req`와 `res` 객체

## Resources
* [MDN - Content-Type Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)
* [MDN - HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
* [MDN - MIME Type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type)
* [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop)
* [HTTP Node.js Manual & Documentation](https://nodejs.org/api/http.html)

## Checklist
* HTTP의 GET과 POST 메소드는 어떻게 다른가요?
  - GET 요청의 경우 request body가 없다. 혹은 있더라도, 수신자가 무시할 가능성이 매우 높다.
  - GET은 어떠한 정보를 얻기 위해, POST는 서버측에 어떤 정보를 생성, 혹은 업데이트 할 때 사용한다.
  - GET은 캐싱될 수 있지만, POST는 그렇지 않다.
  - GET은 브라우저 히스토리에 남지만, POST는 남지 않는다.
  - GET은 민감한 데이터를 처리할 때 사용하지 않아야 한다.
  - GET은 북마크를 생성하여 사용할 수 있지만, POST는 할 수 없다.
  - GET은 길이 제한이 존재하지만, POST는 길이 제한이 존재하지 않는다.
  
* 다른 HTTP 메소드에는 무엇이 있나요? : PUT, PATCH, DELETE, HEAD, CONNECT, OPTIONS, TRACE

* HTTP 서버에 GET과 POST를 통해 데이터를 보내려면 어떻게 해야 하나요?

  - GET : query string을 사용한다
  - POST : body에 담아 보낸다

* HTTP 요청의 `Content-Type` 헤더는 무엇인가요?

  - 리소스의 media type을 나타내기 위해 사용한다.
  - 즉, 전송된 컨텐츠의 유형이 무엇인지를 명시한다.
  - js, css, 텍스트, 이미지, 오디오, 비디오 등이 명시되어 사용된다

* Postman에서 POST 요청을 보내는 여러 가지 방법(`form-data`, `x-www-form-urlencoded`, `raw`, `binary`) 각각은 어떤 용도를 가지고 있나요?

  - x-www-form-urlencoded : "&"으로 분리되고, "=" 기호로 값과 키를 연결하는 key-value 쌍으로 인코딩되는 값 입니다. 영어 알파벳이 아닌 문자들은 퍼센트 인코딩이 적용됩니다. (ex. say=Hi&to=Mom)
  - form-data : x-www-form-urlencoded와 같은 형태이며, 문자열이 인코딩 되지 않는다는 차이만 존재합니다.
  - raw : 문자열 자체를 전송할 때 사용합니다. JSON 형태나, text, xml, html 등의 형태를 전송합니다.
  - binary : 이미지, 오디오와 같이 사람이 수동으로 입력할 수 없는 형태, 즉 파일들을 전송할 때 사용하는 옵션입니다.

* node.js의 `http` 모듈을 통해 HTTP 요청을 처리할 때,`req`와 `res` 객체에는 어떤 정보가 담겨있을까요?

  - req
    - Header 정보 (key-value)
    - 요청 path
    - 요청 http method
    - host 주소
    - 프로토콜 정보
  - res
    - Header 정보(key-value)
    - request 객체 정보
    - status code
    - status message
    - body chunk(문자열 또는 버퍼 형태의 데이터)

  - GET과 POST에 대한 처리 형태가 달라지는 이유는 무엇인가요?
    - GET은 데이터의 조회를 목적으로 탄생, 동일한 요청에는 항상 동일한 응답이 돌아오도록 설계되었다.
      - 동일한 응답 특성상, 캐싱을 적용하기도 한다.
    - POST는 데이터의 변경을 목적으로 탄생, 따라서 서버에 동일한 요청을 보내더라도 응답은 다를 수 있다.

* 만약 API 엔드포인트(URL)가 아주 많다고 한다면, HTTP POST 요청의 `Content-Type` 헤더에 따라 다른 방식으로 동작하는 서버를 어떻게 정리하면 좋을까요?

  - Content-Type에 따라서 개별적인 라우팅을 적용하면 되지 않을까요?

    ```
      switch(ContentType){
        case : 'text/plain'
          //do something
        case : 'text/css'
          //do something
        case : 'image/png'
          //do something
      }
    ```

  - 그 밖에 서버가 요청들에 따라 공통적으로 처리하는 일에는 무엇이 있을까요? 이를 어떻게 정리하면 좋을까요?

    - 유저 인증(쿠키-세션 또는 token)
    - 통계 조사(어떤 API가 많이 사용되었는지)
    - http 요청 parser
      - header, body 등등
    - header 입력(statusCode, header key-value)
    - express에서는 미들웨어라는 형태로 이들을 관리하고있다.

## Quest
* 다음의 동작을 하는 서버를 만들어 보세요.
  * 브라우저의 주소창에 `http://localhost:8080`을 치면 `Hello World!`를 응답하여 브라우저에 출력합니다.
  * 서버의 `/foo` URL에 `bar` 변수로 임의의 문자열을 GET 메소드로 보내면, `Hello, [문자열]`을 출력합니다.
  * 서버의 `/foo` URL에 `bar` 키에 임의의 문자열 값을 갖는 JSON 객체를 POST 메소드로 보내면, `Hello, [문자열]`을 출력합니다.
  * 서버의 `/pic/upload` URL에 그림 파일을 POST 하면 서버에 보안상 적절한 방법으로 파일이 업로드 됩니다.
  * 서버의 `/pic/show` URL을 GET 하면 브라우저에 위에 업로드한 그림이 뜹니다.
  * 서버의 `/pic/download` URL을 GET 하면 브라우저에 위에 업로드한 그림이 `pic.jpg`라는 이름으로 다운로드 됩니다.
* expressJS와 같은 외부 프레임워크를 사용하지 않고, node.js의 기본 모듈만을 사용해서 만들어 보세요.
* 처리하는 요청의 종류에 따라 공통적으로 나타나는 코드를 정리해 보세요.

## Advanced
* 서버가 파일 업로드를 지원할 때 보안상 주의할 점에는 무엇이 있을까요?
