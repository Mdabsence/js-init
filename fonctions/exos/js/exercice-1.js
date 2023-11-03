function inverse (nombre) 
{
    // On transforme le nombre en string
    let numStr = nombre.toString();
    // On transforme la chaine en tableau de chiffres
    let numArr = numStr.split("")
    // On inverse le sens du tableau
    let reverseNumArr = numArr.reverse()
    // On retransforme le tableau inversé en cahine
    let reverseNumStr = reverseNumArr.join("")
    // On retransforme la chaine en nombre
    let reverseNum = Number(reverseNumStr)

    return reverseNum;

    //Version one line
    //return Number(n.toString().split("").reverse().join(""));
}
console.log(inverse(12345));