import { App, Modal, Setting } from "obsidian";

export class ScripRefModal extends Modal {
    scripRefrenceText: string;

  onSubmit: (scripRefrenceText: string) => void;

  constructor(
    app: App,
    defaultScripText: string,
    onSubmit: (scripRefrenceText: string) => void
  ) {
    super(app);
    this.scripRefrenceText = defaultScripText;
    this.onSubmit = onSubmit;
  }

  onOpen() {
    const { contentEl } = this;

    contentEl.createEl("h1", { text: "Insert Reference" });

    new Setting(contentEl).setName("Reference text").addText((text) =>
      text.setValue(this.scripRefrenceText).onChange((value) => {
        this.scripRefrenceText = value;
      })
    );



    new Setting(contentEl).addButton((btn) =>
      btn
        .setButtonText("Insert Reference")
        .setCta()
        .onClick(() => {
          this.close();
          this.onSubmit(this.scripRefrenceText);
        })
    );
  }

  onClose() {
    let { contentEl } = this;
    contentEl.empty();
  }
}