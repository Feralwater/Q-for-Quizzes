export const plPluralizationRules = (choice: number) => {
  const teen = choice % 100 >= 10 && choice % 100 < 20;
  const endsWithOne = choice % 10 === 1;
  const endsWithTwoToFour = choice % 10 >= 2 && choice % 10 <= 4;

  if (!teen && endsWithOne) {
    return 0; // For numbers ending in 1 but not in the teens (e.g., 21, 31, 101), use the singular form
  }

  if (!teen && endsWithTwoToFour) {
    return 1; // For numbers ending in 2, 3, 4 but not in the teens (e.g., 22, 23, 24), use the second plural form
  }

  return 2; // In all other cases, use the third plural form
};