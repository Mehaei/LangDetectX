document.getElementById('detectBtn').addEventListener('click', () => {
  const text = document.getElementById('inputText').value;
  const result = LangDetectX.detect(text);
  document.getElementById('result').innerText = `检测结果: ${result}`;
});
