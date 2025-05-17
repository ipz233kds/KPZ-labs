import Handler from './Handler.js';

class TechnicalSupportHandler extends Handler {
    handle(request) {
        if (request.toLowerCase().includes("не працює") || request.toLowerCase().includes("помилка")) {
            console.log("Технічна підтримка працює над цим!");
        } else {
            super.handle(request);
        }
    }
}

export default TechnicalSupportHandler;