import Aircraft from './Aircraft.js';
import Runway from './Runway.js';
import CommandCentre from './CommandCentre.js';

const runway1 = new Runway();
const runway2 = new Runway();
const commandCentre = new CommandCentre([runway1, runway2]);

const aircraft1 = new Aircraft('UA123', commandCentre);
const aircraft2 = new Aircraft('LH456', commandCentre);
const aircraft3 = new Aircraft('FR789', commandCentre);

aircraft1.requestLanding();
aircraft2.requestLanding();
aircraft3.requestLanding();

setTimeout(() => {
    aircraft1.requestTakeOff();
}, 3000);

setTimeout(() => {
    aircraft3.requestLanding();
}, 5000);
