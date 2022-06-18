

export class Question {
    /**
     * 
     * @param {string} text This is the question
     * @param {Array} choices This is the choices of question
     * @param {string} answer this is the answer of the question
     */




    constructor (text, choices, answer) {
        this.text = text;
        this.choices = choices
        this.answer = answer
    }
    /**
     * 
     * @param {string} choice 
     * @returns {boolean} return true if the answer is correct
     */

    CorrectAnswer(choice) {
        return choice  === this.answer;
    }
}
