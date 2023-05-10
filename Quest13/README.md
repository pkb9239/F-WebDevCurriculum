# Quest 13. 웹 API의 응용과 GraphQL

## Introduction
* 이번 퀘스트에서는 차세대 웹 API의 대세로 각광받고 있는 GraphQL에 대해 알아보겠습니다.

## Topics
* GraphQL
  * Schema
  * Resolver
  * DataLoader
* Apollo

## Resources
* [GraphQL](https://graphql.org/)
* [GraphQL.js](http://graphql.org/graphql-js/)
* [DataLoader](https://github.com/facebook/dataloader)
* [Apollo](https://www.apollographql.com/)

## Checklist
* GraphQL API는 무엇인가요? REST의 어떤 단점을 보완해 주나요?
  - REST에서는 여러 리소스를 얻기 위해서 여러 번의 요청을 해야했지만, GraphQL은 한 번의 요청에 원하는 요구사항을 모두 담아, 한 번의 응답에 받을 수 있다.
  - REST에서는 어떤 데이터가 필요할 떄, 불필요한 나머지 데이터들도 받아와야 했지만, GraphQL은 받아오고자 하는 정보의 취사 선택이 가능하다
* GraphQL 스키마는 어떤 역할을 하며 어떤 식으로 정의되나요?
  - DB의 테이블 모델링 같은 느낌, CRUD의 요청 인터페이스를 정의하며 (express의 path와 router처럼) query와 mutation의 input 변수들과 그의 type, return되는 정보의 type 등을 선언하게 된다.
* GraphQL 리졸버는 어떤 역할을 하며 어떤 식으로 정의되나요?
  - express router처럼, 특정 query에 대응하는 함수의 형태로 동작한다
  - rootValue의 object 형태로 반환되며 rootValue.method = ... 의 형태로 정의된다.
  - GraphQL 리졸버의 성능 향상을 위한 DataLoader는 무엇이고 어떻게 쓰나요?
    - DB N+1 문제를 해결하기 위해 사용한다
      - 쿼리 1번으로 N건을 가져왔는데, N건의 관련 컬럼을 얻기 위해 쿼리를 N번 추가 수행하는 문제
      - 쿼리결과 건수마다 참조 정보를 얻기 위해 건수만큼 반복해서 쿼리를 수행하게 되는 문제
    - DB에 접근하는 여러번의 동작을 합쳐서 한 번에 동작하도록 변경해준다.
    - resolver -> DB의 접근이 아니라, resolver -> dataloader -> DB 의 형태로 사용
    - dataloader가 요청들을 받은 뒤, 중첩되는 부분을 모아 DB에 접근하여 리퀘스트 횟수를 줄인다
      - batch scheduling이라는 옵션이 존재하는데, 기본값으로는 단일 실행 프레임? 내에서 발생하는 DB 접근들을 모아서 실행해주고, 수동으로 일정 시간동안 모인 요청들을 묶어서도 사용할 수 있다고 한다.
* 클라이언트 상에서 GraphQL 요청을 보내려면 어떻게 해야 할까요?
  - Apollo 프레임워크(서버/클라이언트)의 장점은 무엇일까요?
    - http 요청/응답을 신경쓰지 않고 서버/클라이언트의 데이터 교환을 구현할 수 있어, 스키마와 쿼리 등의 graphql 요소들만 신경써주면 된다는 장점이 있다.
    - 프론트엔드 에서는 state를 관리하는 역할도 수행할 수 있다. (상태 관리 툴을 대체 가능하다고 함)
  - Apollo Client를 쓰지 않고 Vanilla JavaScript로 GraphQL 요청을 보내려면 어떻게 해야 할까요?
    - GET 또는 POST 메소드를 사용하고, request body의 형태를 json으로 지정하여 사용한다
    - body의 query 필드와, variables 필드를 활용하여 요청을 보낼 수 있다.
* GraphQL 기반의 API를 만들 때 에러처리와 HTTP 상태코드 등은 어떻게 하는게 좋을까요?
  - graphql 접근 자체가 실패할 경우 express에서 실패, 인증요청 등의 상태 반환 (401 등)
  - graphql 접근은 성공했으나
    - query 성공시 200
    - query resolver 실행중 실패시 해당 상태코드 (없는 리소스입니다 또는 필드 일부가 입력되지 않아서 요청을 처리할 수 없다 등) 반환
  - 라고 생각했으나, 만약 두 가지 스키마에 대해 요청했으나 하나는 성공하고, 하나는 실패했다면 어떻게 해야할까?
    - graphql에서 errors 필드를 반환하고, 상태 코드는 200으로 고정하는것이 바람직할 것이라 생각된다.

## Quest
* 메모장의 서버와 클라이언트 부분을 GraphQL API로 수정해 보세요.

## Advanced
* GraphQL이 아직 제대로 수행하지 못하거나 불가능한 요구사항에는 어떤 것이 있을까요?
* GraphQL의 경쟁자에는 어떤 것이 있을까요?
