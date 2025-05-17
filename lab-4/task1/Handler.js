class Handler {
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }

    handle(request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        } else {
            console.log("Немає обробника для вашого запиту.");
        }
    }
}

export default Handler;