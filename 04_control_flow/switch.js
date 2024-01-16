//switch (key) {
//    case value:
        
//        break;

//    default:
//        break;
//}

const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        //break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

//if break is not there it will execute all code after the code where
//the condition is matched except default


const mon = "march"

switch (mon) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("Feb");
        break;
    case "march":
        console.log("March");
        break;
    case "apr":
        console.log("april");
        break;

    default:
        console.log("no match");
        break;
}

//strings can also be matched and is case sensitive.