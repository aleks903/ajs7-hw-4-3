/**
 * @param items - массив, с объектами ваших персонажей
 * @param shield - включена общая защита или нет
 */
import setUpAttacks from './setUpAttacks.js';

const characters = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

const attacks = setUpAttacks(characters);

attacks[1](30); // атакуем лучника 9 баллами урона
console.log(characters);
/*
[
  {name: 'маг', health: 97},
  {name: 'лучник', health: 77},
  {name: 'мечник', health: 7},
]
*/
