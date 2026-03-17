# Deploy Frontend on Netlify (Free) - Student Guide

This guide shows how to publish your profile website for free using Netlify.

## Before You Start

- You need a GitHub account.
- Your project code must be pushed to a GitHub repository.
- This project uses Vite, so production output is generated in `dist/`.

## Step 1: Push Your Latest Code to GitHub

Run these commands in your project:

```bash
git status
git add .
git commit -m "chore: prepare profile for deployment"
git push origin main
```

If your default branch is not `main`, push your actual default branch.

## Step 2: Create a Netlify Account

1. Open https://app.netlify.com
2. Click `Sign up`.
3. Choose `GitHub` (recommended).
4. Authorize Netlify to access your repositories.

## Step 3: Create a New Site from GitHub

1. In Netlify dashboard, click `Add new site` -> `Import an existing project`.
2. Select `GitHub`.
3. Pick your repository.

## Step 4: Configure Build Settings (Important)

Use these exact settings:

- `Build command`: `npm run build`
- `Publish directory`: `dist`
- `Base directory`: leave empty

Optional but helpful:

- `Node version` (Environment variable): `NODE_VERSION = 20`

Then click `Deploy site`.

## Step 5: Wait for First Deploy

Netlify will:

1. Install dependencies
2. Build the app
3. Publish your site

When complete, you will get a live URL like:

`https://amazing-name-123456.netlify.app`

## Step 6: Change to a Clean Site Name

1. Go to `Site configuration` -> `Site details`.
2. Click `Change site name`.
3. Use a readable name, for example:
   - `yourname-profile`
   - `yourname-portfolio`

Your URL becomes:

`https://yourname-profile.netlify.app`

## Step 7: Share Your Public Profile

Add your live URL to:

- GitHub repo description
- Resume
- LinkedIn profile
- Class submission form

## Auto Deploy (Already Included)

After setup, every new push to your selected branch (usually `main`) triggers an automatic redeploy.

```bash
git add .
git commit -m "feat: update profile content"
git push origin main
```

## Common Errors and Fixes

### Error: `vite: command not found`

Cause: dependencies not installed during build.

Fix:

- Confirm `Build command` is `npm run build`
- Confirm `package.json` has `"build": "vite build"`

### Error: `Page not found` on refresh

Cause: usually happens with SPA routing configuration.

Fix for this project:

- If this appears later with custom routes, add a redirect rule in `netlify.toml`.
- For the current single-page setup, default deployment is usually fine.

### Error: Build fails due Node version

Fix:

1. Go to `Site configuration` -> `Environment variables`.
2. Add: `NODE_VERSION` = `20`.
3. Trigger redeploy.

## Student Checklist (Must Complete)

- [ ] Repository pushed to GitHub
- [ ] Netlify project connected to GitHub
- [ ] Build command set to `npm run build`
- [ ] Publish directory set to `dist`
- [ ] Site name customized
- [ ] Live URL shared publicly

---

If you are stuck, take a screenshot of your Netlify deploy log and ask your instructor with the exact error text.
