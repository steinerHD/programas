import { Question } from "./question.js";

export class UI {
    constructor() {

    }

    /**
     * 
     * @param {string} text Qeestion to render
     */

    showQuestion(text) {
        const questionTitle = document.getElementById('question');
        questionTitle.innerText = text;
    }
    /**
     * 
     * @param {string[]} choices the choices of the question  
     */
    showAnswer(choices, callback) {
        const choicesConteiner = document.getElementById('choices');
        choicesConteiner.innerHTML = ''
        for (let i = 0; i < choices.length; i++) {
            const button = document.createElement('button');
            button.innerText = choices[i];
            button.className = 'button';
            button.addEventListener('click', () => callback(choices[i]))

            choicesConteiner.append(button);
        }
    }

    /**
     * 
     * @param {number} score 
     */

    showScore(score) {
        const textOfEnd = `
        <h1> Resultado </h1>
        <h2> Tu puntaje es: ${score} </h2>
        `
        const element = document.getElementById('quiz');
        element.innerHTML = textOfEnd;
    }

    showProgress(x, y) {
        const progress = document.getElementById('progress');
        progress.innerText = `
        Pregunta ${x} de ${y}`
    }
}