# Quest 19-F. 웹 어셈블리의 기초

## Introduction
* 이번 퀘스트에서는 2021년 현재 웹 프론트엔드의 많은 최신 기술 중 웹 어셈블리에 관해 알아보겠습니다.

## Topics
* Web Assembly
* Rust

## Resources
* [MDN - 웹어셈블리의 컨셉](https://developer.mozilla.org/ko/docs/WebAssembly/Concepts)
* [MDN - Rust to wasm](https://developer.mozilla.org/ko/docs/WebAssembly/Rust_to_wasm)
* [Learn Rust](https://www.rust-lang.org/learn)
* [Rust - sha2](https://docs.rs/sha2/0.9.5/sha2/)

## Checklist
* 웹 어셈블리란 어떤 기술인가요?
  - 웹에서 사용할 수 있는 어셈블리어 코드 표준
  - 네이티브에 가까운 실행 속도를 제공
* 웹 어셈블리 모듈을 웹 프론트엔드 상에서 실행시키려면 어떻게 해야 할까요?
  - 다른 언어를 통해 (GO, Rust 등) wasm 패키지를 생성하면 이를 불러올 수 있는 js 또는 wasm 파일이 생성된다
  - js에서 위 파일을 불러와 실행하면 된다
* Rust란 어떤 특징을 가진 프로그래밍 언어인가요?
  - null 포인터 에러가 존재할 수 없다 (모든 변수는 초기값을 지닌다)
    - option 제네릭 타입을 사용하여 None(우리가 아는 null) 또는 데이터만 변수에 지정할 수 있다.
  - let, const처럼 변수의 가변성을 구분하여 사용한다 (let, mut 키워드 사용)
  - 타입 시스템을 사용한다
* 웹 어셈블리 모듈을 만드는 방법에는 어떤 것들이 있나요?
  - go, rust, c, c++ 등의 언어를 사용해서 wasm 패키지를 생성할 수 있다.
* 웹 어셈블리가 할 수 없는 작업에는 무엇이 있을까요? 웹 어셈블리는 어떤 목적에 주로 쓰이게 될까요?
  - wasm 자체로는 web api에 접근할 수 없다. (미래에는 가능하게 만들 계획이라고 한다)
  - 3d,2d 그래픽 또는 기타 복잡한 연산이 필요한 경우에 사용한다

## Quest
* 텍스트 에디터 프로그램에서 각 탭의 내용의 SHA-256 해시를 실시간으로 계산하여 화면 아래에 표시해 보세요.
  * 해당 해시는 Rust로 작성된 웹 어셈블리 함수를 통해 계산되어야 합니다.
  * 순수 자바스크립트로 계산할 때와의 퍼포먼스 차이를 체크해 보세요. (퍼포먼스 차이를 알아보는 데에 어떤 전략들이 있을까요?)

## Advanced
* 웹 어셈블리 바이너리는 어떻게 구성되어 있을까요?
