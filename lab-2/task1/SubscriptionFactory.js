const {
    DomesticSubscription,
    EducationalSubscription,
    PremiumSubscription
} = require('./Subscription');

class SubscriptionFactory {
    createSubscription(type) {
        throw new Error("This method should be overridden");
    }
}

class WebSite extends SubscriptionFactory {
    createSubscription(type) {
        if (type === 'domestic') return new DomesticSubscription();
        if (type === 'educational') return new EducationalSubscription();
        if (type === 'premium') return new PremiumSubscription();
        throw new Error("Invalid subscription type for WebSite");
    }
}

class MobileApp extends SubscriptionFactory {
    createSubscription(type) {
        console.log("Created via Mobile App");
        return new WebSite().createSubscription(type); // може бути інша логіка
    }
}

class ManagerCall extends SubscriptionFactory {
    createSubscription(type) {
        console.log("Created via Manager Call with discount");
        let subscription = new WebSite().createSubscription(type);
        subscription.monthlyFee *= 0.9; // знижка
        return subscription;
    }
}

module.exports = {
    WebSite,
    MobileApp,
    ManagerCall
};