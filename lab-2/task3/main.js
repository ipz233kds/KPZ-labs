const Authenticator = require('./Authenticator');

function run() {
    const auth1 = new Authenticator();
    const auth2 = new Authenticator();

    console.log("Token from auth1:", auth1.getToken());
    console.log("Token from auth2:", auth2.getToken());
    console.log("Are both instances the same?", auth1 === auth2);
}

run();