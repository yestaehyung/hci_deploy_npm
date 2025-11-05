const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Language content
const content = {
  en: {
    title: 'Simple Language Switcher',
    welcome: 'Welcome!',
    description: 'This is a simple bilingual web application built with Express.js.',
    features: 'Features',
    feature1: 'Switch between English and Korean',
    feature2: 'Easy to deploy on Railway or Vercel',
    feature3: 'Perfect for learning deployment basics',
    instruction: 'Click the button below to switch languages:',
    switchBtn: 'Switch to Korean',
    footer: 'Built for deployment learning'
  },
  ko: {
    title: '간단한 언어 전환 앱',
    welcome: '환영합니다!',
    description: 'Express.js로 만든 간단한 다국어 웹 애플리케이션입니다.',
    features: '기능',
    feature1: '영어와 한국어 간 전환',
    feature2: 'Railway 또는 Vercel에 쉽게 배포',
    feature3: '배포 학습에 완벽한 프로젝트',
    instruction: '아래 버튼을 클릭하여 언어를 전환하세요:',
    switchBtn: 'Switch to English',
    footer: '배포 학습을 위해 제작됨'
  }
};

// Routes
app.get('/', (req, res) => {
  res.render('index', { content: content.en, lang: 'en' });
});

app.get('/en', (req, res) => {
  res.render('index', { content: content.en, lang: 'en' });
});

app.get('/ko', (req, res) => {
  res.render('index', { content: content.ko, lang: 'ko' });
});

// Health check endpoint for deployment platforms
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📱 Visit: http://localhost:${PORT}`);
});
