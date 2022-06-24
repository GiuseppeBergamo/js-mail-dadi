const emailValide = ["giuseppe.bergamo67@gmail.com", "gianmarconeri@gmail.com", "valentinalibri@gmail.com"]

const emailUtente = prompt("Inserisci la tua email");

if (emailValide.includes(`${emailUtente}`)) {
    alert("Email valida. Benvenuto");
} else {
    alert("Email non valida")

}