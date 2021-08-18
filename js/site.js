//Get the string from the page(UserInput)
//controller function
function getValue() {

    
    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayString(revString);

    
}

//Reverse the string
//logic funtion
function reverseString(userString) {
    
    let revString = [];
    //reverse a string using a for loop
    for (let index = userString.length - 1; index>=0; index--) {
        
        revString += userString[index];
        
    }
    
    return revString;
}
//Display messange and the reversed string
//view function
function displayString(revString) {

    //write to the page
    document.getElementById("msg").innerHTML = `${revString}`;
    //show the alert box
    document.getElementById("alert").classList.remove("invisible");
}