export default function setUpAttacks(items, shield = true) {
  // TODO: ваш код
  const itemCharacter = items;
  return itemCharacter.map((item, index) => {
    const itemAttak = (attackValue) => {
      if (shield) {
        const amountHealthy = itemCharacter.filter((itemm) => itemm.health > 0).length;
        const damageEvery = Math.floor(attackValue / amountHealthy);
        itemCharacter[index].health -= damageEvery + (attackValue % amountHealthy);
        for (let j = 0; j < itemCharacter.length; j += 1) {
          if (j !== index && itemCharacter[j].health > 0) {
            itemCharacter[j].health -= damageEvery;
          }
        }
      } else {
        itemCharacter[index].health -= attackValue;
      }
    };
    return itemAttak;
  });
}
