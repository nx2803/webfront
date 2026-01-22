# PEECE MAKER (피스메이커)

PEECE MAKER는 제주도 내 공중화장실의 위치 및 상세 정보(편의시설, 안전시설 등)를 제공하고, 사용자 리뷰 및 커뮤니티 기능을 통해 쾌적한 화장실 이용 환경을 공유하는 서비스입니다.

> Project Goal: 제공 정보를 통해 제주도 공중화장실의 접근성과 안전성을 높이고, 이용자들이 상태를 공유하는 커뮤니티를 조성합니다.

---

## 데모(시연 동영상)

시연 영상:  
https://drive.google.com/file/d/13tFW-Ujd-TiHFeiQlXoA7XbLkdLOUBF5/view?usp=drive_link

---

## 목차 (Contents)

- [주요 기능 (Key Features)](#주요-기능-key-features)
- [기술 스택 (Tech Stack)](#기술-스택-tech-stack)
- [시작하기 (Getting Started)](#시작하기-getting-started)
- [폴더 구조 (Project Structure)](#폴더-구조-project-structure)
- [라이선스 (License)](#라이선스-license)

---

## 주요 기능 (Key Features)

1. 랜딩 페이지 (Landing Page)
   - 몰입감 있는 인트로: 제주 풍경 영상(`public/jeju.mp4`)과 Framer Motion을 활용한 텍스트 애니메이션.
   - 서비스 소개: Map, Chart, Board 등 주요 기능과 데이터 출처(제주시 공공데이터)를 안내.

2. 화장실 지도 (Toilet Map)
   - 위치 기반 서비스: Kakao Map API 연동으로 현재 위치 기반 주변 화장실 조회.
   - 클러스터링: 마커가 밀집된 지역에서도 가독성 유지.
   - 상세 필터링:
     - 안심 시설: 비상벨, CCTV 여부
     - 편의 시설: 장애인용, 유아 동반 가능 여부
     - 성별 구분: 남/여 화장실 정보
   - 상세 팝업: 화장실 선택 시 세부 정보 및 사용자 리뷰 표시.

3. 통계 대시보드 (Statistics Dashboard)
   - 데이터 시각화: Recharts 기반 차트 제공
     - 지역별 분포(BarChart): 읍/면/동 단위 화장실 개수
     - 수용력 분석(PieChart): 성별·시설 유형별 비율
   - 실시간 필터링: 필터 버튼(전체, 안심, 장애인, 유아)으로 즉시 통계 반영
   - 다크 모드 지원: 시스템 테마에 맞춰 차트 색상 최적화
   - 랭킹 시스템: 사용자 평점 기반 Best/Worst Top 5

4. 커뮤니티 게시판 (Community Board)
   - 정보 공유: 화장실 이용 경험 및 상태 공유
   - CRUD 지원: 게시글 작성·조회·수정·삭제
   - 검색 및 정렬: 제목/내용/작성자 검색과 페이지네이션

---

## 기술 스택 (Tech Stack)

| 카테고리 | 기술 |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| Language | TypeScript, React 19 |
| Styling | Tailwind CSS 4, Framer Motion |
| State Management | React Context API |
| Visualization | Recharts, react-kakao-maps-sdk |
| Database/Auth | Supabase (Client integration) |
| Environment | Windows (개발 환경) |

---

## 시작하기 (Getting Started)

로컬에서 프로젝트를 실행하려면 다음을 따르세요.

1. 저장소 클론
```bash
git clone <repository_url>
cd webfront
```

2. 패키지 설치
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. 환경 변수 설정  
프로젝트 루트에 `.env.local` 파일을 만들고 Kakao Map API 키를 추가하세요.
```env
NEXT_PUBLIC_KAKAO_MAP_KEY=your_kakao_map_api_key_here
# (필요 시 Supabase 키 등 다른 env 항목 추가)
```

4. 개발 서버 실행
```bash
npm run dev
```
브라우저에서 `http://localhost:3000`을 열어 확인하세요.

---

## 폴더 구조 (Project Structure)

```text
src/
├── app/
│   ├── main/             # 핵심 기능 페이지
│   │   ├── chartView.tsx # 통계 및 차트
│   │   ├── mapView.tsx   # 지도 및 마커 로직
│   │   ├── boardView.tsx # 게시판 기능
│   │   └── page.tsx      # 메인 레이아웃
│   ├── page.tsx          # 랜딩 페이지 (Intro)
│   └── globals.css       # 전역 스타일 (Tailwind)
├── components/           # 공통 UI 컴포넌트
├── assets/               # 정적 리소스 및 더미 데이터
└── public/               # 이미지, 비디오, 폰트 등 정적 파일
```


---

## 라이선스 (License)

This project is for educational and portfolio purposes.
