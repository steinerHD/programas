import { Question } from "../models/question.js";
import { data } from "./data.js";

export const pregunta = data.map(question => new Question(question.question, question.choices, question.answer));