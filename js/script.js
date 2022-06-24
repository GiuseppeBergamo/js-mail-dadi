
// ESERCIZIO EMAIL

const emailValide = ["giuseppe.bergamo67@gmail.com", "gianmarconeri@gmail.com", "valentinalibri@gmail.com"]

const emailUtente = prompt("Inserisci la tua email");

if (emailValide.includes(`${emailUtente}`)) {
    alert("Email valida. Benvenuto");
} else {
    alert("Email non valida")

}

// ESERCIZIO DADI

const tiroDadi = document.getElementById("dadi");


tiroDadi.addEventListener("click", function () {
    console.log("mi hai cliccato!")
    const randomNumberUser = Math.random();
    const randomNumberPc = Math.random()
    const max = 6;
    const min = 1;
    let risultatoDadoUser = Math.floor(randomNumberUser * max + 1);
    console.log(risultatoDadoUser);
    let risultatoDadoPc = Math.floor(randomNumberPc * max + 1);
    console.log(risultatoDadoPc);

    if (risultatoDadoUser > risultatoDadoPc) {
        alert(`Hai vinto, il tuo risultato è ${risultatoDadoUser}, mentre quello del Computer è ${risultatoDadoPc}!`)
    } else if (risultatoDadoUser === risultatoDadoPc) {
        alert(`Pareggio! Entrambi avete ottenuto ${risultatoDadoUser}.`)
    } else if (risultatoDadoUser < risultatoDadoPc) {
        alert(`Hai perso! il tuo risultato è ${risultatoDadoUser}, mentre quello del computer è ${risultatoDadoPc}`)
    }


})
