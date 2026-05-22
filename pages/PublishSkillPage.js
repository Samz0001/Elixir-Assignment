class PublishSkillPage {
  constructor(page) {
    this.page = page;
    this.slugInput      = "input[placeholder='skill-name']";
    this.nameInput      = "input[placeholder='My skill']";
    this.versionInput   = "input[value='1.0.0']";
    this.tagsInput      = "input[value='latest']";
    this.chooseFolderBtn = 'text=Choose folder';
    this.licenseCheckbox = "input[type='checkbox']";
    this.changelogArea  = "textarea[placeholder*='Describe']";
    this.publishBtn     = "button:text('Publish skill')";
  }

  async goto(baseUrl) {
    await this.page.goto(`${baseUrl}/publish-skill`);
  }

  async fillSlug(slug) {
    await this.page.fill(this.slugInput, slug);
  }

  async fillDisplayName(name) {
    await this.page.fill(this.nameInput, name);
  }

  async fillVersion(version) {
    const input = this.page.locator("input[value='1.0.0']");
    await input.fill(version);
  }

  async fillTags(tags) {
    const input = this.page.locator("input[value='latest']");
    await input.fill(tags);
  }

  async uploadFolder(folderPath) {
    const [fileChooser] = await Promise.all([
      this.page.waitForEvent('filechooser'),
      this.page.click(this.chooseFolderBtn),
    ]);
    await fileChooser.setFiles(folderPath);
  }

  async acceptLicense() {
    const checkbox = this.page.locator(this.licenseCheckbox);
    if (!(await checkbox.isChecked())) {
      await checkbox.check();
    }
  }

  async fillChangelog(text) {
    await this.page.fill(this.changelogArea, text);
  }

  async submit() {
    await this.page.click(this.publishBtn);
  }

  async isValidationPassed() {
    return (await this.page.locator('text=All checks passed').isVisible());
  }

  async fillAndPublish(skill) {
    await this.fillSlug(skill.slug);
    await this.fillDisplayName(skill.display_name);
    await this.fillVersion(skill.version);
    await this.fillTags(skill.tags);
    await this.uploadFolder(skill.folder_path);
    await this.acceptLicense();
    await this.fillChangelog(skill.changelog);
    await this.submit();
  }
}

module.exports = { PublishSkillPage };
