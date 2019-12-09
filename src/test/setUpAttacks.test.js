import setUpAttacks from '../setUpAttacks.js';

test('Проверка атаки с щитом', () => {
  const characters = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const attacks = setUpAttacks(characters);

  const expected = [
    { name: 'маг', health: 97 },
    { name: 'лучник', health: 77 },
    { name: 'мечник', health: 7 },
  ];

  attacks[1](9);
  const received = characters;
  expect(received).toEqual(expected);
});

test('Проверка атаки без щита', () => {
  const characters = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const attacks = setUpAttacks(characters, false);

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 71 },
    { name: 'мечник', health: 10 },
  ];

  attacks[1](9);
  const received = characters;
  expect(received).toEqual(expected);
});

test('Проверка атаки c щитом у одного игрока жизнь 0', () => {
  const characters = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const attacks = setUpAttacks(characters, true);

  const expected = [
    { name: 'маг', health: 85 },
    { name: 'лучник', health: 65 },
    { name: 'мечник', health: 0 },
  ];

  attacks[1](30);
  attacks[1](10);

  const received = characters;
  expect(received).toEqual(expected);
});
