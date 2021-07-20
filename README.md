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
  - styles 폴더에 base와 constants 폴더로 구분.
    - base: reset, normalize scss
    - constants: 변수 파일 저장
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
  - gutter에는 요소를 배치하지 않는다.
  - 모바일은 기기마다 해상도가 달라서 unit의 단위가 %이다.
