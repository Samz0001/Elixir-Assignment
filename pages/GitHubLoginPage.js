class GitHubLoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput    = '#login_field';
    this.passwordInput = '#password';
    this.signInBtn     = '.js-sign-in-button';
    this.authorizeBtn  = '.js-oauth-authorize-btn';
  }

  async login(email, password) {
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.signInBtn);
  }

  async authorizeApp() {
    if (this.page.url().includes('/login/oauth/authorize')) {
      await this.page.click(this.authorizeBtn);
    }
  }
}

module.exports = { GitHubLoginPage };
