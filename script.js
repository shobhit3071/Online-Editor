const codeEditor = document.getElementById('code-editor');
const outputFrame = document.getElementById('output-frame');

codeEditor.addEventListener('input', () => {
    const code = codeEditor.value;
    const encodedCode = encodeURIComponent(code);
    const outputUrl = `https://example.com/execute?code=${encodedCode}`;
    outputFrame.src = outputUrl;
});
