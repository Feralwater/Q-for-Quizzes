// export function encryptAnswer(answer: number[]): number[] {
//   return answer.map((num: number) => num + Math.round(Math.sin(num) * 10) + 5);
// }

export function decryptAnswer(encryptedAnswer: number[]): number[] {
  return encryptedAnswer.map((num: number) => {
    for (let i = 0; i < 10; i++) {
      if (num - Math.round(Math.sin(i) * 10) - 5 === i) return i;
    }
    return num;
  });
}

const A_ASCII_CODE = 65;

export const encryptScore = (score: number):string => {
  const scoreString = score.toString();

  return scoreString
    .split('')
    .map((digit) => {
      const letterCode = parseInt(digit) + A_ASCII_CODE;
      return String.fromCharCode(letterCode);
    })
    .join('');
};

export const decryptScore = (encryptedScore: string | number):number => {
  if (typeof encryptedScore === 'number') return encryptedScore;
  const decryptedScore = encryptedScore
    .split('')
    .map((letter) => {
      const digit = letter.charCodeAt(0) - A_ASCII_CODE;
      return digit.toString();
    })
    .join('');

  return parseInt(decryptedScore, 10);
};