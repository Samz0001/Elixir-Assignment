class HomePage {
  constructor(page) {
    this.page = page;
    this.signInGitHubBtn = 'text=Sign in with GitHub';
    this.publishSkillBtn = 'text=Publish Skill';
    this.userAvatar      = '[class*="avatar"], text=@Samz';
  }

  async goto(baseUrl) {
    await this.page.goto(baseUrl);
  }

  async clickSignInWithGitHub() {
    await this.page.click(this.signInGitHubBtn);
  }

  async clickPublishSkill() {
    await this.page.click(this.publishSkillBtn);
  }

  async isLoggedIn() {
    return this.page.url().includes('hub.elixirclaw.ai') &&
      !(await this.page.locator(this.signInGitHubBtn).isVisible().catch(() => false));
  }
}

module.exports = { HomePage };
