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

---

**Live Site**: [https://jimmychen02.github.io/JimmyChenPortfolio/](https://jimmychen02.github.io/JimmyChenPortfolio/)

## Contact

For any inquiries or opportunities, please reach out to me at: **jc3673@cornell.edu**
