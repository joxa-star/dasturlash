//return
// function addNumber(a, b, c) {
//     return a * a + b * b + c * c;
// }

// function calculating(a, b, c, d) {
//     let result = addNumber(a, b, c);
//     console.log(result * d);
// }

// calculating(2, 3, 4, 5); 

//! masala-1
let password = prompt("Parolni kiriting")
function checkPasswordStrength(password) {
    if (password.length < 8) {
        return "weak";
    } else if (password.length <= 12) {
        return "medium";
    } else {
        return "strong";
    }
}

console.log(checkPasswordStrength(password)); 

