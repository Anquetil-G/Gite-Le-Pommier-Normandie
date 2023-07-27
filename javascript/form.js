const form = document.querySelector(".form");
const formButton = document.getElementById("input-btn");

let tel;
const inputTel = document.getElementById("input-tel");
let email;
const inputEmail = document.getElementById("input-email");
let child;
const inputChild = document.getElementById("input-child");
let adults;
const inputAdults = document.getElementById("input-adults");
let dateOncoming;
const inputDateOncoming = document.getElementById("input-date-oncoming");
let dateOutcoming;
const inputDateOutcoming = document.getElementById("input-date-outcoming");


inputTel.addEventListener("input", (e) => {
    tel = e.target.value;
});
inputEmail.addEventListener("input", (e) => {
    email = e.target.value;
});
inputChild.addEventListener("input", (e) => {
    child = e.target.value;
});
inputAdults.addEventListener("input", (e) => {
    adults = e.target.value;
});
inputDateOncoming.addEventListener("input", (e) => {
    dateOncoming = e.target.value;
});
inputDateOutcoming.addEventListener("input", (e) => {
    dateOutcoming = e.target.value;
});


formButton.addEventListener("click", () => {
    const webhookUrl = 'https://discord.com/api/webhooks/1129746402466082818/rhdAQn00Z7T5adME_du1Uz0II2iyCvy7BRdkT8icI7VkYaAvEPibm0ItRKJ9LCTi0Y_u';
    const message = `
    **__Formulaire :__**

    __Téléphone__ : ${tel}
    __Email__ : ${email}
    __Adultes__ : ${adults}
    __Enfants__ : ${child}
    __Date d'arrivée__ : ${dateOncoming}
    __Date de départ__ : ${dateOutcoming}
    `;

    fetch(webhookUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content: message }),
    })
    .then(response => {
        if (response.ok) {
        alert("Le formulaire à bien été envoyé, vous aurez bientôt une réponse.");
        } else {
        alert('Erreur lors de l\'envoi du formulaire, veuillez recommencez : ', response.statusText);
        }
    })
    .catch(error => {
        alert('Erreur lors de l\'envoi du formulaire, veuillez recommencez : ', error);
    });
});