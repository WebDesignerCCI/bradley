// alert("Hello World");

// console.log("Bonjour");
// //variable type string:
// var foo = "ceci est une string";

// //variable type number:
// var doo = 10;

// //variable type boolean:
// var bool1 = true;
// var bool2 = false;

// //variable type undefined:
// var shoo;

// //variable type null:
// var variable = null;

// //variable type tableau(array)
// var tableau1 = ["red","orange","blue"];

// console.log(tableau1);

// //variable typeobject:
// var object = {
//     "Nom": "Monnier",
//     "Prénom": "Bradley",
//     "Âge": "23"
// }

// //variable de type fonction:
// var fonction = function() {
//     return('retour de string')
// }

// console.log(typeof bool1)


// var header = document.getElementsByTagName('header');
// var checkClass = document.getElementsByClassName('title')
// var machin = document.getElementById('skills');

// console.log(machin);

// var gouloum = document.createElement("div");
// document.body.appendChild(gouloum);
// gouloum.classList.add('foo','classe2');

// console.log(gouloum.classList);

var click = document.getElementsByClassName('arrow');

document.getElementById("arrow").onclick = function() {
    console.log('ça fonctionne');
    document.getElementById("burger").classList.toggle("click_event");
}
