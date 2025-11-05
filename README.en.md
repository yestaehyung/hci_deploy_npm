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

Before deploying, you need to upload your code to GitHub first.

### Prerequisites: Create GitHub Repository and Upload Code

#### Step 1: Create a GitHub Repository

1. Log in to [GitHub](https://github.com/)
2. Click the `+` button in the top right → Select `New repository`
3. Fill in repository information:
   - **Repository name**: `simple-language-switcher` (or any name you prefer)
   - **Description**: "Simple bilingual web app for deployment learning"
   - **Select Public** (Private is also possible, but Public is recommended)
   - **❌ DO NOT check "Initialize this repository with a README"** (since you already have files locally)
4. Click `Create repository` button

#### Step 2: Upload Local Project to GitHub

```bash
# 1. Initialize Git (if you haven't already)
git init

# 2. Add all files
git add .

# 3. Create first commit
git commit -m "Initial commit: Simple Language Switcher"

# 4. Connect to GitHub repository (replace with your own repository URL!)
git remote add origin https://github.com/your-username/simple-language-switcher.git

# 5. Set default branch name to main
git branch -M main

# 6. Push to GitHub
git push -u origin main
```

**How to find your GitHub repository URL:**
- On your GitHub repository page, click the green `Code` button
- Copy the URL from the HTTPS tab (e.g., `https://github.com/your-username/simple-language-switcher.git`)

#### Step 3: Verify Upload

Refresh your GitHub repository page to see all files uploaded.

---

### Deploy to Railway (Detailed Guide)

Railway is a Git-based automatic deployment platform. It automatically deploys when connected to a GitHub repository.

#### Step 1: Create Railway Account

1. Go to [Railway](https://railway.app/)
2. Click `Login` in the top right
3. Select `Login with GitHub` (log in with your GitHub account)
4. Railway requests GitHub access permissions → Click `Authorize Railway`

#### Step 2: Create New Project

1. Click `New Project` button on Railway dashboard
2. Select `Deploy from GitHub repo`
3. **If first time using:** Click `Configure GitHub App`
   - Select repositories that Railway can access on GitHub
   - Choose `All repositories` or `Only select repositories`
   - Select the `simple-language-switcher` repository
   - Click `Save`

#### Step 3: Select Repository and Deploy

1. Select `simple-language-switcher` from the repository list
2. Railway automatically detects the project and starts deployment
3. You can view deployment logs:
   - `npm ci` - Installing packages
   - `npm start` - Starting server
   - ✅ indicator when deployment succeeds

#### Step 4: Generate Domain and Access

1. Click the deployed service card
2. Go to `Settings` tab
3. In **Public Networking** section:
   - Click `Generate Domain` button
   - Automatically generates domain in `xxx.up.railway.app` format
4. Click the generated domain to check your website!

#### Step 5: Verify Deployment

- Access the Railway domain in your browser
- Check if the language switch button works well
- Test that both English/Korean pages work properly

**Railway Auto-Redeploy:**
- Automatically redeploys when you push new commits to GitHub
- `git push` → Railway auto-detects → Auto-build and deploy

**Railway Deployment Tips:**
- Railway automatically runs the `start` script from `package.json`
- PORT environment variable is automatically set by Railway
- Free tier: $5 credits per month (Hobby Plan)
- Deployment logs available in `Deployments` tab

---

### Deploy to Vercel (Detailed Guide)

Vercel is a deployment platform optimized for frontend and serverless functions.

#### Step 1: Create Vercel Account

1. Go to [Vercel](https://vercel.com/)
2. Click `Sign Up` in the top right
3. Select `Continue with GitHub` (log in with your GitHub account)
4. Vercel requests GitHub access permissions → Click `Authorize Vercel`

#### Step 2: Create New Project

1. Click `Add New...` → `Project` on Vercel dashboard
2. In `Import Git Repository` section:
   - **If first time using:** Click `Add GitHub Account`
   - Select repositories that Vercel can access on GitHub
   - Select the `simple-language-switcher` repository
3. Click `Import` button

#### Step 3: Configure Project

1. On **Configure Project** page:
   - **Project Name**: `simple-language-switcher` (auto-filled)
   - **Framework Preset**: `Other` (auto-selected)
   - **Root Directory**: `./` (keep default)
   - **Build and Output Settings**:
     - Build Command: Leave empty (or `npm install`)
     - Output Directory: Leave empty
   - **Environment Variables**: Not needed (PORT is auto-set by Vercel)
2. Click `Deploy` button

#### Step 4: Deployment Progress

1. Vercel automatically starts build and deployment
2. View deployment logs:
   - Cloning repository
   - Installing dependencies
   - Running build
   - Deploying
3. Success screen displays when deployment completes 🎉

#### Step 5: Check Deployed Site

1. After deployment completes, auto-generated URL is displayed:
   - `https://simple-language-switcher.vercel.app` (or similar format)
2. Click `Visit` button to check the website
3. Test language switching feature

#### Step 6: Domain Management (Optional)

1. Click `Settings` tab on project dashboard
2. In `Domains` section:
   - Default domain: `xxx.vercel.app`
   - Can add custom domain

**Vercel Auto-Redeploy:**
- Automatically redeploys when you push new commits to GitHub
- Push to `main` branch → Production deployment
- Push to other branches → Preview deployment (for testing)

**Vercel Deployment Tips:**
- `vercel.json` file is included for automatic configuration
- Deploy via Vercel CLI: `npm i -g vercel` then run `vercel` command
- Free tier (Hobby): Perfect for personal projects
- Build logs available in `Deployments` tab
- Each commit generates a unique Preview URL

---

### Deployment Platform Comparison

| Feature | Railway | Vercel |
|---------|---------|--------|
| **Best For** | Backend, full-stack apps with databases | Frontend, serverless functions |
| **Free Tier** | $5 credits per month | Hobby Plan (unlimited deployments) |
| **Deployment Speed** | Medium | Very fast |
| **Domain** | `xxx.up.railway.app` | `xxx.vercel.app` |
| **Setup Difficulty** | Easy | Very easy |
| **Database Support** | Built-in (PostgreSQL, Redis, etc.) | External connection required |
| **Long-running Processes** | Supported (WebSocket, etc.) | Limited (serverless) |

**Recommendations:**
- **Simple web apps, learning**: Both Railway and Vercel are great
- **Need database**: Railway recommended
- **Static sites, Next.js**: Vercel recommended
- **Try deploying to both for practice!**

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
