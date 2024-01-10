function plPluralizationRules(choice: number, choicesLength: number) {
  if (choice === 1) {
    return 0; // singular
  }

  const isTeen = Math.floor(choice % 100 / 10) === 1;
  const endsIn2To4 = [2, 3, 4].includes(choice % 10);

  if (!isTeen && endsIn2To4) {
    return 1; // few
  }

  return choicesLength < 4 ? 2 : 3; // many
}

export default {
  pl: plPluralizationRules
};
