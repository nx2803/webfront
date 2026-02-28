<<<<<<< HEAD
# 🚽 PEECEMAKER (피스메이커)
> "THE GUARDIAN OF YOUR PRESTIGE" - 당신이 평생 지켜온 사회적 지위를 수호할 위대한 작전

<br/>

## 🚀 프로젝트 개요 (Project Overview)
**PEECEMAKER**는 아름다운 제주도를 여행하는 여행객들의 예기치 못한 생리적 위협으로부터 사회적 지위를 지켜주기 위해 탄생한 **제주도 공중화장실 위치 탐색 및 커뮤니티 플랫폼**입니다. 

제주특별자치도 제주시에서 제공하는 공공데이터를 기반으로 주변 화장실의 위치는 물론, 비상벨 설치 여부, 기저귀 교환대 유무 등의 상세 정보를 제공하며, 사용자 간 리뷰와 커뮤니티 게시판을 통해 실시간 정보를 교류할 수 있습니다.

<br/>

## 🛠 기술 스택 (Tech Stack)

### Frontend (Front-end Developer)
![Next JS](https://img.shields.io/badge/Next.js-16.0.0-black?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-19.0-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0-%2338B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-white?style=flat-square&logo=framer&logoColor=black)
![Kakao Maps](https://img.shields.io/badge/Kakao_Map_API-FFCD00?style=flat-square&logo=kakaotalk&logoColor=black)
![Recharts](https://img.shields.io/badge/Recharts-34A853?style=flat-square&logo=react&logoColor=white)
![Jotai](https://img.shields.io/badge/Jotai-000000?style=flat-square&logo=react&logoColor=white)

### Backend (Back-end Developer)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.5.8-6DB33F?style=flat-square&logo=spring-boot&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white)
![OAuth2](https://img.shields.io/badge/OAuth2_Google_&_Naver-EA4335?style=flat-square&logo=google&logoColor=white)

<br/>

## ✨ 핵심 기능 (The Key Functions)

### 1. 🗺️ Toilet Map (화장실 지도)
- **카카오 맵 API**를 활용하여 내 주변 화장실 위치 마커 제공
- 마커 클릭 시 화장실 상세 정보 (남/녀 칸 수, 장애인 화장실 유무, 기저귀 교환대 등) 제공
- 사용자들의 화장실 별점 리뷰 조회 및 작성
- 화장실 특성에 따른 필터링 기능 탑재

### 2. 📊 Toilet Chart (통계 차트)
- **Recharts** 라이브러리를 활용한 데이터 시각화
- 공중화장실 밀집 지점, 화장실 칸 수 분석 등 다양한 통계 데이터 제공
- 유저 리뷰 기반 별점 상위 5개 및 하위 5개 화장실 랭킹 시스템

### 3. 💬 Toilet Board (커뮤니티)
- 사용자 간 피드백과 생생한 정보를 나눌 수 있는 참여형 핫라인 게시판
- 게시글 및 댓글 작성, 수정, 삭제 기능 제공

<br/>

## 📁 주요 데이터 출처 (Data Source)
**제주특별자치도 제주시_공중화장실 (공공데이터포털)**
- 제공 기관: 제주특별자치도 제주시
- 데이터 규격: 위경도 좌표, 비상벨·CCTV 설치 여부, 개방 시간 등 상세 시설 데이터 포함
- [데이터 확인하기](https://www.data.go.kr/data/15110521/fileData.do)

<br/>

## 🚀 시작하기 (Getting Started)

### 사전 요구사항
이 프로젝트는 **Node.js (v20 이상)** 환경을 권장합니다.

### 패키지 설치
```bash
npm install
```

### 환경 변수 (.env.local)
프로젝트 루트에 `.env.local` 파일을 생성하여 아래 값을 입력해주세요:
```env
# 백엔드 서버 URL
NEXT_PUBLIC_BACKEND_URL=http://localhost:8080/

# 카카오 지도 SDK API KEY
NEXT_PUBLIC_KAKAO_MAP_KEY=your_kakao_api_key

# Supabase Auth Configuration (만약 필요시)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 서버 실행
```bash
# Next.js 16 실험적 기능과 함께 개발 서버 실행
npm run dev
```
브라우저에서 `http://localhost:3000`에 접속하여 애플리케이션을 확인할 수 있습니다.

<br/>

---
**© 2026 KDT-03 PEECE MAKER. ALL RIGHTS RESERVED.**
=======
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
>>>>>>> 3fa06fcbd64d1834d32d119afca828bf70e441bc
