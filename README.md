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
    - base: reset, normalize, globals scss
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
    - Interpolation: <code>#{}</code>
      - 문자를 통해 '가변적인 값'들을 적용해야할 경우 사용.
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

  - <code>%(placeholder)</code>: 공통 스타일을 공유하는 컴포넌트가 있을 때 사용.
    - 호출: <code>@extend %name</code>
    - @mixin과의 차이점
      - parameter가 없고, 확장성이 떨어짐.
      - 연관있는 친구들을 그루핑해서 렌더링 함.
  - ⭐️ img 태그를 스타일링 할 때 주의점
    - 예민한 img 태그 자체를 건드리지 말고, 부모를 통해 스타일링해주기!
    - <code>object-fit</code>: img태그에서 background-size 속성과 같이 사용할 수 있음.

### 2021-07-23(금)

- **modules 만들기2**

  - button 모듈
    - button 스타일링을 styles, sizes, states로 구분해주기
    - button은 text에 따라 크기가 달라지기 때문에 width값 선언하지 않는 것을 추천.
    - <code>:not(x)</code>: 부정 가상 클래스
      - x가 아닌것이 일치
      - ex) disabled 상태가 아닌 x 요소가 hover 되었을 때
        - <code>x:not(:disabled):hover</code>
  - form 모듈
    - select의 화살표 appearance를 없애고 스타일링할 경우, 클릭 이벤트가 안먹힘.
      - <code>pointer-events: none</code>: 클릭 대상이 아니다! 라고 브라우저에 인식시켜줌.
      - <code>aria-hidden</code>: 스크린리더가 건너뜀

- **base 폴더에 globals 파일 생성**

  - globals 폴더: 전역으로 사용할 클래스 선언

### 2021-07-24(토)

- **레이아웃 분석**

  - ⭐️ 모바일, 데스크탑 공통 요소 먼저 찾기!

    - 디자인 + 역할 + 기능 모두 같은 요소
    - 마크업을 어떻게 나눌 것인지 고민하기

  - **GNB(Global Navigation Bar)**
    - nav, aside와 같은 sectioning 태그는 그 안의 헤딩 태그가 있어야 함!!
    - 그리드 분석 시 모바일 그리드와 같을 경우 col 생략 가능.
    - 그리드 column이 애매하게 위치할 경우 div로 영역 구분하기.

### 2021-07-25(일)

- **GNB 레이아웃 완성**
  - 그리드 시스템관련 class에는 어떠한 스타일링도 하지 말 것! 필요하다면 wrapper를 생성해 마크업해줄 것.

### 2021-07-26(월)

- **GNB 레이아웃 완성2**
  - login, sign과 관련된 클래스는 보통 auth라 함.

### 2021-07-28(수)

- **Sidebar**
  - 접었다 펼쳤다 하는 걸 dropdown, collapse, drawer, accordian 이라 부름.
  - <code>aria-label</code>이 영어일 때, <code>lang = 'en'</code>속성으로 스크린 리더가 영어로 읽게 도와주기.
  - truncate: 텍스트 말줄임
  - 기본 이미지는 <code>background-image</code>로 깔아주기.

### 2021-07-29(목)

- **Sidebar animation**
  - 열었다 닫았다를 구현하기 위해선, 각 서랍의 list가 몇개인지, 전체 높이값은 얼마인지 알아야 함.
  - 정확한 수치라면 <code>max-height</code>와 <code>overflow-hidden</code>을 통해 애니메이션 구현.
  - y축 스크롤: overflow로 스크롤을 주고 싶을 땐, 브라우저에 대상 컴포넌트의 width, heigtht 값을 정확히 인식시키기.
  - x축 toggle: width값 만큼 transform x축을 빼주고, 0으로 되돌리기.
  - z-index 관리하기
    - 변수로 관리!
  - <code>overscoll-behavior</code>: 두 개의 컨텐츠가 겹쳐져 있고 앞이 스크롤 되게 설정했다면, 뒤 컨텐츠는 스크롤되지 않게 하는 속성.

### 2021-07-30(금)

- **Search-modal**
  - 최근 검색어는 가장 아래가 오래된 것이므로 순서가 중요! 따라서 ol 태그 사용.
  - flex-grow, flex-shrink: 0이 아닐 경우, 해당 아이템이 유연한 박스로 변해 빈 공간을 메움.
    - 기본값
      - `flex-grow: 0`
      - `flex-shrink: 1`

### 2021-08-01(일)

- **lnb**
  - `calc()`: 연산을 할 수 없는 단위들을 연산이   가능하게 해주는 css 함수.
    - ex) calc(100% + 8px)
  - `max-content`, `min-content`: 자신이  갖고 있는 자손의 사이즈가 특정 값으로 고정되지   않았을 때 의미있게 사용됨.
    - 호환성 이슈가 있음!!
  - ⭐️ block VS inline-block ⭐️
    - block
      - 따로 width값을 주지 않는 한 `부모`의 content-box width의 100%를 기준으로 함.
    - inline-block
      - 따로 width값을 주지 않으면 자신을 기준으로 함.
  - ⭐️ `overflow` issue
    - overflow 한 쪽이 'visible'일 때, 다른 한쪽이 'scroll' / 'auto'라면 visible은 'auto'로 변함.




