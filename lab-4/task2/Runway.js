import { v4 as uuidv4 } from 'uuid';

class Runway {
    constructor() {
        this.id = uuidv4();
        this.isBusy = false;
    }

    occupy() {
        this.isBusy = true;
        console.log(`Runway ${this.id} is now occupied.`);
    }

    release() {
        this.isBusy = false;
        console.log(`Runway ${this.id} is now free.`);
    }

    checkIsActive() {
        return this.isBusy;
    }
}

export default Runway;
