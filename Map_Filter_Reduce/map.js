
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let ans = numbers.map((item) => item ** 2)

console.log(ans);

let ans2 = numbers.map((i) => i*10)
                  .map((i) => i+1)
                  .filter((i) => i > 20);

console.log(ans2);
                 