/**
 * @param items - массив, с объектами ваших персонажей
 * @param shield - включена общая защита или нет
 */
export default function setUpAttacks(items, shield = true) {
  const result = [];
  // TODO: ваш код
  const itemss = items;
  for (let i = 0; i < itemss.length; i += 1) {
    result[i] = (attack) => {
      if (shield) {
        const amountHealthy = itemss.filter((item) => item.health > 0).length;
        const damageEvery = Math.floor(attack / amountHealthy);
        itemss[i].health -= damageEvery + (attack % amountHealthy);
        for (let j = 0; j < itemss.length; j += 1) {
          if (j !== i && itemss[j].health > 0) {
            itemss[j].health -= damageEvery;
          }
        }
      } else {
        itemss[i].health -= attack;
      }
    };
  }
  return result;
}

const characters = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

const attacks = setUpAttacks(characters);

attacks[1](9); // атакуем лучника 9 баллами урона

console.log(characters);
/*
[
  {name: 'маг', health: 97},
  {name: 'лучник', health: 77},
  {name: 'мечник', health: 7},
]
*/
