import Handler from './Handler.js';

class GreetingHandler extends Handler {
    handle(request) {
        if (request.toLowerCase().includes("привіт")) {
            console.log("Вітаємо у службі підтримки!");
        } else {
            super.handle(request);
        }
    }
}

export default GreetingHandler;