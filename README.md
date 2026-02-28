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
