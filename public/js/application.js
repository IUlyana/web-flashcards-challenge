// console.log(document.querySelector('.btn-primary'));
document.querySelector('.btn-primary').addEventListener('click', async (event) => {
  event.preventDefault();
  // const manAnswer = event.target.answer.value;
  let cardid = Number(event.target.getAttribute('cardid'));
  cardid += 1;
  const resNum = String(cardid);
  const idTheme = event.target.getAttribute('id');
  // console.log('NA NA SMOTRI----------', resNum);
  // if (manAnswer == otvet) {
  //   next();
  // } else {
  //   const res = await fetch('/question', {
  //     method: 'POST',
  //     body: JSON.stringify({ okAnswer }),
  //     headers: { 'Content-Type': 'application/json' },
  //   });
  // }
  // переход
  // })
  const res = await fetch(`/question/${idTheme}/${resNum}`, {
    method: 'POST',
    body: JSON.stringify({ idTheme, resNum }),
    headers: { 'Content-Type': 'application/json' },
  });
  // const cardHtml = await res.json();
  window.location.href = `/question/${idTheme}/${resNum}`;
  // event.target.closest('.formQuestion').querySelector('.questionChange').innerText = cardHtml.clearQuest
});
