# 	Quest 16-F. 컴포넌트 기반 개발

## Introduction
* 이번 퀘스트에서는 Vue.js 프레임워크를 통해 컴포넌트 기반의 웹 클라이언트 개발 방법론을 더 자세히 알아보겠습니다.

## Topics
* Vue.js framework
* vuex
* Virtual DOM

## Resources
* [Vue.js](https://vuejs.org)
  * [Lifecycle Hooks](https://v3.vuejs.org/guide/composition-api-lifecycle-hooks.html)
  * [State Management](https://v3.vuejs.org/guide/state-management.html)
  * [Virtual DOM](https://v3.vuejs.org/guide/optimizations.html#virtual-dom)

## Checklist
* Vue.js는 어떤 특징을 가지고 있는 웹 프레임워크인가요?
  - Vue.js는 내부적으로 어떤 식으로 동작하나요?
    - 가상 DOM을 활용하며, 이를 실제 DOM과 비교하여 렌더링 시점을 최적화 해준다
    - 데이터의 양방향 바인딩을 지원한다
    - 컴포넌트 기반의 구조로 작성하도록 되어있다
* Vue.js에서의 컴포넌트란 무엇인가요?
  - Vue 컴포넌트의 라이프사이클은 어떤 식으로 호출되나요?
    - vue객체 생성 -> 이벤트 초기화 -> `(beforecreate)` -> 상태 초기화 -> `(created)` -> template 컴파일 -> `(beforeMount)` -> DOM에 붙이기 -> `(Mounted)` -> `(beforeUpdate)` -> 상태 변경 -> `(updated)`-> DOM에서 떨어져 나가기`(destoy)` -> `(destroyed)`
* 컴포넌트 간에 데이터를 주고받을 때 단방향 바인딩과 양방향 바인딩 방식이 어떻게 다르고, 어떤 장단점을 가지고 있나요?
  - 바인딩 : 두 데이터 혹은 정보의 소스를 일치시키는 기법
  - 단방향 : js -> html의 갱신만 가능
    - 데이터를 DOM에 반영할 떄, 성능 저하가 상대적으로 적다
    - 변화 감지 -> 반영에 관한 코드를 매번 작성해야 한다
  - 양방향 : js -> html, html -> js 양방향의 갱신 가능
    - 코드의 양이 줄어든다
    - 데이터를 DOM에 반영할 떄, 성능이 감소되는 경우가 존재한다
* Vue.js 기반의 웹 어플리케이션을 위한 상태관리 라이브러리에는 어떤 것이 있을까요? 이러한 상태관리 툴을 사용하는 것에는 어떤 장단점이 있을까요?
  - xstate, vue-stator, vuex 등등
  - global 상태관리를 가능하게 해준다 (매우 편리)
  - api를 호출하고, 그 정보를 전역 상태에 저장할 때 api 호출 시점과, 저장 시점이 애매하다
  - '전역'으로 관리하는 상태의 목적이 확실하지 않다면, 목적을 잃은 코드에 의해 지저분해질 수 있다

## Quest
* Vue.js를 통해 메모장 시스템을 다시 한 번 만들어 보세요.
  * 어떤 컴포넌트가 필요한지 생각해 보세요.
  * 각 컴포넌트별로 해당하는 CSS와 자바스크립트를 어떤 식으로 붙여야 할까요?
  * Vue.js 시스템에 타입스크립트는 어떤 식으로 적용할 수 있을까요?
  * 컴포넌트간에 데이터를 주고받으려면 어떤 식으로 하는 것이 좋을까요?
  * `vue-cli`와 같은 Vue의 Boilterplating 기능을 이용하셔서 세팅하시면 됩니다.

## Advanced
* React와 Angular는 어떤 프레임워크이고 어떤 특징을 가지고 있을까요? Vue와는 어떤 점이 다를까요?
* Web Component는 어떤 개념인가요? 이 개념이 Vue나 React를 대체하게 될까요?
* Reactive Programming이란 무엇일까요?
