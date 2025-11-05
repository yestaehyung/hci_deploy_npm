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

배포 전에 먼저 GitHub에 코드를 업로드해야 합니다.

### 사전 준비: GitHub 저장소 생성 및 코드 업로드

#### 1단계: GitHub 저장소 만들기

1. [GitHub](https://github.com/)에 로그인
2. 우측 상단의 `+` 버튼 클릭 → `New repository` 선택
3. 저장소 정보 입력:
   - **Repository name**: `simple-language-switcher` (원하는 이름)
   - **Description**: "Simple bilingual web app for deployment learning"
   - **Public** 선택 (Private도 가능하지만 Public 권장)
   - **❌ Initialize this repository with a README 체크하지 않기** (이미 로컬에 파일이 있으므로)
4. `Create repository` 버튼 클릭

#### 2단계: 로컬 프로젝트를 GitHub에 업로드

```bash
# 1. Git 초기화 (아직 안했다면)
git init

# 2. 모든 파일 추가
git add .

# 3. 첫 커밋 생성
git commit -m "Initial commit: Simple Language Switcher"

# 4. GitHub 저장소 연결 (본인의 저장소 URL로 변경!)
git remote add origin https://github.com/your-username/simple-language-switcher.git

# 5. 기본 브랜치 이름을 main으로 설정
git branch -M main

# 6. GitHub에 푸시
git push -u origin main
```

**GitHub 저장소 URL 확인 방법:**
- GitHub 저장소 페이지에서 초록색 `Code` 버튼 클릭
- HTTPS 탭에서 URL 복사 (예: `https://github.com/your-username/simple-language-switcher.git`)

#### 3단계: 업로드 확인

GitHub 저장소 페이지를 새로고침하면 모든 파일이 업로드된 것을 확인할 수 있습니다.

---

### Railway에 배포하기 (상세 가이드)

Railway는 Git 기반 자동 배포 플랫폼입니다. GitHub 저장소와 연결하면 자동으로 배포됩니다.

#### 1단계: Railway 계정 생성

1. [Railway](https://railway.app/) 접속
2. 우측 상단 `Login` 클릭
3. `Login with GitHub` 선택 (GitHub 계정으로 로그인)
4. Railway가 GitHub 접근 권한 요청 → `Authorize Railway` 클릭

#### 2단계: 새 프로젝트 생성

1. Railway 대시보드에서 `New Project` 버튼 클릭
2. `Deploy from GitHub repo` 선택
3. **처음 사용하는 경우:** `Configure GitHub App` 클릭
   - GitHub에서 Railway가 접근할 저장소 선택
   - `All repositories` 또는 `Only select repositories` 선택
   - `simple-language-switcher` 저장소 선택
   - `Save` 클릭

#### 3단계: 저장소 선택 및 배포

1. 저장소 목록에서 `simple-language-switcher` 선택
2. Railway가 자동으로 프로젝트를 감지하고 배포 시작
3. 배포 로그를 확인할 수 있습니다:
   - `npm ci` - 패키지 설치
   - `npm start` - 서버 실행
   - 배포 성공 시 ✅ 표시

#### 4단계: 도메인 생성 및 접속

1. 배포된 서비스 카드 클릭
2. `Settings` 탭 이동
3. **Public Networking** 섹션에서:
   - `Generate Domain` 버튼 클릭
   - 자동으로 `xxx.up.railway.app` 형식의 도메인 생성
4. 생성된 도메인 클릭하여 웹사이트 확인!

#### 5단계: 배포 확인

- 브라우저에서 Railway 도메인으로 접속
- 언어 전환 버튼이 잘 작동하는지 확인
- 영어/한국어 페이지 모두 정상 작동하는지 테스트

**Railway 자동 재배포:**
- GitHub에 새 커밋을 푸시하면 자동으로 재배포됩니다
- `git push` → Railway가 자동 감지 → 자동 빌드 및 배포

**Railway 배포 팁:**
- Railway는 `package.json`의 `start` 스크립트를 자동으로 실행합니다
- PORT 환경 변수는 Railway가 자동으로 설정합니다
- 무료 플랜: 월 $5 크레딧 제공 (Hobby Plan)
- 배포 로그는 `Deployments` 탭에서 확인 가능

---

### Vercel에 배포하기 (상세 가이드)

Vercel은 프론트엔드와 서버리스 함수에 최적화된 배포 플랫폼입니다.

#### 1단계: Vercel 계정 생성

1. [Vercel](https://vercel.com/) 접속
2. 우측 상단 `Sign Up` 클릭
3. `Continue with GitHub` 선택 (GitHub 계정으로 로그인)
4. Vercel이 GitHub 접근 권한 요청 → `Authorize Vercel` 클릭

#### 2단계: 새 프로젝트 생성

1. Vercel 대시보드에서 `Add New...` → `Project` 클릭
2. `Import Git Repository` 섹션에서:
   - **처음 사용하는 경우:** `Add GitHub Account` 클릭
   - GitHub에서 Vercel이 접근할 저장소 선택
   - `simple-language-switcher` 저장소 선택
3. `Import` 버튼 클릭

#### 3단계: 프로젝트 설정

1. **Configure Project** 페이지에서:
   - **Project Name**: `simple-language-switcher` (자동 입력됨)
   - **Framework Preset**: `Other` (자동 선택됨)
   - **Root Directory**: `./` (기본값 유지)
   - **Build and Output Settings**:
     - Build Command: 비워두기 (또는 `npm install`)
     - Output Directory: 비워두기
   - **Environment Variables**: 설정 불필요 (PORT는 Vercel이 자동 설정)
2. `Deploy` 버튼 클릭

#### 4단계: 배포 진행

1. Vercel이 자동으로 빌드 및 배포 시작
2. 배포 로그 확인:
   - Cloning repository
   - Installing dependencies
   - Running build
   - Deploying
3. 배포 성공 시 축하 화면 표시 🎉

#### 5단계: 배포된 사이트 확인

1. 배포 완료 후 자동으로 생성된 URL 표시:
   - `https://simple-language-switcher.vercel.app` (또는 유사한 형식)
2. `Visit` 버튼 클릭하여 웹사이트 확인
3. 언어 전환 기능 테스트

#### 6단계: 도메인 관리 (선택사항)

1. 프로젝트 대시보드에서 `Settings` 탭 클릭
2. `Domains` 섹션에서:
   - 기본 도메인: `xxx.vercel.app`
   - 커스텀 도메인 추가 가능

**Vercel 자동 재배포:**
- GitHub에 새 커밋을 푸시하면 자동으로 재배포됩니다
- `main` 브랜치에 푸시 → Production 배포
- 다른 브랜치 푸시 → Preview 배포 (테스트용)

**Vercel 배포 팁:**
- `vercel.json` 파일이 포함되어 있어 자동으로 설정됩니다
- Vercel CLI로 배포: `npm i -g vercel` 후 `vercel` 명령어 실행
- 무료 플랜 (Hobby): 개인 프로젝트에 적합
- 빌드 로그는 `Deployments` 탭에서 확인 가능
- 각 커밋마다 고유한 Preview URL 생성

---

### 배포 플랫폼 비교

| 항목 | Railway | Vercel |
|------|---------|--------|
| **적합한 용도** | 백엔드, 데이터베이스 포함 풀스택 앱 | 프론트엔드, 서버리스 함수 |
| **무료 플랜** | 월 $5 크레딧 | Hobby 플랜 (무제한 배포) |
| **배포 속도** | 중간 | 매우 빠름 |
| **도메인** | `xxx.up.railway.app` | `xxx.vercel.app` |
| **설정 난이도** | 쉬움 | 매우 쉬움 |
| **데이터베이스 지원** | 내장 지원 (PostgreSQL, Redis 등) | 외부 연결 필요 |
| **장기 실행 프로세스** | 지원 (WebSocket 등) | 제한적 (서버리스) |

**권장사항:**
- **간단한 웹앱, 학습용**: Railway와 Vercel 둘 다 좋음
- **데이터베이스 필요**: Railway 추천
- **정적 사이트, Next.js**: Vercel 추천
- **연습 삼아 둘 다 배포해보세요!**


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
