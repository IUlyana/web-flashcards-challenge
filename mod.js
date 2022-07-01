const {
  Card, User, Deck, Round,
} = require('./db/models');


"почему? потому!"
Почему собака лает? (Потому что говорить не умеет)
Почему львы едят сырое мясо? (Потому что варить не умеют)

Ответы в одно слово
Какой город летает? (Орёл)
Каких камней в море нет? (Сухих)
Какой болезнью на земле никто не болел?(Морской)

Такие себе вопросы
Сколько месяцев в году имеют 28 дней? (Все месяцы)
Под каким кустом сидит заяц в дождь? (Под мокрым)
По чему, когда ты хочешь есть, идёшь на кухню? (По полу)


async function seed() {
  await Deck.create({
    title: 'почему? потому!',
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  await Deck.create({
    title: 'Ответы в одно слово',
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  await Deck.create({
    title: 'Так себе вопросы',
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  await Card.create({
    deck_id: 1,
    question: 'Почему собака лает?',
    answer: 'Потому что не умеет говорить',
    point: 20,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  await Card.create({
    deck_id: 1,
    question: 'Почему львы едят сырое мясо?',
    answer: 'Потому что не умеют варить',
    point: 20,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  await Card.create({
    deck_id: 2,
    question: 'Летающий город? ',
    answer: 'Орёл',
    point: 20,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  await Card.create({
    deck_id: 2,
    question: 'Каких камней в море нет?',
    answer: 'Сухих',
    point: 20,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  await Card.create({
    deck_id: 2,
    question: 'Какой болезнью на земле никто не болел?',
    answer: 'Морской',
    point: 20,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  await Card.create({
    deck_id: 3,
    question: 'Сколько месяцев в году имеют 28 дней?',
    answer: 'Все месяцы',
    point: 20,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  await Card.create({
    deck_id: 3,
    question: 'Под каким кустом сидит заяц в дождь?',
    answer: 'Под мокрым',
    point: 20,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  await Card.create({
    deck_id: 3,
    question: 'По чему, когда ты хочешь есть, идёшь на кухню?',
    answer: 'По полу',
    point: 20,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}

seed();