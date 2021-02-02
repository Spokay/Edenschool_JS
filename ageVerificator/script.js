
    // let age = prompt("How old are you ?");
    //
    // if(age == null || age === ""){
    //     alert("you didn\'t answer to the question");
    // }
    // else if(isNaN(age)){
    //     alert("You didn\'t answered a number");
    // }
    // else{
    //     alert("You are " + age + " years old");
    // }
    let age = prompt("How old are you ?");
    age = parseInt(age);
    if (isNaN(age)){
            alert("you didn\'t answer to the question");
    }
    else{
        if (age >= 16){
            alert("welcome");
        }
        else{
            location.replace("https://www.edenschool.fr/");
        }
    }




