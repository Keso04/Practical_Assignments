//Task N1
function returnNewString(string, valueToReplace, valueToReplaceWith){
    if(!(string.includes(valueToReplace)))
       return "String does not contain this text. Please Try Again...";
    
    let findIndex = string.indexOf(valueToReplace);
    let wordEnd = findIndex + valueToReplace.length;

    string = string.substring(0, findIndex) + valueToReplaceWith + string.substring(wordEnd);

    return string;
}

//Task N2
function changeToUpperCase(string){
    stringArr = string.split(" ");
    let capitalArr = [];
    for(const word of stringArr){
        const upper = word[0].toUpperCase() + word.slice(1);
        capitalArr.push(upper);
    }

    return capitalArr.join(" ");
}

//Task N3
function sortWithAge(userArr){
    userArr = [{name: "Lasha", age: 30}, {name: "Saba", age: 20}];

    userArr.sort((obj1, obj2) => obj1.age - obj2.age);

    return userArr;
}

userArr = [{name: "Lasha", age: 30}, {name: "Saba", age: 20}];

console.log(returnNewString("Hello World", "World", "Keso"));

console.log(changeToUpperCase("hello world. my name is keso and i am going to be front-end developer."))

console.log(sortWithAge(userArr));