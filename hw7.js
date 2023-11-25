const currentYear = 2023;
const birthYear = prompt("enter your year of birth");
const resideTown = prompt("Where do you live?");
const favouriteSport = prompt("Whar is your favourite sport?");
const age = (currentYear-birthYear);
let finalMsg = "";

if (birthYear === null) {
    finalMsg += "It's a pity that you didn't want to enter your birth year";
} else {
    finalMsg += String(age)
}

switch (resideTown) {
    case 'Kyiv':
        finalMsg += "\nYou live in the capital of Ukraine";
        break;
    case 'London':
        finalMsg += "\nYou live in the capital of Great Britain";
        break;
    case 'Washington':
        finalMsg += "\nYou live in the capital of USA";
        break;
    case null:
        finalMsg += "\nIt's a pity that you did'nt want to enter your city";
        break;
    default:
        finalMsg += `\nYou live in ${resideTown}`;
}

switch (favouriteSport) {
    case 'Football':
        finalMsg += "\nDo you wanna be Ronaldo?";
        break;
    case 'Swimming':
        finalMsg += "\nDo you wana be Yana Klochkova?";
        break;
    case 'Tennis':
        finalMsg += "\nDo you wanna be Anna Kurnikova?";  
        break;
    case null:
        finalMsg += "\nIt's a pity that you didn't want to enter your favourite sport";
}

alert(finalMsg);