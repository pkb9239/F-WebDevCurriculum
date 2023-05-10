# Quest 17-F. 번들링과 빌드 시스템

## Introduction
* 이번 퀘스트에서는 현대적 웹 클라이언트 개발에 핵심적인 번들러와 빌드 시스템의 구조와 사용 방법에 대해 알아보겠습니다.

## Topics
* Webpack
* Bundling
  * Data URL
* Transpiling
  * Source Map
* Hot Module Replacement

## Resources
* [Webpack](https://webpack.js.org/)
* [Webpack 101: An introduction to Webpack](https://medium.com/hootsuite-engineering/webpack-101-an-introduction-to-webpack-3f59d21edeba)

## Checklist
* 여러 개로 나뉘어진 자바스크립트나 이미지, 컴포넌트 파일 등을 하나로 합치는 작업을 하는 것은 성능상에서 어떤 이점이 있을까요?
  - HTTP 요청의 갯수를 줄여 HTTP 요청/응답에 소요되는 자원을 절약할 수 있다
  
  - 이미지를 Data URL로 바꾸어 번들링하는 것은 어떤 장점과 단점이 있을까요?
    - image->Base64 인코딩 형태로 저장하는 형태
    - 장점
      - HTML 파일에 미리 포함할 수 있어 http 응답의 갯수를 줄일 수 있다
    - 단점
      - HTTP의 캐싱 기능을 사용할 수 없다
      - 파일의 용량이 일부 증가하게 된다
  
* Source Map이란 무엇인가요? Source Map을 생성하는 것은 어떤 장점이 있을까요?

  - js파일을 예로 들면, 여러 js 파일을 하나로 합쳐 번들링을 하고 사용한다고 가정했을 때
    - 특정 부분에서 문제가 발생하면 어떤 파일의 코드에서 문제가 발생했는지 알기 어렵다.
    - 이를 쉽게 알 수 있도록 번들링 되기 전의 파일과 번들링 이후 코드를 매핑시켜주는 도구이다.
    - 프로덕션에 적합한가? 싶은 생각이 듭니다.

* Webpack의 필수적인 설정은 어떤 식으로 이루어져 있을까요?

  - Webpack의 플러그인과 모듈은 어떤 역할들을 하나요?
    - 플러그인을 활용하여 번들을 최적화하거나, 애셋을 관리하고, 또 환경 변수 주입등과 같은 작업을 수행 할 수 있습니다
    - 모듈은 이전에 브라우저에서 모듈을 완벽히 지원하지 못하던 점을 보완하기 위해 탄생한 기능. 이들을 모아서 번들링 해주는 역할을 수행한다.
    - commonjs, esmodule 등의 모듈 시스템을 지원함
  - Webpack을 이용하여 HMR(Hot Module Replacement) 기능을 설정하려면 어떻게 해야 하나요?
    - webpack.config.js의 hot 옵션 true 지정

## Quest
* 직전 퀘스트의 소스만 남기고, Vue의 Boilerplating 기능을 쓰지 않고 Webpack 관련한 설정을 원점에서 다시 시작해 보세요.
  * 필요한 번들링과 Source Map, HMR 등의 기능이 모두 잘 작동해야 합니다.

## Advanced
* Webpack 이전과 이후에는 어떤 번들러가 있었을까요? 각각의 장단점은 무엇일까요?
