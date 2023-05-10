# Quest 07. node.js의 기초

## Introduction
* 이번 퀘스트에서는 node.js의 기본적인 구조와 개념에 대해 알아 보겠습니다.

## Topics
* node.js
* npm
* CommonJS와 ES Modules

## Resources
* [About node.js](https://nodejs.org/ko/about/)
* [Node.js의 아키텍쳐](https://edu.goorm.io/learn/lecture/557/%ED%95%9C-%EB%88%88%EC%97%90-%EB%81%9D%EB%82%B4%EB%8A%94-node-js/lesson/174356/node-js%EC%9D%98-%EC%95%84%ED%82%A4%ED%85%8D%EC%B3%90)
* [npm](https://docs.npmjs.com/about-npm)
* [npm CLI commands](https://docs.npmjs.com/cli/v7/commands)
* [npm - package.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)
* [How NodeJS Require works!](https://www.thirdrocktechkno.com/blog/how-nodejs-require-works)
* [MDN - JavaScript Modules](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Modules)
* [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
* [require vs import](https://www.geeksforgeeks.org/difference-between-node-js-require-and-es6-import-and-export/)

## Checklist
* node.js는 무엇인가요? node.js의 내부는 어떻게 구성되어 있을까요?

  - 크롬의 V8엔진 + C + JS 로 구성되어있다. (+쓰레드 풀, 이벤트 루프 등등...)
  - V8이 JS를 파싱하여 바이트 코드로 변환, 이를 최적화 하는 등의 기법을 사용(자주 사용하는 바이트 코드를 미리 컴파일)
  - 이벤트 루프
    - 각 단계별 큐는 FIFO 방식이다
    - **timers** : 이 단계는 setTimeout()과 setInterval()로 스케줄링한 콜백을 실행합니다.
    - **pending callbacks** : 다음 루프 반복으로 연기된 I/O 콜백들을 실행합니다.
    - **idle, prepare** : 내부용으로만 사용합니다.
    - **poll** : 새로운 I/O 이벤트를 가져옵니다. I/O와 연관된 콜백(클로즈 콜백, 타이머로 스케줄링된 콜백, setImmediate()를 제외한 거의 모든 콜백)을 실행합니다. 적절한 시기에 node는 여기서 블록 합니다.
    - **check** : setImmediate() 콜백은 여기서 호출됩니다.
    - **close callbacks** : 일부 close 콜백들, 예를 들어 socket.on('close', ...).

* npm이 무엇인가요? `package.json` 파일은 어떤 필드들로 구성되어 있나요?

  - name

    - 패키지의 이름, 패키지를 배포할 경우 필수 사항입니다.
    - 다음 규칙을 준수해야 합니다.
    - 214자 이하.
    - scoped package의 경우 점 또는 밑줄로 시작할 수 있습니다.
    - url의 일부로 사용될 수 있으므로 일부 문자는 제한됩니다.
    - 다음은 팁 입니다.
    - core node module과 같은 이름을 사용하지 마십시오
    - 이름에 js 또는 node를 넣지 마십시오
    - 이미 존재하는 이름인지 npm registry를 확인하십시오.

  - version

    - 이름과 버전은 완전히 고유한 것으로 간주됩니다.
    - 이름과 마찬가지로, 패키지를 배포할 경우 필수 사항입니다.

  - description

    - 패키지에 대한 설명을 입력하는 필드입니다.

  - keywords

    - 문자열 또는 문자열 형식의 배열로, 키워드를 입력하는 필드입니다.

  - homepage

    - 프로젝트 홈페이지 주소를 입력하는 필드입니다.

  - bugs

    - 프로젝트의 이슈 또는 버그를 보고해야 하는 url 또는 이메일 정보 필드입니다

  - license

    - 패키지의 라이센스를 지정하여 사용이 허용되는 방식과 제한 사항을 알리는 필드입니다.
    - 라이센서 ID 목록에서 선택하거나, 직접 문자열을 입력할 수 도 있습니다.

  - people

    - 작성자와 기여자들의 정보를 입력하는 필드입니다.
    - 이름, 이메일, 홈페이지 정보를 담을 수 있습니다.

  - funding

    - 펀딩을 위한 정보를 입력하는 필드입니다.

  - files

    - 현 프로젝트의 패키지가 종속적으로 설치될 때 포함될 파일(항목)들에 대한 정보 필드이다.
    - 설정에 관계 없이, 특정 파일들은 항상 포함됩니다
      - package.json, readme, changes, main 필드의 파일들
      - 다음 파일들은 기본적으로, 항상 무시됩니다.
        - .git, CVS, .svn, .node_modules, package-lock.json 등등...

  - main

    - 현 패키지 모듈을 불러올때 사용할 파일을 지정하는 필드입니다.
    - ex) const value = require('mainFieldFile.js');
    - 지정하지 않을 경우, 루트 폴더의 index.js를 사용하게 됩니다

  - browser

    - 패키지(모듈)을 클라이언트 측에서 사용해야 하는 경우(브라우저) 사용할 모듈 진입점을 입력하는 필드입니다.

  - bin

    - 현 패키지를 설치할 때, node_modules 속에 지정될 폴더의 이름을 입력하는 필드입니다.

    - ex)

      ```
      {
        "bin": {
          "myapp": "./cli.js"
        }
      }
      // /usr/local/bin/myapp
      ```

      

    - 만약 name 필드를 작성했다면, object 구조 대신, string으로 경로를 입력해도 됩니다.

  - man

    - 해당 패키지를 통해 설치할 파일 이름이나 파일 이름의 배열을 저장하는 필드입니다.
    - 파일 이름은 숫자로 끝나야 하며, 압축된 파일의 경우 .gz가 가능합니다.

  - directories

    - 라이브러리가 존재하는 장소 혹은 메타 정보를 저장할 수 있는 필드입니다.
    - 마크다운, 예제 스크립트, 소스 지정 디렉토리 등을 저장할 수 도 있습니다.

  - repository

    - 코드를 저장하는 저장소를 지정할 수 있는 필드입니다.
    - github를 등록 할 경우 npm docs 명령어로 소유자를 쉽게 찾을 수 있습니다.

  - scripts

    - shell 명령어를 담는 필드입니다.

  - config

    - 스크립트에서 사용하는 설정 파라미터들을 지정할 수 있는 필드입니다.

  - dependencies

    - 패키지 이름 + 버전 범위를 입력하여 의존성을 지정하는 필드입니다.
    - 압축 파일 또는 git의 URL, 로컬 경로를 지정할 수 도 있습니다.

  - devDependencies

    - 개발 단계에서만 사용하는 의존성을 관리할 수 있는 필드입니다. (즉, 패키지 모듈을 사용할 때에는 필요하지 않은 의존성들)
    - ex) 문서화 도구, 테스트 프레임워크, 등이 속합니다.

  - peerDependencies

    - 내가 만든 모듈이 다른 모듈과 함께 동작할 수 있다는 호환성을 표시하는 필드입니다.
    - dependency는 내가 만든 모듈에서 사용하는 패키지들의 모음인 것과 정반대이다.

  - peerDependenciesMeta

    - 내가 만든 모듈을 사용하는 다른 사용자에게, 모듈에 대한 추가적인 정보를 제공하는 필드.

  - bundledDependencies

    - 패키지가 배포될 때 번들로 제공되는 타 패키지 이름을 정의하는 배열 필드.

  - optionalDependencies

    - 존재하기 않거나, 찾는것에 실패한 의존성들을 관리할 경우 사용하는 필드입니다.
    - 패키지 이름 - 버전또는 url 형식으로 사용한다.

  - engines

    - npm 또는 node와 같이 작동 환경의 버전을 지정할 수 있는 필드이다.

  - os

    - 패키지가 작동 할 OS를 지정할 수 있는 필드입니다.

  - cpu

    - 패키지가 작동 할 CPU의 종류를 지정할 수 있는 필드입니다.

  - private

    - private:true 필드를 사용할 시, 패키지가 배포되는 것을 막는 필드입니다.

  - publishConfig

    - 패키지 배포시에 사용할 수 있는 필드로, config 필드를 오버라이드 할 수 있다.

  - workspaces

    - 설치 되어야 할 파일들의 위치(작업 공간)을 지정할 수 있는 배열 필드.

* npx는 어떤 명령인가요? npm 패키지를 `-g` 옵션을 통해 글로벌로 저장하는 것과 그렇지 않은 것은 어떻게 다른가요?

  - npx : npm 패키지를 실행 시킬 수 있는 명령어
  - -g로 설치할 경우, 전역 workspace에 해당 패키지가 설치되며, 옵션을 사용하지 않을 경우, cli를 실행한 해당 workspace에 패키지가 설치됩니다.

* 자바스크립트 코드에서 다른 파일의 코드를 부르는 시도들은 지금까지 어떤 것이 있었을까요? CommonJS 대신 ES Modules가 등장한 이유는 무엇일까요?

  - AMD(require.js), CommonJS, UMD ...
  - 더 나은 모듈화를 위해서(병렬적으로 파일을 받아와 정리, use strict, 별개의 this, 스코프 등등)

* ES Modules는 기존의 `require()`와 동작상에 어떤 차이가 있을까요? CommonJS는 할 수 있으나 ES Modules가 할 수 없는 일에는 어떤 것이 있을까요?

  - ESM : use strict 모드가 적용, this가 global object가 아니며 별개의 스코프를 갖는다. 비동기적으로 파일을 가져오게 되며, 구문을 찾아서 스크립트를 파싱한다.
  - CJS : require는 동기적으로 이루어지며, 그 즉시 스크립트를 실행한다.

* node.js에서 ES Modules를 사용하려면 어떻게 해야 할까요? ES Modules 기반의 코드에서 CommonJS 기반의 패키지를 불러오려면 어떻게 해야 할까요? 그 반대는 어떻게 될까요?

  - Node.js에서 ES Modules를 사용하려면
    - package.json의 type 필드를 "module"로 지정하거나
    - 각 파일에서 import 하고자 하는 js 파일의 확장자를 mjs로 변경하여 사용하거나
  - ESM에서 CJS를 불러오려면
    - `import module from './example.cjs'` 처럼 파일을 .cjs로 변경하여 사용하거나
  - CJS에서 ESM을 불러오려면 - async/await 혹은 promise 패턴을 사용하여 다음과같이 사용해야 합니다

  ```
  async function myFunc() {
    const { itsMine } = await import('./myESTest.mjs');
  }
  myFunc();
  ```

## Quest
* 스켈레톤 코드에는 다음과 같은 네 개의 패키지가 있으며, 용도는 다음과 같습니다:
  * `cjs-package`: CommonJS 기반의 패키지입니다. 다른 코드가 이 패키지의 함수와 내용을 참조하게 됩니다.
  * `esm-package`: ES Modules 기반의 패키지입니다. 다른 코드가 이 패키지의 함수와 내용을 참조하게 됩니다.
  * `cjs-my-project`: `cjs-package`와 `esm-package`에 모두 의존하는, CommonJS 기반의 프로젝트입니다.
  * `esm-my-project`: `cjs-package`와 `esm-package`에 모두 의존하는, ES Modules 기반의 프로젝트입니다.
* 각각의 패키지의 `package.json`과 `index.js` 또는 `index.mjs` 파일을 수정하여, 각각의 `*-my-project`들이 `*-package`에 노출된 함수와 클래스를 활용할 수 있도록 만들어 보세요.

## Advanced
* node.js 외의 자바스크립트 런타임에는 어떤 것이 있을까요?
