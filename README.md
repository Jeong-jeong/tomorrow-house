# 요약

## ？ 프로젝트 목적

- 오늘의 집의 복잡한 UI를 구조화하고 개발하기.
- <img src="https://img.shields.io/badge/-SCSS-ff69b4"> 적극적으로 활용하기

## 🗓 프로젝트 기간

- 2021-07-18 ~

## 👀 회고

- undefined

## ✏️ 기록

### 2021-07-18(일)

#### Raster VS Vector Images

- **Raster(bitmap): 픽셀 기반.**
  - 세밀하고 복잡한 이미지를 표현할 때 사용.
  - JPEG, PNG, GIF 등
    - JPEG: 압축률이 높아 용량의 부담이 적지만 원본이 훼손됨.
    - PNG: 투명, 반투명 지원. 비손실 압축 방식으로 원본이 훼손되지 않으나 용량이 큼.
    - GIF: 움짤. 최대 256색의 비손실 압축 방식.
- **Vector: 점과 점 사이의 곡선으로 이미지를 구성하는 방식.**
  - vector는 사이즈에 구애받지 않고 항상 같은 용량을 가짐.
  - 복잡한 그래픽의 경우 기본 용량이 높을 수도 있음.
  - icon, logo 등에 사용.
  - SVG, PDF 등
- **SVG의 특징**
  - 장점
    - html 문서 상에서 svg 태그 그 자체로 사용할 경우, 태그로서 조작할 수 있다는 장점이 있음.
    - ex) svg 속성 fill의 값으로 currentColor를 줄 경우, 부모의 색을 그대로 상속받음.
  - 단점
    - 코드가 길어짐.
  - 이러한 특징때문에 SVG를 **Icon Font**로 생성해 적용!!

### 2021-07-19(월)

- **개발자 도구에서 컴파일 전 위치 표시하기**
  - npm script에 옵션 <code>--source-map [boolean]</code>을 사용하면 원본 파일의 코드 위치를 보여줌.

### 2021-07-20(화)

- **프로젝트 구조화하기**
  - styles 폴더에 base와 constants, layouts, mixins, modules 폴더로 구분.
    - base: reset, normalize scss
    - constants: 변수 파일 저장
    - layouts: 커스텀 그리드 시스템 설계
    - moduls: 반복되는 컴포넌트 저장
- **⭐️ Typography 주의사항**
  - font-size, line-height, letter-spacing을 세트로 보기!!
  - letter-spacing은 em 단위로.
  - html에 본문 폰트 size를 지정해서 rem작업하기 좋게 초기화.
  - body에게 본문 폰트 color를 지정해서 상속받기 좋게 초기화.
  - font-smoothing
    - font가 부드럽게 렌더링됨.
- **Grid system 기본 지식**

  - <code>unit</code>: 한 기둥의 width
  - <code>gutter</code>: 기둥과 기둥사이
  - <code>1 column</code>: unit과 양 옆의 gutter 세트
  - <code>margin</code>: 나머지 영역
  - <code>container</code>: 그리드 시스템이 적용되는 영역
  - gutter에는 요소를 배치하지 않는다.
  - 모바일은 기기마다 해상도가 달라서 unit의 단위가 %이다.

  ### 2021-07-21(수)

- **Custom grid system 만들기**

  - 모바일(sm), 테블릿(md), 데스크탑(lg) 별로 그리드 분석 후 코드로 저장
  - ⭐️ MOBILE FIRST!!
    - <code>.container</code>, <code>.row</code>, <code>.col</code>의 공통 적용 코드를 작성 후 해상도에 따라 미디어쿼리로 필요한 부분만 업데이트하기.
    - SCSS의 템플릿 문자열은 <code>#{}</code>
  - ⭐️ max-container와 같이 고정된 값도 필요하다면 변수로 선언해 코드의 재사용성을 높이기.

- **@Mixin 만들기**

  - <code>@mixin</code> = 함수
    - 사용(호출)할 떈 <code>@include</code>
  - @mixin의 매개변수
    - 매개변수를 선택적으로 쓰고 싶을 때는 기본값을 false로 주고, @if문을 통해 유효성 검사.
      - ex) <code>type-of()</code>
  - @mixin 재사용성 높이기
    - 공통 부분 @mixin을 만들고, 매개변수로 체크해 효율성을 높이자!

- **function 만들기**

  - @mixin과의 차이점
    - function은 return을 통해 @include 없이 특정 값 반환.

- **데이터 타입: map**
  - key, value로 이루어진 데이터 타입.
  - 형태: map name: ()
  - 사용: <code>map-get(map name, key)</code>

### 2021-07-22(목)

- **modules 만들기**

  - <code>%(placeholder)</coce>: 공통 스타일을 공유하는 컴포넌트가 있을 때 사용.
    - 호출: <code>@extend %name</code>
    - @mixin과의 차이점
      - parameter가 없고, 확장성이 떨어짐.
      - 연관있는 친구들을 그루핑해서 렌더링 함.
  - ⭐️ img 태그를 스타일링 할 때 주의점
    - 예민한 img 태그 자체를 건드리지 말고, 부모를 통해 스타일링해주기!
    - <code>object-fit</code>: img태그에서 background-size 속성과 같이 사용할 수 있음.
