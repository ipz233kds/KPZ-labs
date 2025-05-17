import Handler from './Handler.js';

class GeneralQuestionHandler extends Handler {
    handle(request) {
        if (request.toLowerCase().includes("ціна") || request.toLowerCase().includes("доставка")) {
            console.log("Загальні питання оброблено.");
        } else {
            super.handle(request);
        }
    }
}

export default GeneralQuestionHandler;