// 1.

// function number(a,b,c,d){
//     if(a>c+d){
//         console.log(a*c);
//     }else{
//         console.log(b*d);
//     }
// }
// number(3,5,7,9);

// 2.

// for(let i=1;i<=500;i++){
//     let multiple=2*i;
//     console.log(multiple);
// }

// 3.

// // let sum=0;
// // let multiple=1;
// // for(let i=1;i<=100;i++){
// //      multiple=9*i;
// //      sum+=multiple;
// //     console.log(multiple);
    

// // }

// // console.log('sum:',sum);

// 4.

// let p = 0;
// let N = prompt("N:");
// let i = 1;
// while (i * 3 <= Number(N)) {
//   p += 1 / (i * 3);
//   i++;
// }

// console.log(p);

// let s = 0;
// let N = Number(prompt("N:"));
// let X = Number(prompt("X:"));
// let k = 1;
// for (let i = 1; i <= N; i++) {
//   s += k;
//   k *= X;
// }

// console.log(s);
// l
// let sin = 0;

// let N = Number(prompt("N:"));
// let X = Number(prompt("X:"));
// let al = 1;
// for (let i = 1; i <= 2 * N - 1; i = i + 2) {
//   sin += (tavan(X, i) * al) / fact(i);
//   al = -al;
// }

// console.log(sin);

// function fact(x) {
//   let p = 1;

//   for (let i = 1; i <= x; i++) {
//     p *= i;
//   }
//   return p;
// }

// function tavan(x, y) {
//   let p = 1;

//   for (let i = 1; i <= y; i++) p = p * x;

//   return p;
// }

// let T = 0;
// let N = Number(prompt("N:"));

// for (let i = 2; i <= N; i++) {
//   T += i * (i - 1);
// }
// console.log(T);



// 5.

// function number(Rights){
//     if(Rights<50000){
//         console.log('tax free',Rights); 
//     }
//      else if(Rights>=50000&&Rights<100000){
//             let tax=Rights/100*10;
//             let salary=Rights-tax;
//             console.log('salary:',salary);
//             console.log('tax:',tax);
//     } else if(Rights>=100000){
//         let tax=Rights/100*15;
//         let salary=Rights-tax;
//         console.log('salary:',salary);
//         console.log('tax:',tax);
//     }
//     }
//     number(500000)


// 6.

    // function isDivisibleBySum(n) {
    //     let sum = 0;
    //     let num = n.toString();
      
    //     for (let i = 0; i < num.length; i++) {
    //       sum += Number(num.charAt(i));
    //     }
      
    //     if (n % sum === 0) {
    //       return "yes";
    //     } else {
    //       return "no";
    //     }
    //   }
    //   console.log(isDivisibleBySum(1234)); 
    //   console.log(isDivisibleBySum(12)); 

// 7.

// // function mazrab (m,n){
// //     for (let i =m; i <= n; i++){
// //         if( i%3===0){
// //             console.log(i);
// //         }
// //     }
// // }

// // mazrab(10,20);

// 8.

// // let n = Number(prompt("n:"));
// // function tavan(x, y) {
// //   let p = 1;

// //   for (let i = 1; i <= y; i++) p = p * x;

// //   return p;
// // }

// // let r;
// // let s = 0;
// // let k = 0;
// // while (n > 0) {
// //   r = n % 10;
// //   s += tavan(3, k) * r;
// //   k++;
// //   n = Math.floor(n / 10);
// // }
// // console.log(s);

// 9.

// function number() {
//     for (let i = 10; i <=99; i++){
//         const ten = Math.floor(i / 10);
//         const one = i % 10;
//         const newnum = (one* 10) + ten;

//         if(i === newnum){
//             console.log(i);
//         }
//     }
// }

// number();

// 10.

// function check_avval(x) {
//     if (x == 1) return 0;
  
//     for (let i = 2; i < x; i++) if (x % i == 0) return 0;
  
//     return 1;
//   }
  
//   function check_tam(x) {
//     let s = 0;
//     for (let i = 1; i < x; i++) if (x % i == 0) s += i;
  
//     if (s == x) return 1;
  
//     return 0;
//   }
  
//   for (let i = 3; i < 1000; i++) {
//     if (check_avval(i) || check_tam(i)) console.log(i);
//   }
  
// 11.

// function finddivisors(n) {
//     const divisors = [];
//     let sum = 0;

//     for (let i = 1; i <= n; i++){
//         if (n % i ===0 && i % 4 === 0) {
//             divisors.push(i);
//             sum += i;
//         }
//     }
//     console.log(divisors);
//     console.log(divisors.length);
//     console.log( sum);
// }
// console.log(finddivisors(40));

// 12.

// const randomNumber = Math.floor(Math.random()*1000);
// console.log(randomNumber);

// 13.

// let a=9;
// let b=2;
// a=a+b;
// b=a-b;
// a=a-b;
// console.log(b);

// 14.

