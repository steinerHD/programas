import { pregunta } from "./data/question.js";

import { quiz } from "./models/encuesta.js";

import { UI } from "./models/UI.js";


/**
 * 
 * @param { quiz } encuentas 
 * @param { UI } ui 
 */

const renderPage = (encuentas, ui) => {
    if (encuentas.final()) {
        ui.showScore(encuentas.score);
    } else {
        ui.showQuestion(encuentas.getQuestionIndex().text);
        ui.showAnswer(encuentas.getQuestionIndex().choices, (currentChoice) => {
            encuentas.guess(currentChoice);
            renderPage(encuentas, ui);
        })
        ui.showProgress(encuentas.preguntaIndex+1, encuentas.preguntas.length);
    }
}

function main() {
    const encuentas = new quiz(pregunta);
    const ui = new UI();
    renderPage(encuentas, ui)
}

main();

