# Git & GitHub Training Repository

This repository is built to teach students practical Git and GitHub workflows:

- Creating and cloning repositories
- Branching and committing cleanly
- Pushing code and opening Pull Requests
- Reviewing, merging, and resolving conflicts

## Quick Start

```bash
# 1) Clone
git clone <YOUR_REPO_URL>

# 2) Enter project
cd <YOUR_PROJECT_FOLDER>

# 3) Check branch
git branch

# 4) Start working
git switch -c feature/<your-task-name>
```

## Deployment Guide

To publish your profile publicly for free, follow:

- [Netlify Deployment Guide](./NETLIFY_DEPLOYMENT.md)

## Student Setup (Must Update)

Replace all placeholders below before your first submission.

```txt
<YOUR_NAME>
<YOUR_EMAIL>
<YOUR_GITHUB_USERNAME>
<YOUR_REPO_URL>
<YOUR_PROJECT_FOLDER>
<your-task-name>
```

Run once on your machine:

```bash
git config --global user.name "<YOUR_NAME>"
git config --global user.email "<YOUR_EMAIL>"
```

## Student Profile (Must Update)

Fill this section when you fork/clone the repo.

- Name: `UPDATE_ME`
- Batch / Section: `UPDATE_ME`
- GitHub Username: `UPDATE_ME`
- Repository URL: `UPDATE_ME`
- Preferred Branch Prefix: `feature/UPDATE_ME`

## Core Git Commands

| Task | Command |
| --- | --- |
| Check status | `git status` |
| See commit history | `git log --oneline --graph --decorate -n 15` |
| Create new branch | `git switch -c feature/<name>` |
| Switch branch | `git switch <branch-name>` |
| Stage file(s) | `git add <file>` |
| Stage all changes | `git add .` |
| Commit | `git commit -m "type: short message"` |
| Pull latest changes | `git pull origin main` |
| Push branch | `git push -u origin feature/<name>` |
| Compare changes | `git diff` |
| Remove staged file | `git restore --staged <file>` |
| Discard local file changes | `git restore <file>` |

## Daily Workflow (Recommended)

```bash
# 1) Make sure main is current
git switch main
git pull origin main

# 2) Create a branch for your task
git switch -c feature/<your-task-name>

# 3) Work, then verify
git status

# 4) Stage + commit
git add .
git commit -m "feat: add <short-description>"

# 5) Push
git push -u origin feature/<your-task-name>
```

## Commit Message Guide

Use short, meaningful commits:

- `feat: add login form validation`
- `fix: handle null API response in dashboard`
- `docs: update README with branch workflow`
- `refactor: split user service into modules`

## GitHub Workflow (Branch -> PR -> Merge)

1. Push your feature branch.
2. Open a Pull Request against `main`.
3. Write a clear PR title and description:
   - What changed
   - Why it changed
   - How it was tested
4. Request review.
5. Resolve feedback.
6. Merge after approval.

## Pull Request Template (Copy/Paste)

```md
## Summary
- 

## Changes
- 

## Testing
- [ ] Ran locally
- [ ] No console errors
- [ ] Screenshots attached (if UI)

## Notes
- 
```

## Conflict Resolution Basics

```bash
# While on your feature branch
git fetch origin
git pull origin main
```

If conflicts appear:

1. Open conflicted files.
2. Keep the correct code.
3. Remove conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).
4. Stage and commit:

```bash
git add .
git commit -m "fix: resolve merge conflicts with main"
git push
```

## Undo Commands (Use Carefully)

```bash
# Undo last commit but keep changes
git reset --soft HEAD~1

# Unstage a file
git restore --staged <file>

# Revert a commit safely (shared branches)
git revert <commit-hash>
```

## GitHub Skills Students Should Practice

- Forking and cloning repositories
- Creating branches for each task
- Opening good Pull Requests
- Reviewing peers' Pull Requests
- Keeping `main` clean and deployable
- Writing useful commit messages

## Practice Tasks for Students

1. Create a new branch and add your name under `Student Profile`.
2. Make one docs commit and one code commit.
3. Push both commits and open a PR.
4. Review a classmate PR and leave one useful comment.
5. Merge PR after feedback is addressed.

## Instructor Notes (Optional)

You can use this repository for live demos of:

- `git init`, `git add`, `git commit`
- Branching strategy
- PR review process
- Merge conflict resolution

---

If you are a student, start by completing all `UPDATE_ME` sections first.
