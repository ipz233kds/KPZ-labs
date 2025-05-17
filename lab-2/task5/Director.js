class Director {
    createLegendaryHero(builder) {
        return builder
            .setHeight("185 см")
            .setHairColor("золоте")
            .setEyeColor("блакитні")
            .setClothes("лицарські обладунки")
            .addInventoryItem("меч світла")
            .addInventoryItem("щит справедливості")
            .addGoodDeed("врятував місто")
            .addGoodDeed("переміг дракона")
            .build();
    }

    createDreadfulEnemy(builder) {
        return builder
            .setHeight("210 см")
            .setHairColor("чорне")
            .setEyeColor("червоні")
            .setClothes("мантія тіней")
            .addInventoryItem("посох темряви")
            .addEvilDeed("знищив село")
            .addEvilDeed("вкрав артефакт")
            .build();
    }
}

module.exports = Director;