// @ts-check
import { Question } from "./question.js";

export class quiz {

    preguntaIndex = 0;
    score = 0;

    /**
     * 
     * @param {Question[]} preguntas 
     */
    
    constructor(preguntas) {
        this.preguntas = preguntas;
    }
    /**
     * 
     * @returns {Question} the question found
     */

    getQuestionIndex() {
        return this.preguntas[this.preguntaIndex];
    }

    guess(answer) {
        console.log(answer)
        if (this.getQuestionIndex().CorrectAnswer(answer)) {
            this.score++
        }
        this.preguntaIndex++
    } 


    final() {
        return this.preguntas.length === this.preguntaIndex;
    }
}