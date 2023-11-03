console.log("Script variable-2 chargé !")

//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array

//Utiliser console.log() pour afficher vos résultats

//Concaténer les tableaux suivants
//Résultat attendu : ['Mathieu', 'Eric', 'Jean', 'Sophie', 'Giselle', 'Monique']
const array1 = ['Mathieu', 'Eric', 'Jean'];
const array2 = ['Sophie', 'Giselle', 'Monique'];
console.log(array1.concat(array2))

//Remplacement de valeurs
const array3 = ['Max', 'Bob', 'Will', 'Joe'];
// Remplacer par tous les élements par 'Absent'
// Résultat attendu : ['absent', 'absent', 'absent', 'absent']
const array3First = [...array3]
console.log(array3First.fill("absent"));

// Remplacer tous les éléments sauf le 1er élément par 'Inconnu'
// Résultat attendu : ['Max', 'Inconnu', 'Inconnu', 'Inconnu']
const array3Second = [...array3]
console.log(array3Second.fill("Inconnu", 1))

// Remplacer les 2 ème et 3 ème  derniers éléments par 'secret'
// Résultat attendu : ['Max', 'secret', 'secret', 'Joe']
const array3Third = [...array3]
console.log(array3Third.fill("secret", 1, 3))

//Verifier si le tableau contient la valeur 'chat' et si il contient la valeur 'lion'
// Résultat attendu : true false
const array4 = ['chat', 'chien', 'hamster'];
console.log(array4.includes("chat"))
console.log(array4.includes("lion"))

//Afficher l'indice des élements 'Aston Martin' et 'Audi
// Résultat attendu :
// Aston Martin : 4
// Audi : 2
const array5 = ['Mazda', 'Mercedes', 'Audi', 'Ford', 'Aston Martin'];
console.log(array5.indexOf("Aston Martin"))
console.log(array5.indexOf("Audi"))

//Transformer le tableau en chaine
// Résultat attendu 1 : 'User1User2User3User4'
// Résultat attendu 2 : 'User1-User2-User3-User4'
const array6 = ['User1', 'User2', 'User3','User4'];
console.log(array6.join(""))
console.log(array6.join("-"))

// Ajouter un element 'Canard'
// Résultat attendu : ['Cochon', 'Chèvre', 'Mouton', 'Canard']
const array7 = ['Cochon', 'Chèvre', 'Mouton'];
console.log(array7.push("Canard"))

// Inverser l'ordre
// Résultat attendu : ['Pc', 'Switch', 'Xbox', 'Playstation']
const array8 = ['Playstation', 'Xbox', 'Switch','Pc'];
console.log(array8.reverse())

// Trier dans l'ordre alphabétique , croissant
// Résultat attendu : Array ["Alfred", "Bill", "Joe", "Robert"]
const array9 = ['Joe','Alfred', 'Robert', 'Bill'];
console.log(array9.sort())