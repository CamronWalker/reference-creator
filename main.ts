import { Editor, Plugin } from 'obsidian';
import { ReferenceCreator } from 'src/reference-creator'
import { ScripRefModal } from 'src/ref-modal'


export default class ScriptReferenceCreator extends Plugin {
	async onload() {
		let refFunc = new ReferenceCreator
		//await this.loadSettings();

		this.addCommand({
			id: 'open-reference-modal',
			name: 'Create New Scripture Reference',
			editorCallback: (editor: Editor) => {
				const selectedText = editor.getSelection();

				const onSubmit = (scripRefrenceText: string) => {

					var splitColon = scripRefrenceText.split(":")
					var bookName = splitColon[0].substring(0, splitColon[0].lastIndexOf(" ") + 1).trim();
					var splitDash = splitColon[1].split("-")
					var chapterNum = splitColon[0].substring(splitColon[0].lastIndexOf(" ") + 1, splitColon[0].length);
					var startVerseNum = splitDash[0]
					let lastVerseNum: number | undefined
					if (splitDash[1]) lastVerseNum = Number(splitDash[1])

					const referenceOutput = refFunc.parseReference(bookName, Number(chapterNum), Number(startVerseNum), lastVerseNum)

					//editor.replaceSelection(referenceOutput)
					editor.replaceSelection(`${referenceOutput}`)
				}

				new ScripRefModal(this.app, selectedText, onSubmit).open();
			},
		});
	  }


}
