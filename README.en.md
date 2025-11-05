# Simple Language Switcher

A simple bilingual web application that switches between English and Korean. This project is designed for learning how to deploy on Railway and Vercel.

## Features

- Switch between English and Korean languages
- Responsive design (mobile/desktop support)
- Support for Railway and Vercel deployment

## Running Locally

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Server

```bash
npm start
```

### 3. Open in Browser

Visit `http://localhost:3000` in your browser.

## Deployment

### Deploy to Railway

1. Sign up and log in to [Railway](https://railway.app/)
2. Push this project to GitHub
3. Click "New Project" on Railway dashboard
4. Select "Deploy from GitHub repo"
5. Choose the repository to deploy
6. Railway will automatically detect the Node.js project and deploy it
7. You can create a custom domain in the "Settings" tab

**Railway Deployment Tips:**
- Railway automatically runs the `start` script from `package.json`
- PORT environment variable is automatically set by Railway
- Free tier: $5 credits per month

### Deploy to Vercel

1. Sign up and log in to [Vercel](https://vercel.com/)
2. Push this project to GitHub
3. Click "New Project" on Vercel dashboard
4. Import your GitHub repository
5. Confirm project settings (use defaults)
6. Click "Deploy"
7. Access the URL provided after deployment completes

**Vercel Deployment Tips:**
- `vercel.json` file is included for automatic configuration
- Deploy via Vercel CLI: `npm i -g vercel` then run `vercel`
- Free tier: Perfect for personal projects

## Git Repository Setup

You need to set up a Git repository before deployment:

```bash
# Initialize Git
git init

# Add files
git add .

# First commit
git commit -m "Initial commit: Simple Language Switcher"

# Connect to GitHub repository (replace with your own repository URL)
git remote add origin https://github.com/your-username/your-repo.git

# Push
git branch -M main
git push -u origin main
```

## Project Structure

```
test_deploy_npm/
├── package.json          # npm configuration and dependencies
├── server.js            # Express server
├── .gitignore           # Git ignore file
├── vercel.json          # Vercel deployment configuration
├── README.md            # Korean documentation
├── README.en.md         # English documentation (this file)
├── public/              # Static files
│   └── style.css        # CSS styles
└── views/               # EJS templates
    └── index.ejs        # Main page
```

## Tech Stack

- **Backend:** Node.js + Express.js
- **Template Engine:** EJS
- **Styling:** CSS3
- **Deployment:** Railway, Vercel

## Learning Objectives

Through this project, you can learn:

1. Node.js web application structure
2. Express.js routing
3. Using EJS template engine
4. Serving static files
5. Environment variable (PORT) handling
6. Git version control
7. Railway deployment process
8. Vercel deployment process

## Troubleshooting

### Port Already in Use

To run on a different port:

```bash
PORT=8080 npm start
```

### npm install Errors

Check your Node.js version (14.0.0 or higher required):

```bash
node --version
```

## License

MIT License - Feel free to use, modify, and distribute!
