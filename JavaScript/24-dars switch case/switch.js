//let bugun = new Date().getDay();
//
//    let kun;
//
//    switch (bugun) {
//      case 0:
//        kun = "Yakshanba";
//        break;
//      case 1:
//        kun = "Dushanba";
//        break;
//      case 2:
//        kun = "Seshanba";
//        break;
//      case 3:
//        kun = "Chorshanba";
//        break;
//      case 4:
//        kun = "Payshanba";
//        break;
//      case 5:
//        kun = "Juma";
//        break;
//      case 6:
//        kun = "Shanba";
//        break;
//      default:
//        kun = "Noma'lum kun";
//    }
//
//    document.getElementById("natija").innerHTML =
//      `Bugun: <b>${kun}</b>`;

let month = 5;

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Qish");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Bahor");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Yoz");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Kuz");
        break;

    default:
        month = "Noto'g'ri oy raqami!";
}



