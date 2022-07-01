const {
  Card, User, Deck, Round,
} = require('./db/models');

async function seed() {
  await User.create({
    user: 'baga',
    mail: 'baga@mail.ru',
    password: '12345678',
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  await Deck.create({
    title: 'тема 1',
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  await Deck.create({
    title: 'тема 2',
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  await Card.create({
    deck_id: 1,
    question: 'тема 1 вопрос 1',
    answer: 'тема 1 ответ 1',
    point: 20,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  await Card.create({
    deck_id: 1,
    question: 'тема 1 вопрос 2',
    answer: 'тема 1 ответ 2',
    point: 20,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  await Card.create({
    deck_id: 1,
    question: 'тема 1 вопрос 3',
    answer: 'тема 1 ответ 3',
    point: 20,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  await Card.create({
    deck_id: 2,
    question: 'тема 2 вопрос 1',
    answer: 'тема 2 ответ 1',
    point: 20,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  await Card.create({
    deck_id: 2,
    question: 'тема 2 вопрос 2',
    answer: 'тема 2 ответ 2',
    point: 20,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  await Card.create({
    deck_id: 2,
    question: 'тема 2 вопрос 3',
    answer: 'тема 2 ответ 3',
    point: 20,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}

seed();
// console.log(123);
