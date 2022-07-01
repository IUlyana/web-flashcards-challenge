console.log(document.querySelector('.btn-primary'));
document.querySelector('.btn-primary').addEventListener('click', async (event) => {
  event.preventDefault();
  let okAnswer =  `Правильный ответ ${otvet}`
  const manAnswer = event.target.answer.value;
  if (manAnswer == otvet) {
    next()
  } else {
    const res = await fetch('/question', {
      method: 'POST',
      body: JSON.stringify({ okAnswer }),
      headers: { 'Content-Type': 'application/json' },
    });
  }
  // переход
})
