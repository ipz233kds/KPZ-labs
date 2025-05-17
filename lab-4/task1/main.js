import readline from 'readline';
import GreetingHandler from './GreetingHandler.js';
import GeneralQuestionHandler from './GeneralQuestionHandler.js';
import TechnicalSupportHandler from './TechnicalSupportHandler.js';
import OperatorHandler from './OperatorHandler.js';

const greeting = new GreetingHandler();
const general = new GeneralQuestionHandler();
const tech = new TechnicalSupportHandler();
const operator = new OperatorHandler();

greeting.setNext(general).setNext(tech).setNext(operator);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Введіть ваш запит: ", (input) => {
    console.log("Обробка запиту");
    greeting.handle(input);
    rl.close();
});