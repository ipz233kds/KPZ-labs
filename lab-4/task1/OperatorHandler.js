import Handler from './Handler.js';

class OperatorHandler extends Handler {
    handle(request) {
        console.log("Перенаправляємо вас до оператора.");
    }
}

export default OperatorHandler;