function calculateHIndex() {
  const papers = parseInt(document.getElementById('papers').value);
  const citations = document.getElementById('citations').value.split(',').map(Number);

  citations.sort((a, b) => b - a);

  let h = 0;
  for (let i = 0; i < papers; i++) {
    if (citations[i] >= i + 1) {
      h = i + 1;
    } else {
      break;
    }
  }

  document.getElementById('result').textContent = `The h-index is: ${h}`;
}