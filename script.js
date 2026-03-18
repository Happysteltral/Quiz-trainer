// ===== VRAGEN =====
let vragen = [
    {
        vraag: "Wat is 2 + 2?",
        antwoorden: ["3", "4", "5", "6"],
        correct: 1
    },
    {
        vraag: "Welke taal gebruiken we in de browser?",
        antwoorden: ["Python", "C#", "JavaScript", "Java"],
        correct: 2
    },
    {
        vraag: "Wat is de hoofdstad van Frankrijk?",
        antwoorden: ["Parijs", "Rome", "Madrid", "Berlijn"],
        correct: 0
    },
    {
        vraag: "Hoeveel bits zitten er in een byte?",
        antwoorden: ["4", "8", "16", "32"],
        correct: 1
    },
    {
        vraag: "Welke HTML-tag gebruik je voor een link?",
        antwoorden: ["<p>", "<a>", "<div>", "<link>"],
        correct: 1
    },
    {
        vraag: "Wat is de uitkomst van 10 / 2?",
        antwoorden: ["2", "4", "5", "10"],
        correct: 2
    },
    {
        vraag: "Welke kleur krijg je door rood en blauw te mengen?",
        antwoorden: ["Groen", "Paars", "Oranje", "Geel"],
        correct: 1
    },
    {
        vraag: "Waar staat CSS voor?",
        antwoorden: [
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style System",
            "Colorful Style Sheets"
        ],
        correct: 1
    },
    {
        vraag: "Welke lus gebruik je als je niet weet hoe vaak je moet herhalen?",
        antwoorden: ["for", "while", "if", "switch"],
        correct: 1
    },
    {
        vraag: "Wat doet JavaScript voornamelijk?",
        antwoorden: [
            "Servers beheren",
            "Webpagina’s interactief maken",
            "Databases opslaan",
            "Besturingssystemen maken"
        ],
        correct: 1
    }
];

// ===== VARIABELEN =====
let huidigeVraag = 0;


// ===== START KNOP =====
document.getElementById("start").onclick = function () {
    huidigeVraag = 0;
    toonVraag();
};


// ===== VRAAG TONEN =====
function toonVraag() {

    let vraagElement = document.getElementById("vraag");
    let antwoordenDiv = document.getElementById("antwoorden");

    // TODO: vraag tonen
    // TODO: antwoorden genereren (buttons!)

}


// ===== ANTWOORD CONTROLEREN =====
function controleerAntwoord(index) {

    let feedback = document.getElementById("feedback");

    // TODO: controleer of antwoord juist is
    // TODO: feedback tonen

    document.getElementById("volgende").disabled = false;
}


// ===== VOLGENDE VRAAG =====
document.getElementById("volgende").onclick = function () {

    huidigeVraag++;

    if (huidigeVraag >= vragen.length) {
        alert("Einde van de quiz!");
        huidigeVraag = 0;
    }

    // TODO: nieuwe vraag tonen
};
