# Welcome to My Portfolio

Welcome to my portfolio! Here you can explore my projects, skills, and experience.

## Deployment Workflow

### Step 1: Make Changes
- Edit your React components, CSS, or any other files as needed
- Test locally with `npm start` to ensure everything works correctly

### Step 2: Commit Changes to Main Branch
*(Optional but recommended for version control)*

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

### Step 3: Deploy to GitHub Pages

```bash
npm run deploy
```

### Step 4: Wait 2-5 Minutes
- Check GitHub repo → Actions tab for deployment status
- Look for green checkmark/deployment indicator

### Step 5: Hard Refresh Your Live Site
- Visit: `https://yourusername.github.io/portfolio`
- Hard refresh: 
  - **Windows**: `Ctrl+Shift+R`
  - **Mac**: `Cmd+Shift+R`

## What Happens During Deployment

The `npm run deploy` command automatically:

1. **Builds your React app** (`npm run build`)
2. **Pushes the built files to `gh-pages` branch**
3. **Triggers GitHub Pages to update your live site**

## Pro Tips

- You can skip Step 2 if you're just experimenting, but it's good practice to keep your main branch updated
- Save this process somewhere - you'll use `npm run deploy` every single time! 🚀
- Always test locally before deploying to catch issues early
- If your site doesn't update immediately, wait a few minutes and try a hard refresh

---

**Live Site**: [https://jimmychen02.github.io/JimmyChen.github.io/#/](https://jimmychen02.github.io/JimmyChen.github.io/#/)

## Contact

For any inquiries or opportunities, please reach out to me at: **jc3673@cornell.edu**
