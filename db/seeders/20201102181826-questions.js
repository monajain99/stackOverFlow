"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Questions",
            [
                {
                    title: "Is our garage in trouble?",
                    content:
                        "The foundation underneath the garage's sil plate seems to be crumbling in places. If I brush against it, it crumbles easily as well and there's white residue in those places too. I'm wondering what's going on and if this is something that can be repaired",
                    userId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Smelly kitchen drain help",
                    content:
                        "Just moved into our new home and it seems as if the previous owners have never cleaned a day in their lives. Anyways, the kitchen sink was clogged with black gunk so we first tried the classic vinegar and baking soda, hot water, dish soap etc. and more...",
                    userId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "How to improve the external look of my property?",
                    content:
                        "I'm a first time buyer in the UK and I'm looking for some advice on how to improve the look of my home. I've recently finished all the refurbishments I wanted to do on the inside but now I'm left looking at the house from the street and thinking work!",
                    userId: 3,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "How to deal with wood foundation skirting?",
                    content:
                        "It's plywood all the way around, and it's wicking water from the ground. I have a crawlspace/subfloor contractor coming out to do those repairs but he said the skirting is outside of his scope of work. Could I just replace the plywood with pavers?",
                    userId: 3,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Questions", null, {});
    },
};
