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