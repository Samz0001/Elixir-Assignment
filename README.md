# Elixir Assignment — ElixirHub Playwright Test Suite

Automated test suite for publishing skills on [hub.elixirclaw.ai](https://hub.elixirclaw.ai) using Playwright with a Page Object Model (POM) structure.

---

## Project Structure

```
├── pages/
│   ├── GitHubLoginPage.js    # GitHub OAuth login flow
│   ├── HomePage.js           # ElixirHub home page actions
│   └── PublishSkillPage.js   # Publish skill form actions
├── tests/
│   └── publish_skills.spec.js  # Test specs
├── utils/
│   └── excelReader.js        # Reads test data from Excel
├── data/
│   └── publish_skills.xlsx   # Test data (3 skill entries)
├── skills/
│   ├── text-summarizer/      # Skill folder with SKILL.md
│   ├── image-classifier/     # Skill folder with SKILL.md
│   └── code-reviewer/        # Skill folder with SKILL.md
├── playwright.config.js      # Playwright configuration
├── .env.example              # Sample environment variables
└── .gitignore
```

---

## Prerequisites

- [Node.js](https://nodejs.org) v18 or higher
- [Git](https://git-scm.com)
- A GitHub account with access to [hub.elixirclaw.ai](https://hub.elixirclaw.ai)

---

## Setup

**1. Clone the repository**
```bash
git clone https://github.com/<your-username>/Elixir-Assignment.git
cd Elixir-Assignment
```

**2. Install dependencies**
```bash
npm install
```

**3. Install Playwright browser**
```bash
npx playwright install chromium
```

**4. Configure environment variables**

Copy `.env.example` to `.env` and fill in your credentials:
```bash
cp .env.example .env
```

Edit `.env`:
```
BASE_URL=https://hub.elixirclaw.ai
GITHUB_EMAIL=your-github-email@example.com
GITHUB_PASSWORD=your-github-password
```

---

## Test Data

Test data is stored in `data/publish_skills.xlsx` with the following columns:

| Column | Description |
|---|---|
| Slug | Unique skill identifier (e.g. `text-summarizer`) |
| Display Name | Human-readable skill name |
| Version | Semantic version (e.g. `1.0.0`) |
| Tags | Comma-separated tags |
| Folder Path | Absolute path to the skill folder containing `SKILL.md` |
| Changelog | Description of changes for this version |

pu
```

---

## Running Tests

**Run all tests (headed by default):**
```bash
npx playwright test
```

**Run a specific test file:**
```bash
npx playwright test tests/publish_skills.spec.js
```

**Run a specific test by name:**
```bash
npx playwright test --grep "Login with GitHub"
```

**View HTML test report:**
```bash
npx playwright show-report
```

---

## Test Flow

```
1. Navigate to hub.elixirclaw.ai
2. Click "Sign in with GitHub"
3. Enter GitHub credentials from .env
4. Authorize the ElixirHub OAuth app
5. For each row in publish_skills.xlsx:
   a. Go to /publish-skill
   b. Fill Slug, Display Name, Version, Tags
   c. Upload skill folder (contains SKILL.md)
   d. Accept MIT-0 license
   e. Fill Changelog
   f. Click "Publish skill"
   g. Assert redirect to published skill page
```

---

## Configuration

All Playwright settings are in `playwright.config.js`:

| Setting | Value |
|---|---|
| Browser | Chromium |
| Headed | Always (headless: false) |
| Timeout | 60 seconds per test |
| Retries | 1 |
| Screenshots | On failure only |
| Video | Retained on failure |
