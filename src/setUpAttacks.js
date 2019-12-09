export default function setUpAttacks(items, shield = true) {
  // TODO: ваш код
  const itemss = items;
  return itemss.map((item, index) => {
    const attak = (attack) => {
      if (shield) {
        const amountHealthy = itemss.filter((itemm) => itemm.health > 0).length;
        const damageEvery = Math.floor(attack / amountHealthy);
        itemss[index].health -= damageEvery + (attack % amountHealthy);
        for (let j = 0; j < itemss.length; j += 1) {
          if (j !== index && itemss[j].health > 0) {
            itemss[j].health -= damageEvery;
          }
        }
      } else {
        itemss[index].health -= attack;
      }
    };
    return attak;
  });
}
