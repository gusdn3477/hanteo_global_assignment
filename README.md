# **Hanteo global 과제 테스트**

## **소개**

- HANTEO GLOBAL 과제 테스트입니다.

## **기능**

1. **스와이프를 통한 메뉴 이동**

   - 스와이프 기능을 통해 페이지 이동을 할 수 있으며, 현재 있는 메뉴의 경우 흰색으로 nav 바에 표시됩니다.
   - 상단 메뉴 클릭으로도 페이지 이동 가능합니다.

2. **Carousel 기능을 통한 무한 루프 & 외부 동작 기능**

   - Carousel을 활용하여 다양한 프로그램 등을 살펴볼 수 있으며, 클릭 시 외부로 이동할 수 있습니다.

3. **무한 스크롤 기능을 통한 콘텐츠 조회**

   - 콘텐츠를 리스트 형식으로 조회하며, 한번에 대량의 데이터를 가져오는 것이 아닌 무한 스크롤 형식으로 데이터를 조회합니다.

## **기술 스택**

- **Frontend:** React, Vite, react-slick, react-intersection-observer 등
- **Styling:** tailwindcss

## **설치 및 실행**

### **필수 요구사항**

- Node.js 최소 18 버전 이상
- 패키지 매니저: npm, yarn, pnpm 등

### **설치 과정**

1. 프로젝트를 clone 혹은 main branch에서 pull 받습니다.

   ```bash
   git clone [프로젝트 URL]
   ```

2. 프로젝트 폴더로 이동 후 패키지를 설치합니다.

   ```bash
   cd [프로젝트 폴더]
   yarn (or npm install 등)
   ```

3. Vite 개발 서버를 실행합니다.

   ```bash
   yarn dev (or npm dev)
   ```

4. 브라우저에서 `http://localhost:5173`으로 접속합니다. (--host 옵션을 통한 ip 주소를 통한 접속도 지원됩니다.)

## **폴더 구조**

```plaintext
src/
├── assets/           # icon, css 파일
├── components/       # 재사용 가능한 UI 컴포넌트
├── pages/            # 각 페이지 컴포넌트
└── data/             # 객체 배열 형식의 데이터
```

---