// let name = prompt("نام:");
// let cash = Number(prompt("موجودی:"));
// let temp;
// let choose;

// while (1) {
//   choose = Number(prompt("1-واریز\n2-برداشت\n3-موجودی"));
//   if (choose == 3) break;

//   if (choose == 1) {
//     temp = Number(prompt("مقدار واریز:"));
//     cash += temp;
//   } else {
//     temp = Number(prompt("مقدار برداشت:"));
//     if (temp > cash) {
//       alert("مقدار برداشت بیشتر از موجودی است");
//       continue;
//     }

//     cash -= temp;
//   }
// }

// console.log("موجودی:", cash);

// 15.

// const people = [
//     {name: "Cna", diplomacode: "0", age: 23, stringcode:24, gender:"man"},
//     {name: "Mehrad", diplomacode: "1", age: 25, stringcode:24, gender:"woman"},
//     {name: "Hossein", diplomacode: "0", age: 28, stringcode:24, gender:"man"},
//     {name: "Ehsan", diplomacode: "2", age: 17, stringcode:24, gender:"woman"},
//     {name: "Pedram", diplomacode: "0", age: 30, stringcode:3, gender:"man"},
// ];

// let manstringcode24= 0;
// let ageunder18= 0;
// let percentstringcode24= 0;

// for (let i = 0;i < people.length; i++){
// const person = people[i];

// if (person.gender === "man" && person.stringcode === 24) {

//     manstringcode24++;

// }


// if (person.age < 18){
//     ageunder18++;
// }
// }

// percentstringcode24 = (manstringcode24 / people.length) * 100;

// console.log(manstringcode24);
// console.log(ageunder18);
// console.log(percentstringcode24);

// 16.

// let n = Number(prompt("تعداد فروشگاه:"));
// let id = [];
// let sale = [];
// let pay = [];
// let max = 0;
// let max_index = 0;

// let d;
// for (let i = 0; i < n; i++) {
//   id.push(Number(prompt("شماره فروشگاه:")));
//   sale.push(Number(prompt("مقدار فروش:")));

//   if (sale[i] <= 500000) d = 0.03;
//   else if (sale[i] < 700000) d = 0.05;

//   pay.push(sale[i] * d);
//   if (pay[i] > max) {
//     max = pay[i];
//     max_index = i;
//   }

//   console.log(id[i], sale[i], pay[i]);
// }

// console.log("بیشترین فروش:", id[max_index]);


// 17.

// function date(number) {
//     let month;
//     if(number <= 186) {
//         month = Math.ceil(number / 31);
//     } else{
//         month = Math.ceil((number - 6) / 30);
//     }

//     let day;
//     if (month <=6) {
//         day = number - (month - 1) * 31;
//     } else {
//         day = number - (month - 1) * 30 -6;
//     }
//     return `${month} / ${day}`
// }
// console.log(date(216));

// 19.

// let N = 22000

// function Calculate(N){
    
//     let zeroCount = 0;
//     let oddCount = 0;
//     let evenCount = 0;

//     if ( N === 0) {
//         zeroCount = 1;
//     }
//     else{
//         while(N > 0){
//             const digit = N % 10;

//             if(digit % 2 === 0){
//                 evenCount++;
//             } else{
//                 oddCount++;
//             }
//             if(digit === 0){
//                 zeroCount++;
//             }
//         }
//     }
//     return{
//         oddCount,
//         evenCount,
//         zeroCount
//     }
// }

// 20.

// function generate() {
//     const result = [];
    
//     for(let thousands =1; thousands <= 9; thousands += 2){
//         for (let hundreds = 0; hundreds <= 8; hundreds += 2){
//             for(let tens = 0; tens <= 9; tens++){
//                 for (let ones = 1; ones <= 9; ones += 2 ){
//                     const number = thousands * 1000 + hundreds * 100 + tens * 10 + ones;
//                     result.push(number);
//                 }
//             }
//         }
//     }
//     return result;
// }
// const numbers = generate();
// console.log(numbers);


// 21.

// for(let i=10;i<=99;i++){
//     let odd=i%10;
//     if(odd%2 !==0){
//         let odd1= Math.floor(i/10);
//         if(odd1%2!==0){
//             console.log(i);
//         }
//     }
// }


// 22.

// for(let i = 100; i <= 999; i++);{
//     let one = i % 10;
//     let ten = Math.floor((i / 10) % 10);
//     let hundred = Math.floor(i / 100);
//     if(one === hundred && ten % 2 === 0) {
//         console.log(i);
//     }
// }

// 24.

// const Money=50;
// let canter=0;
// for(let i=10;i>=0;i=2){
//     let remaining = Money - (5*i);
//     for(let j=5;j>=0;j--){
//         let remaining2 = remaining - (10*j);
//         if(remaining2 === 0){
//             canter += 1;
//         }
//         for(let f=3 ; f>=1;f--){
//             let remaining3 = remaining2 - (20*f);
//             if(remaining3===0){
//                 canter+=1
//             }
//         }
//     }
// }