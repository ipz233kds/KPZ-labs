const { WebSite, MobileApp, ManagerCall } = require('./SubscriptionFactory');

function run() {
    const websiteFactory = new WebSite();
    const mobileFactory = new MobileApp();
    const managerFactory = new ManagerCall();

    const sub1 = websiteFactory.createSubscription('domestic');
    const sub2 = mobileFactory.createSubscription('educational');
    const sub3 = managerFactory.createSubscription('premium');

    console.log('Subscription from Website:', sub1.getDetails());
    console.log('Subscription from Mobile App:', sub2.getDetails());
    console.log('Subscription from Manager Call:', sub3.getDetails());
}

run();