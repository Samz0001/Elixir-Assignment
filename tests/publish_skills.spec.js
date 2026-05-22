const { test, expect } = require('@playwright/test');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const { GitHubLoginPage } = require('../pages/GitHubLoginPage');
const { HomePage }        = require('../pages/HomePage');
const { PublishSkillPage } = require('../pages/PublishSkillPage');
const { readSkillsFromExcel } = require('../utils/excelReader');

const BASE_URL   = process.env.BASE_URL    || 'https://hub.elixirclaw.ai';
const GH_EMAIL   = process.env.GITHUB_EMAIL;
const GH_PASSWORD = process.env.GITHUB_PASSWORD;
const EXCEL_PATH = path.join(__dirname, '../data/publish_skills.xlsx');

test.describe('ElixirHub - Publish Skills (POM)', () => {

  test('Step 1: Login with GitHub', async ({ page }) => {
    const homePage    = new HomePage(page);
    const loginPage   = new GitHubLoginPage(page);

    await homePage.goto(BASE_URL);
    await homePage.clickSignInWithGitHub();
    await loginPage.login(GH_EMAIL, GH_PASSWORD);
    await loginPage.authorizeApp();

    await expect(page).toHaveURL(/hub\.elixirclaw\.ai/);
    await expect(page.locator('text=Publish Skill')).toBeVisible();
  });

  test('Step 2: Publish 3 skills from Excel', async ({ page }) => {
    const homePage        = new HomePage(page);
    const loginPage       = new GitHubLoginPage(page);
    const publishSkillPage = new PublishSkillPage(page);

    // Login
    await homePage.goto(BASE_URL);
    await homePage.clickSignInWithGitHub();
    await loginPage.login(GH_EMAIL, GH_PASSWORD);
    await loginPage.authorizeApp();

    // Read Excel data
    const skills = await readSkillsFromExcel(EXCEL_PATH);
    expect(skills.length).toBe(3);

    // Publish each skill
    for (const skill of skills) {
      await publishSkillPage.goto(BASE_URL);
      await publishSkillPage.fillAndPublish(skill);

      // Assert redirect to skill detail page
      await expect(page).toHaveURL(new RegExp(`/samz0001/${skill.slug}`), { timeout: 10000 });
      console.log(`✓ Published: ${skill.display_name} → ${page.url()}`);
    }
  });

});
