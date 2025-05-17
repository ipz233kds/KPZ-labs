class Subscription {
    constructor(monthlyFee, minPeriod, channels) {
        this.monthlyFee = monthlyFee;
        this.minPeriod = minPeriod;
        this.channels = channels;
    }

    getDetails() {
        return {
            fee: this.monthlyFee,
            period: this.minPeriod,
            channels: this.channels
        };
    }
}

class DomesticSubscription extends Subscription {
    constructor() {
        super(10, 1, ['News', 'Local Sports']);
    }
}

class EducationalSubscription extends Subscription {
    constructor() {
        super(8, 3, ['Documentaries', 'Science', 'History']);
    }
}

class PremiumSubscription extends Subscription {
    constructor() {
        super(20, 1, ['Movies', 'Sports', 'International News']);
    }
}

module.exports = {
    DomesticSubscription,
    EducationalSubscription,
    PremiumSubscription
};