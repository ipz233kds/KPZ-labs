class Aircraft {
    constructor(name, commandCentre) {
        this.name = name;
        this.commandCentre = commandCentre;
        this.currentRunway = null;
    }

    requestLanding() {
        console.log(`Aircraft ${this.name} requests landing.`);
        this.commandCentre.requestLanding(this);
    }

    requestTakeOff() {
        console.log(`Aircraft ${this.name} requests takeoff.`);
        this.commandCentre.requestTakeOff(this);
    }

    assignRunway(runway) {
        this.currentRunway = runway;
        console.log(`Aircraft ${this.name} landed on runway ${runway.id}`);
    }

    unassignRunway() {
        console.log(`Aircraft ${this.name} has taken off from runway ${this.currentRunway.id}`);
        this.currentRunway = null;
    }
}

export default Aircraft;