const vscode = require("vscode");
const axios = require("axios");

async function callAI(prompt) {
  try {
    const response = await axios.post("http://localhost:11434/api/generate", {
      model: "llama3",
      prompt: prompt,
      stream: false,
    });

    return response.data.response;
  } catch (error) {
    return `Error calling AI: ${error.message}`;
  }
}

function activate(context) {
  const reviewCommand = vscode.commands.registerCommand(
    "aiCodeReviewer.review",
    async function () {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;

      const selection = editor.selection;
      const selectedText = editor.document.getText(selection);

      if (!selectedText.trim()) {
        vscode.window.showWarningMessage("Please select some code first.");
        return;
      }

      const prompt = `🔍 Review this code and point out improvements, bugs, and suggestions:\n\n${selectedText}`;
      const result = await callAI(prompt);

      vscode.workspace.openTextDocument({
        content: result,
        language: "markdown",
      }).then(doc => vscode.window.showTextDocument(doc));
    }
  );

  const fixCommand = vscode.commands.registerCommand(
    "aiCodeReviewer.fix",
    async function () {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;

      const selection = editor.selection;
      const selectedText = editor.document.getText(selection);

      if (!selectedText.trim()) {
        vscode.window.showWarningMessage("Please select some code first.");
        return;
      }

      const prompt = `🔧 Fix any bugs and improve this code:\n\n${selectedText}`;
      const result = await callAI(prompt);

      vscode.workspace.openTextDocument({
        content: result,
        language: editor.document.languageId,
      }).then(doc => vscode.window.showTextDocument(doc));
    }
  );

  context.subscriptions.push(reviewCommand, fixCommand);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
