// alert ('siema')
// console.log('cześć');

    // Metody do wykorzystania:
    // charAt()
    // includes()
    // replace()* podchwytliwe 🙂 
    // slice()
    // split()
    // toLowerCase()
    // toUpperCase()
// const text1 = 'powiększ mnie!'
// const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI'
// const text3 = '$#%#^ wytnij te dziwne znaki na początku!'
// const text4 = 'sprawdź, czy zawieram słowo "czy"'
// const check = 'czy'
// const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'

// const text6 = 'pies zamień każde słowo pies, na słowo kot pies'
// const text7 = 'podziel, ten, string, od, przecinków'
// const char = text7.split(' ');
// console.log(text1.toUpperCase());
// console.log(text2.toLowerCase());
// console.log(text3.slice(6));
// console.log(`słowo "${check}" ${text4.includes(check) ? 'jest' : 'nie jest'} w zdaniu: ${text4}`);
// console.log(text5.charAt(2));
// console.log(text6.replaceAll('pies', 'kot'));
// console.log(char);

// const num = 123.23432
// console.log(num.toFixed(3));
// const num2 = '123';
// console.log(parseInt(num2));
// const modulo = 10 % 6
// console.log(modulo);
// let x = 10;
// let y = 6;
// // x = x + y;
// // x += y;
// // x -= y;
// // x *= y;
// // x /= y;
// x %= y;
// console.log(x);

// console.log(10 == '10');
// console.log(10 === '10');
// console.log(10 != '10');
// console.log(10 !== '10');

// if(!(10 == 10)) {
//     console.log('ok')
// }
//     else {
//         console.log('dupa');
//     }

// const new1 = 'klementyna';
// const new2 = new1.toUpperCase();
// const new3 = new1.charAt(0).toUpperCase() + new1.slice(1);
// const new4 = 'Kocham Cię i zawsze tak Będzie';
// const new5 = 'takdf';
// const new6 = '238234.23423'
// const allNew6 = parseInt (new6);
// console.log(new1.length);
// console.log(new2);
// console.log(new3);
// console.log(new1.split(''));
// console.log(`Słowo "${new5}" ${new4.includes(new5) ? 'jest' : 'nie ma'} w zdaniu `);
// console.log(typeof allNew6);
// console.log(allNew6.toFixed(4));

// let a = 10;
// let b = 7;
// const c = '7';
// a += b;
// a -= b;
// a *= b;
// a /= b;
// a %= b;
// console.log(`a wynosi: ${a}`);
// console.log(b!=c);

// if (45 !== '45') {
//     console.log(true);
// } else {
//     console.log(false);
// }

// const pass = 'dsfdsljcfd';
// console.log(pass.length);
//     if (pass.length > 10 && pass.includes('!')) {
//         console.log('masz mega hasełko');
//         } else if (pass.length > 7 ){
//             console.log('masz spoko loko hasło');
//     } else{
//     console.log('hasełko jest słabe');
//     }

// const color = 'black';
//     if (color == 'black') {
//         if (10 < 0) {
//             console.log('true, true');
//         } else {
//             console.log('ookoko');
//         }

//     } else {
//         console.log('false');
//     }
//  const day = 'sobota';

// switch(day) {
//     case 'sobota':
//         console.log('imieniny kota');
//         break;
//     case 'wtorek':
//         console.log('pijemy');
//         break;
//     case 'niedziela':
//         console.log('kino');
//         break;
//     default:
//         console.log('nie ma takiego dnia');
// }
// const x = 5
// console.log(typeof x);
// const newx = x > 20 ? `${x} > 20` : `${x} < 20`;
// console.log(newx);

// const isLogIn = false;
// function logIn(){
// console.log('jestes w domu');
// }
// function logOut(){
//     console.log('jestes poza');
// }
// isLogIn ? logIn() : logOut();

// sprawdzanie pazystośći!!
// const x = 233;
// const check = (x % 2 == 0) ? 'jest ok' : 'jest zle';
// console.log(check);
// const x = 120;
// let text
// if(x>=100){
//     let = 'x >= 100';
//   }  else if(100>x && x>30){
//       let = 'x jest śreniakiem';
// } else {
//     let = 'x jest mały';
// }

// const colors = ['red', 'black', 'green', 'yellow', 'white'];

// for(i = 0; i < colors.length; i++){
//     console.log(colors[i]);
// }
// for(const color of colors) {
//     console.log(color);
// }
// const cities = ['lublin', 'poznan', 'wawa', 'kraków', 'mnichów'];
// for(i = 0; i < cities.length; i++){
//     console.log(`to miasto nazywa się ${cities[i]}`);
// }
// let i = 0;
// while(i <= 10) {
//     i+=2;
//     console.log(i);
// }

