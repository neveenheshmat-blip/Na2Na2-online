# 📤 How to Push to GitHub

## Prerequisites
- GitHub account (github.com)
- Git installed on your computer

## Step 1: Initialize Git (One Time)
```bash
cd path/to/Na2Na2-Project
git init
git add .
git commit -m "Initial commit: Na2Na2 online ordering system"
```

## Step 2: Add Remote Repository
Replace YOUR_USERNAME and YOUR_REPO_NAME:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 3: Future Updates
After making changes:
```bash
git add .
git commit -m "Description of changes"
git push
```

## Quick Reference Commands
```bash
# Check status
git status

# Add specific file
git add filename.html

# Commit with message
git commit -m "Fixed bug in cart"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main

# View commit history
git log

# Create new branch
git checkout -b feature-name

# Switch branches
git checkout main
```

## Using GitHub Desktop (GUI Alternative)
1. Download GitHub Desktop from github.com/desktop
2. File → Clone Repository → Select your repo
3. Make changes to files
4. Click "Commit to main"
5. Click "Push origin"

## Deploy to Web (After Pushing to GitHub)

### Deploy with Vercel (Recommended)
1. Go to vercel.com
2. Click "New Project"
3. Select your GitHub repository
4. Click "Deploy"
5. Your site is live at provided URL

### Deploy with Netlify
1. Go to netlify.com
2. Drag and drop your project folder OR
3. Connect your GitHub account and select repository
4. Click "Deploy site"

### Deploy with GitHub Pages
1. Go to your GitHub repository settings
2. Scroll to "GitHub Pages"
3. Select main branch as source
4. Your site is live at username.github.io/repo-name

## File Structure for GitHub
```
Na2Na2-online/
├── index.html
├── style.css
├── script.js
├── README.md
├── .gitignore
└── GITHUB_PUSH_INSTRUCTIONS.md (this file)
```

## Troubleshooting

### "fatal: not a git repository"
```bash
git init
```

### "Permission denied" (SSH)
Use HTTPS instead of SSH:
```bash
git remote set-url origin https://github.com/USERNAME/REPO.git
```

### "Please tell me who you are"
```bash
git config --global user.email "your@email.com"
git config --global user.name "Your Name"
```

## Need Help?
- GitHub Docs: docs.github.com
- Git Cheat Sheet: github.com/joshnh/Git-Commands
- Vercel Docs: vercel.com/docs
- Netlify Docs: docs.netlify.com

Good luck! 🚀
