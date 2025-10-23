// Exercice 1
var x = 5 
let y = 10 
const z = 15 

x = 6;  
y = 11;  
// z = 16; 
console.log("x:", x);// Fonctionne
console.log("y:", y);// Fonctionne
console.log("z:", z);//  Erreur car z est uen variable constante, leur valuer est non changable

// Exercice 2
function testScope() {
    if (true) {
        var a = "var visible partout";
        let b = "let visible ici seulement";
    }
    console.log("a:", a); // Fonctionne car var a une portée fonction
    // console.log("b:", b); // Erreur car let a une portée de bloc
}
testScope();

// Exercice 3
function sayHello(name) { 
return `Bonjour ${name}`; 
} 
// console.log(sayHelloArrow("Ali")); - Erreur
const sayHelloArrow = (name) => `Bonjour ${name}`; 

console.log(sayHello("Aya")); // Bonjour Aya
console.log(sayHelloArrow("Inas")); //Bonjour Inas


// Exercice 4
const person = { 
  name: "Sara", 
  sayHello: function () { 
    console.log("Bonjour " + this.name); 
  }, 
  sayHelloArrow: () => { 
    console.log("Bonjour " + this.name); // undefined car le this d'arrow function herite du parent 
  }, 
}; 

person.sayHello();  // Sara
// person.sayHelloArrow(); 

// Import / Export de modules (ES6)*
// impoter mathUtils.js dans index.js 
import message, { PI, carre } from "./mathUtils.js"; 
 
message(); //  Module mathUtils chargé ! 
console.log("PI =", PI); // PI = 3.14
console.log("Carré de 5 =", carre(5)); //Carré de 5 = 25

// Exercice 5
// Tableaux et méthodes modernes 
const fruits = ["pomme", "banane", "orange"]; 
fruits.push("kiwi"); // ['pomme', 'banane', 'orange', 'kiwi']; : ajoute Kiwi a la fin de la liste 
fruits.pop(); // supprime Kiwi de la liste
console.log(fruits); // affiche :  [ 'pomme', 'banane', 'orange' ]

// Exercice 6
const nums = [1, 2, 3, 4, 5]; 
// Multiplie chaque nombre par 2 
console.log(nums.map(n => n * 2)); // [ 2, 4, 6, 8, 10 ]
 
// Garde seulement les nombres pairs 
console.log(nums.filter(n => n % 2 === 0)); // [ 2, 4 ]
 
// Calcule la somme totale 
console.log(nums.reduce((sum, n) => sum + n, 0)); // 15

// Exercice 7
console.log(nums.find(n => n > 3));  // 4 : Retourne le 1er element qui respecte la condition
console.log(nums.some(n => n < 0));  // false
console.log(nums.every(n => n > 0)); // True

// Exercice 8
const user = { id: 1, name: "Ali", city: "Rabat" }; 
// Déstructuration 
const { name, city } = user; 
console.log(`${name} habite à ${city}`); //Ali habite à Rabat
// Renommage 
const { name: fullName, ...rest } = user; 
console.log(fullName); // Ali
console.log(rest);  // { id: 1, city: 'Rabat' }

// Exercice 9
const p = new Promise((resolve) => { 
  setTimeout(() => resolve("Opération terminée !"), 2000); 
}); 
 
p.then(result => console.log(result)); // affiche " Opération terminée ! " apres 2s


// Exercice 10
async function getUsers() { 
  try { 
    const res = await 
fetch("https://jsonplaceholder.typicode.com/users"); 
    const data = await res.json(); 
    console.log(data); 
  } catch (e) { 
    console.error("Erreur :", e.message); 
  } 
} 

 
getUsers(); // il affiche : {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//       street: 'Kulas Light',
//       suite: 'Apt. 556',
//       city: 'Gwenborough',
//       zipcode: '92998-3874',
//       geo: [Object]
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//       name: 'Romaguera-Crona',
//       catchPhrase: 'Multi-layered client-server neural-net',
//       bs: 'harness real-time e-markets'
//     }
//   },
//   {
//     id: 2, ... 
//   },..


// Exerccie 11
const name1 = "Nadia"; 
const hour = new Date().getHours(); 
console.log(`Bonjour ${name1}, il est ${hour}h`);  // Bonjour Nadia, il est 17h

// Exercice 12
const arr1 = [1, 2]; 
const arr2 = [...arr1, 3, 4]; 
console.log(arr2); // [ 1, 2, 3, 4 ]

function sum(...numbers) { 
return numbers.reduce((a, b) => a + b, 0); 
} 
console.log(sum(1, 2, 3, 4)); //10

// Exercie 13
const settings = { theme: null }; 
console.log(settings.theme ?? "light"); // light 
const user2 = { profile: { email: "x@y.com" } }; 
console.log(user2.profile?.email); // x@y.com 
console.log(user2.address?.city);  // undefined 


// Gestion des produits 
const produits = [ 
{ nom: "Lait", prix: 10, expireLe: "2025-12-01" }, 
{ nom: "Yaourt", prix: 5, expireLe: "2024-01-01" }, 
{ nom: "Jus", prix: 8, expireLe: "2026-02-15" }, 
]; 
const aujourdHui = new Date(); 
const valides = produits.filter(p => new Date(p.expireLe) > 
aujourdHui); 
const total = valides.reduce((s, p) => s + p.prix, 0); 
console.log("Produits valides :", valides); // affiche : Produits valides : [
//   { nom: 'Lait', prix: 10, expireLe: '2025-12-01' },
//   { nom: 'Jus', prix: 8, expireLe: '2026-02-15' }
// ]
console.log("Total :", total, "DH"); // Total : 18 DH

