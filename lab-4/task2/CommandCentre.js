class CommandCentre {
    constructor(runways = []) {
        this.runways = runways;
    }

    requestLanding(aircraft) {
        const freeRunway = this.runways.find(runway => !runway.checkIsActive());

        if (freeRunway) {
            freeRunway.occupy();
            aircraft.assignRunway(freeRunway);
        } else {
            console.log(`No free runway available for ${aircraft.name}.`);
        }
    }

    requestTakeOff(aircraft) {
        const runway = aircraft.currentRunway;
        if (runway) {
            runway.release();
            aircraft.unassignRunway();
        } else {
            console.log(`Aircraft ${aircraft.name} is not on any runway.`);
        }
    }
}

export default CommandCentre;