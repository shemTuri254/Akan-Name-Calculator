window.addEventListener("DOMContentLoaded", function(){
    console.log("Content loaded");


    let form = document.querySelector("#form");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        console.log("FORM SUBMITTED");

        let userDate = document.querySelector("#date").value;
        let date = new Date(userDate);
        let dateDay = date.getDay();
        userDate = dateDay;
        console.log(dateDay);

        let gender = document.querySelector("#gender").value;
        
        let male = ['Kwasi','Kwadwo', 'Kwabena', 'Kwako', 'Yaw', 'Kofi', 'Kwame']
        let female = ['Akoswa', 'Adwoa', 'Abenaa', 'Akua', 'Yua', 'Afua', 'Ama']
        console.log("checked")

        if(gender === "m"){
            alert(male[userDate]);
        }
        else if(gender === "f"){
            alert(female[userDate]);
        }
        else{
          alert ("Invalid Option") 
        }

    });
});
var modal = document.getElementById('popup');