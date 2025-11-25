// function decloration 

// function sayHello(name, age = 15, surname = "Omonboyev") {
//     console.log(`Salom mening ismim ${name} familiyam ${surname}, yoshim ${age} da.`);

// }
// sayHello("Jahongir")

//! masala-1
//random sonlarni yig'indisini chiqaruvchi funksiya yozing
// function addTwoNumber(a, b) {
//     console.log( a + b );

// }

// addTwoNumber(1,5555)

//! masala-2
//random sonlarni kattasini ekranga chiqaruvchi funksiya yozing 
function findBigNumber(a, b) {

    if (a > b) {
        console.log(a + " katta");

    } else if (a < b) {
        console.log(b + " katta");
    }
}

findBigNumber(80 ,60)