// const x = 20;
// let i = x;
// do {
//     i-=3
   
// } while(i > 0);
// console.log(i);

// const cities = 'ny lublin wawa kraków';
// const newCity = cities.split(' ');
// for(i = 0; i<newCity.length; i++){
//     console.log(newCity[i]);
// }

// let x = 0;
// while(x < 10){
//     x+=2;
//     console.log(x);
// }

// let x = 20;
// do{
//     x-=3;
// }while(x>0);
// console.log(x);

// const numbers = [5, 8, 10, 23, 48, 60];
// for(const number of numbers){
//     console.log(number / 5);
// }
// console.log('------------------');
// for(const number of numbers){
//     if(number % 2 === 0){
//         console.log(`%c${number} jest pażyste`, 'background-color: gold', 'color: pink');
//     } else {
//         console.log(`${number} jest niepażyste`);
//     }
// const drinks = ['wóda', 'piwo', 'wino'];
// const meals = ['ogórek', 'marchewka', 'jabłko'];
// const menu = [... drinks, ...meals];
// console.log(menu);

// const numbers = [0, 0, 1, 1, 2, 2, 2]
// const colors = ['red', 'green', 'blue', true, 123]
// const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

// const numbers2 = numbers.slice(0, 2);
// const numbers3 = numbers.slice(-3);
// const radomStuff = colors.splice(-2);
// const newCars = cars.splice(2, 4, 'test')
// console.log(numbers2);
// console.log(numbers3);
// console.log(radomStuff);
// console.log(cars);
// console.log(newCars);

// const numbers = [1, 2, 3, 4];
// const newNumbers = numbers.map(number => number *2);
// console.log(newNumbers);

// 
// const x = [1, 2, 3, 4, 1, 2, 3, 1];
// console.log(x);


// const x = [1, 2, 3, 4, 1, 2, 3, 1];
//  const newX = [...new Set(x)];
//  console.log(newX);

// const numbers = [1, 2, 3, 4]
// const food = ['pizza', 'hot dog', 'spagetti', 'burger'];
// const footNum = [...numbers, ...food];
// console.log(footNum);

// const letters = ['c', 'd'];
// letters.unshift('a', 'b');
// letters.push('e','f');
// console.log(letters);
// console.log(letters.includes('c'))

// const numbers = [1, 2, 3, 4];
// const food = ['pizza', 'ham', 'suber', 'doom'];
// const all = [...numbers, ...food]
// console.log(all);

// const numbers = [1, 5, 13, 26, 48];
// function more(x){
//     return x *5;
// }
// const numbers2 = numbers.map(more);
// // console.log(numbers2);
// // for( const number of numbers2){
// //     if(number % 2 === 0){
// //         console.log(`${number} jest pażysta`);
// //     } else{
// //         console.log(`${number} jest niepażysta`);
// //     }
// // };
// for(let i = 0; i < numbers2.length; i++){
//     if(numbers2[i] % 2 === 0){
//         console.log(`${numbers2[i]} jest pażysta`);
//     } else{
//         console.log(`${numbers2[i]} jest niepażysta`);
//     }
// }

// const colors = ['red '];
// colors.unshift('blue ');
// colors.push('green ');
// console.log(colors);
// // for(let i = 0; i < colors.length; i++){
// //     console.log(` my fav colors is: ${colors[i].charAt(0).toUpperCase() + colors[i].slice(1)}`);
// // }
// for(const color of colors){
//     console.log(`my fav color is: ${color.charAt(0).toUpperCase() + color.slice(1)}`);
// }

// const cars = 'Audi, Mercedes, BMW, Nissan, Dodge';
// console.log(cars);
// const newCars = cars.split(', ');
// console.log(newCars);
// console.log(newCars.length > 3 ? 'jest OK' : 'nie jest OK');
// if(newCars.includes('Audi')){
//     newCars.push('Maluch');
// } else{
//     newCars.pop();
// }
// console.log(newCars);
    
// const test = function(name, age){
//     console.log(`cześć mam na imię ${name} i mam ${age} lat`);
// }
// test('wolf', 50)
// const test = x => x * 2;
// console.log(test(5));
// const test2 = (x, y) => x > y ? console.log('wygramy') : console.log('przegramy');;
// test2(5,4);
// const test3 = [1, 2, 3, 4]
// const test4 = test3.forEach(num => console.log( num * 2));

let score;
const add = (x, y) => {
    score = x +y;
    console.log(`${x} + ${y} = ${score}`);
   score % 2 === 0 ? fun1() : fun2()
    }
const fun1 = () => console.log(`${score} jest pazyste`);
const fun2 = () => console.log(`${score} jest niepażyste`);
add(10,7)
