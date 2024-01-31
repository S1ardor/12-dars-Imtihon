// * * * 1-Masala * * * // Arraydagi eng katta sonni topish kerak for loop bilan

// function maximumNumber(){
//     const numbers = [23, 45, 67, 89, 34, 56, 33, 151, 78, 20];
//     let maxNumber = 0;

//     for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] > maxNumber) {
//         maxNumber = numbers[i];
//       }
//     }
//     console.log("maximum son: " + maxNumber);
// }
// maximumNumber();

// * * * 2-Masala * * * // Arraydagi eng uzun so'zni topib uning oxirgisidan bitta oldingi harfini topish

// function longWord(){
//     const fruites = ["Olma", "Nok", "Anor", "Chegara"];
//     let longestWord = "";
//     let lastChar = "";

//     for (let i = 0; i < fruites.length; i++) {
//       const currentWord = fruites[i];
//       if (currentWord.length > longestWord.length) {
//         longestWord = currentWord;
//         if (longestWord.length > 0) {
//           lastChar = longestWord[longestWord.length - 2];
//         }
//       }
//     }

//     console.log("Eng uzun so'z: " + longestWord);
//     console.log("Uning oxiridan bitta oldingi harfi harfi: " + lastChar);
// }
// longWord();

// * * * 3-Masala * * * // Arraydagi barcha stringning lengthini topish

// const fruites = ["olma","ananas", "anor", "Nok"];

// function fruitesToLength() {
//   for (const fruite of fruites) {
//     if (fruite.length > 0) {
//       console.log(fruite.length);
//     }
//   }
// }
// fruitesToLength();

// * * * 4-Masala * * * // Arrayda kamida 6 ta toq va juft son bor, va shundan juft sonlarning yarmini ya'ni 18 juft soni bo'lsa uning yarmi 9 sonini bir arrayga solib qaytarib bersin ya'ni hamma juftlarning yarmini bitta arrayga joylash kerak

// function eventNumberAndHalf(){
//     const numbers = [23, 58, 96, 31, 74, 44, 152, 531, 26];
//     for (const number of numbers) {
//       let evenNumber = number;
//       if (evenNumber % 2 == 0) {
//         const res = evenNumber / 2;
//         console.log("juft son: " + evenNumber);
//         console.log("yarmi: " + res);
//       }
//     }
// }
// eventNumberAndHalf();

// * * * 5-Masala * * * // Arraydagi katta harf bilan boshlangan so'zlarning birinchi harfini kichik qolgan harfini katta qilib, kichik harf bilan boshlanganlarini birinchi harfini katta qolganlarini kichkina qib bersin

// function fruitesUppToLow(){
//     const fruites = ["olma", "o'rik", "Nok", "avacado", "Salom"];

//     for (const fruite of fruites) {
//       let fruiteUppLow = "";
//       if (fruite[0] === fruite[0].toUpperCase()) {
//         fruiteUppLow +=
//           fruite[0].toLowerCase() +
//           fruite.slice(1, fruite[fruite.length]).toUpperCase();
//         console.log(fruiteUppLow);
//       } else if (fruite === fruite.toLowerCase()) {
//         fruiteUppLow +=
//           fruite[0].toUpperCase() +
//           fruite.slice(1, fruite.length).toLowerCase();
//         console.log(fruiteUppLow);
//       } else {
//         console.log("xato!!!");
//       }
//     }
// }
// fruitesUppToLow();

// * * * 6-Masala * * * // Promptdan bir so'z kiritish kerak va shu so'zni 3 marta space bilan chiqarib berish kerak for loop da

// function wordSpace(){
//     const word = prompt("so'z kiriiting");
//     for (let i = 0; i < 3; i++) {
//       if (word) {
//         console.log(word);
//       } else {
//         console.log("xato!!!");
//       }
//     }
// }
// wordSpace();

// * * * 7-Masala * * * // Ichma ich array bor va shu arrayning juft arraylarning birinchi elementining birinchi harflarini birlashtirib qaytarib bersin

// const fruitesArray = [["Olma"],["Bexi"],["Anor"],["Xurmo"],["GIlos"],["Kiwi"],["Banan"],];
// let result = "";

// function fruitesArr(array){
//     let result = ''
//     for (let i = 0; i < array.length; i ++) {
//         if((i+1) % 2 == 0 && i > 0){
//             result += array[i][0][0]
//         }
//     }
//     return result
// }
// let natija = fruitesArr(fruitesArray);
// console.log(natija);