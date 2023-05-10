# Quest 03. 자바스크립트와 DOM

## Introduction
* 자바스크립트는 현재 웹 생태계의 근간인 프로그래밍 언어입니다. 이번 퀘스트에서는 자바스크립트의 기본적인 문법과, 자바스크립트를 통해 브라우저의 실제 DOM 노드를 조작하는 법에 대하여 알아볼 예정입니다.

## Topics
* 자바스크립트의 역사
* 기본 자바스크립트 문법
* DOM API
  * `document` 객체
  * `document.getElementById()`, `document.querySelector()`, `document.querySelectorAll()` 함수들
  * 기타 DOM 조작을 위한 함수와 속성들
* 변수의 스코프
  * `var`, `let`, `const`

## Resources
* [자바스크립트 첫걸음](https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps)
* [자바스크립트 구성요소](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks)
* [Just JavaScript](https://justjavascript.com/)

## Checklist
* **자바스크립트는 버전별로 어떻게 변화하고 발전해 왔을까요?**
  
  - 자바스크립트의 버전들을 가리키는 ES5, ES6, ES2016, ES2017 등은 무엇을 이야기할까요?
    - JS 버전을 가리킴. 각 버전별로는 구현된 메소드, 문법적 기능 등의 차이가 존재.
    - 네이밍을 통해 어느 버전(출판일)의 표준인지 알 수 있다.
    - 기존 넘버링의 경우 빌드 버전과 같이 명시 (es3, es4, es5, es6...).
    - 이후 넘버링 대신 표준 제정연도를 사용 (es 2015, es 2016 ...)
    - `es2015` class, `es2016` Array.prototype.includes, `es2017` Object.values/entries 메소드, async/await, `es2018` object rest/spread 등의 기능들이 추가되었다.
  - 자바스크립트의 표준은 어떻게 제정될까요?
    - ECMA-262, 402 표준을 정의.
    - ECMA International 표준화 기구에서 262 및 402 스펙을 참고하여 ECMAScript 표준을 정의.
  
* **자바스크립트의 문법은 다른 언어들과 비교해 어떤 특징이 있을까요?**

  => Javascript는 매우 유연한 언어로, 가장 특징적인 부분은 동적선언과 비동기처리이다.

  ​	동적선언 : Javascript에서는 자료형과 변수의 형태를 일치시키지 않아도 되는 런타임형 언어이며(컴파일이 아닌 실행 시 오류를 					check), 다른 정적언어(C, C++, Java)에 비해 디버깅 오류가 자주 발생할 수 있다.
  ​	비동기처리 : Javascript의 코드실행은 순차적으로 이루어지지 않으며, 이전 코드의 실행결과가 이후 코드의 실행원인에 영향을 주						는 것을 보장하지 않는다.

  - 자바스크립트에서 반복문을 돌리는 방법은 어떤 것들이 있을까요?
    - `for (initializer; exit-condition; final-expression)`, `for(element in list)`, `while(condition)`, `Array.forEach(callbackFunc)`, 등등..

* **자바스크립트를 통해 DOM 객체에 CSS Class를 주거나 없애려면 어떻게 해야 하나요?**

  1. DOM 객체에서 원하는 태그 element를 찾는다 (document의 메소드인 querySelector 혹은 getElementBy... 를 사용한다)
  2. 해당 element의 classList 혹은 className 메소드를 사용하여 원하는 class 속성을 CRUD 한다
  3. (번외) 부모 element의 innerHTML을 통채로 조작하여 수정한다

  - IE9나 그 이전의 옛날 브라우저들에서는 어떻게 해야 하나요?
    - `className 메소드`를 통해 조작한다
    - `polyfill` 코드를 적용한다

* **자바스크립트의 변수가 유효한 범위는 어떻게 결정되나요?**

  - `전역 스코프` : 전역 객체의 property, 코드 어디에서든지 참조할 수 있다
  - `지역 스코프` : 함수 코드 블록이 만든 스코프로, 함수 자신과 하위 함수에서만 참조할 수 있다
  - `블록 스코프` : 코드블록 () 또는 {} 내에서 유효한 변수 또는 함수 스코프
  - `함수 스코프` : 함수 내에서 선언된 매개변수와 변수는 함수 외부에서 유효하지 않다
  - `렉시컬 스코프` : 함수의 선언 시점에 자신과 상위 스코프를 결정하고, 이 스코프 체인을 기억하여 나중에 호출하더라도 해당 시점의 스코프를 참조하여 작동

  - `var`과 `let`으로 변수를 정의하는 방법들은 어떻게 다르게 동작하나요?

    - ```
      var
      ```

       

      : global(window) object의 property처럼 작동한다

      - 실행 Context를 구성시, 변수의 `선언과 초기화 작업이 동시`에 이루어진다
      - 따라서 함수처럼 `호이스팅`(호출 시점보다 하단 라인에 선언했음에도 불구하고 호출이 가능한)이 이루어 진다
      - 전역 혹은 함수 내부의 지역변수로써 scope를 갖는다

    - ```
      let
      ```

       

      : 실행 Context를 구성시, 변수의 선언작업만을 진행한다

      - 따라서 선언부 보다 먼저 호출시 호이스팅 되지 않고, 에러가 발생된다
      - 변수가 선언된 블록, 구문, 표현식 내부를 scope로 갖는다

* **자바스크립트의 익명 함수는 무엇인가요?**

  - 자바스크립트의 Arrow function은 무엇일까요?
    - function 키워드 대신 `화살표(=>)`를 사용하여 선언하는 함수
    - this에 바인딩될 객체가 항상 `상위 스코프의 this`를 가치킨다
    - function 키워드로 생성한 함수와 달리, `생성자 함수로 사용할 수 없다`

## Quest
* (Quest 03-1) 초보 프로그래머의 영원한 친구, 별찍기 프로그램입니다.
  * [이 그림](jsStars.png)과 같이, 입력한 숫자만큼 삼각형 모양으로 콘솔에 별을 그리는 퀘스트 입니다.
    * 줄 수를 입력받고 그 줄 수만큼 별을 그리면 됩니다. 위의 그림은 5를 입력받았을 때의 결과입니다.
  * `if`와 `for`와 `function`을 다양하게 써서 프로그래밍 하면 더 좋은 코드가 나올 수 있을까요?
  * 입력은 `prompt()` 함수를 통해 받을 수 있습니다.
  * 출력은 `console.log()` 함수를 통해 할 수 있습니다.
* (Quest 03-2) skeleton 디렉토리에 주어진 HTML을 조작하는 스크립트를 완성해 보세요.
  * 첫째 줄에 있는 사각형의 박스들을 클릭할 때마다 배경색이 노란색↔흰색으로 토글되어야 합니다.
  * 둘째 줄에 있는 사각형의 박스들을 클릭할 때마다 `enabled`라는 이름의 CSS Class가 클릭된 DOM 노드에 추가되거나 제거되어야 합니다.
* 구현에는 여러 가지 방법이 있으나, 다른 곳은 건드리지 않고 TODO 부분만 고치는 방향으로 하시는 것을 권장해 드립니다.

## Advanced
* Quest 03-1의 코드를 더 구조화하고, 중복을 제거하고, 각각의 코드 블록이 한 가지 일을 전문적으로 잘하게 하려면 어떻게 해야 할까요?
* Quest 03-2의 스켈레톤 코드에서 `let` 대신 `var`로 바뀐다면 어떤 식으로 구현할 수 있을까요?
