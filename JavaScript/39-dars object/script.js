let query = prompt("Nima bo'yicha qidirasz");

const user = {
    name: "Jahongir",
    surname: "Omonboyev",
    age: 15,
    address: "Chakir Mahallasi",
    phone: "+998-97-416-11-90",
    school: 27,
    grade: "8B",
    password: "*****"
};



if (user[query] == undefined) {
    alert(`Bunday kalit mavjud emas: ${query}`)

}
