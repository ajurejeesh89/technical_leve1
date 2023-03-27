
const people = [

    {
        "country": [
            { "country_id": "IN", "probability": 0.239 },
            { "country_id": "NP", "probability": 0.124 },
            { "country_id": "AE", "probability": 0.063 },
            { "country_id": "BD", "probability": 0.042 },
            { "country_id": "SQ", "probability": 0.039 },
            { "country_id": "CA", "probability": 0.032 },
        ],
        "name": "raj"
    },
    {
        "country": [
            { "country_id": "IN", "probability": 90 },
            { "country_id": "NP", "probability": 80 },
            { "country_id": "AE", "probability": 20 },
            { "country_id": "BD", "probability": 30 },
            { "country_id": "SQ", "probability": 50 },
            { "country_id": "CA", "probability": 88 }
        ],
        "name": "aju"
    },
    {
        "country": [
            { "country_id": "IN", "probability":85 },
            { "country_id": "NP", "probability": 25 },
            { "country_id": "AE", "probability": 35 },
            { "country_id": "BD", "probability": 65 },
            { "country_id": "SQ", "probability": 85 },
            { "country_id": "CA", "probability": 93},
        ],
        "name": "sam"
    },

]

var countryName = []
var submitForm = document.getElementById("submitForm");


submitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("name")
    name.value=name.value.toLowerCase();
    console.log("nameLowercase", name.value);

    if (name.value == "") {
        alert("Please enter the name");
        return false;
    }

    //const objectArray = Object.values(people)


    const objectArray = people.find(elem => elem.name === name.value);
    if (objectArray) {
        const dataArray = objectArray.country
        let i = 0;
        dataArray.map((obj) => {
            const displayName = obj.country_id + " - " + obj.probability
            document.getElementById('countryDetails').style.display = "inline-grid";
            document.getElementById('error').style.display = "none";
            let span = document.getElementsByClassName('item' + i);
            txt = document.createTextNode(displayName);
            span[0].innerHTML = "";
            span[0].appendChild(txt);
            i++;

        })
    }
    else {
        document.getElementById('error').style.display = "inline";
        document.getElementById('countryDetails').style.display = "none";
    }

});


function clearText(){
    let name = document.getElementById("name")
    name.value=name.value.toLowerCase();
    const objectArray = people.find(elem => elem.name === name.value);
    if (objectArray) {

         const dataArray = objectArray.country
        let i = 0;
        dataArray.map((obj) => {
            const displayName = ""
            document.getElementById('countryDetails').style.display = "inline-grid";
            document.getElementById('error').style.display = "none";
            let span = document.getElementsByClassName('item' + i);
            txt = document.createTextNode(displayName);
            span[0].innerHTML = "";
            span[0].appendChild(txt);
            i++;

        })
    }
        document.getElementById("name").value= "";

    }




function lettersValidate(event) {

    var englishAlphabetAndWhiteSpace = /[A-Za-z ]/g;
    var key = String.fromCharCode(event.which);

    //alert(event.keyCode);
    if (event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || englishAlphabetAndWhiteSpace.test(key)) {
        return true;
    }
    return false;

}



