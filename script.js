const firstName = document.getElementById("first-name");
const middleName = document.getElementById("middle-name");
const lastName = document.getElementById("last-name");
const fullName = document.getElementById("full-name");

function generateFullname(){

    fullName.innerHTML = firstName.value + " " + middleName.value + " " + lastName.value;
}

function clearEntries(){

    firstName.value = "";
    middleName.value = "";
    lastName.value = "";
    fullName.innerHTML = "";
}