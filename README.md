# Simple Language Switcher

간단한 영어/한국어 전환 웹 애플리케이션입니다. Railway와 Vercel 배포를 학습하기 위한 프로젝트입니다.

## 기능

- 영어와 한국어 간 언어 전환
- 반응형 디자인 (모바일/데스크톱 지원)
- Railway와 Vercel 배포 지원

## 로컬에서 실행하기

### 1. 패키지 설치

```bash
npm install
```

### 2. 서버 실행

```bash
npm start
```

### 3. 브라우저에서 확인

브라우저에서 `http://localhost:3000` 을 열어주세요.

## 배포하기

### Railway에 배포하기

1. [Railway](https://railway.app/) 회원가입 및 로그인
2. GitHub에 이 프로젝트 푸시하기
3. Railway 대시보드에서 "New Project" 클릭
4. "Deploy from GitHub repo" 선택
5. 배포할 저장소 선택
6. Railway가 자동으로 Node.js 프로젝트를 감지하고 배포합니다
7. "Settings" 탭에서 도메인 생성 가능

**Railway 배포 팁:**
- Railway는 `package.json`의 `start` 스크립트를 자동으로 실행합니다
- PORT 환경 변수는 Railway가 자동으로 설정합니다
- 무료 플랜: 월 $5 크레딧 제공

### Vercel에 배포하기

1. [Vercel](https://vercel.com/) 회원가입 및 로그인
2. GitHub에 이 프로젝트 푸시하기
3. Vercel 대시보드에서 "New Project" 클릭
4. GitHub 저장소 import
5. 프로젝트 설정 확인 (기본값 사용)
6. "Deploy" 클릭
7. 배포 완료 후 제공되는 URL로 접속

**Vercel 배포 팁:**
- `vercel.json` 파일이 포함되어 있어 자동으로 설정됩니다
- Vercel CLI로 배포: `npm i -g vercel` 후 `vercel` 명령어 실행
- 무료 플랜: 개인 프로젝트에 적합

## Git 저장소 설정

배포를 위해 먼저 Git 저장소를 설정해야 합니다:

```bash
# Git 초기화
git init

# 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: Simple Language Switcher"

# GitHub 저장소 연결 (저장소 URL을 본인의 것으로 변경)
git remote add origin https://github.com/your-username/your-repo.git

# 푸시
git branch -M main
git push -u origin main
```

## 프로젝트 구조

```
test_deploy_npm/
├── package.json          # npm 설정 및 의존성
├── server.js            # Express 서버
├── .gitignore           # Git 무시 파일
├── vercel.json          # Vercel 배포 설정
├── README.md            # 이 파일
├── public/              # 정적 파일
│   └── style.css        # CSS 스타일
└── views/               # EJS 템플릿
    └── index.ejs        # 메인 페이지
```

## 기술 스택

- **Backend:** Node.js + Express.js
- **Template Engine:** EJS
- **Styling:** CSS3
- **Deployment:** Railway, Vercel

## 학습 목표

이 프로젝트를 통해 다음을 학습할 수 있습니다:

1. Node.js 웹 애플리케이션 구조
2. Express.js 라우팅
3. EJS 템플릿 엔진 사용
4. 정적 파일 서빙
5. 환경 변수 (PORT) 처리
6. Git 버전 관리
7. Railway 배포 과정
8. Vercel 배포 과정

## 문제 해결

### 포트가 이미 사용 중인 경우

다른 포트로 실행하려면:

```bash
PORT=8080 npm start
```

### npm install 오류

Node.js 버전을 확인하세요 (14.0.0 이상 필요):

```bash
node --version
```

## 라이선스

MIT License - 자유롭게 사용, 수정, 배포하세요!
