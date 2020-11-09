"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Answers",
            [
                {
                    content:
                    "Your walls are losing their footing and needs to be addressed asap. Perhaps when the concrete was poured it was to wet resulting in a weak batch.",
                    userId: 1,
                    questionId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content:
                    "I'm having a hard time visualizing what I'm looking at. Could you provide more pics from different perspectives?",
                    userId: 2,
                    questionId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content:
                    "Is there a garbage disposal under the sink? If so, quarter some lemons, freeze them, and grind them up. If the sink is (or was) as badly clogged as it sounds, it’s going to take time.",
                    userId: 3,
                    questionId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content:
                    "Just a reminder that Draino is a really bad idea and corrosive to your pipes, plumbers DO NOT recommend it.",
                    userId: 3,
                    questionId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content:
                    "I’d pressure wash the brickwork, get some coordinating colors on the door, windows, and trim. Then add a few potted plants or a planter to soften it up a little bit. It’s going to look great.",
                    userId: 2,
                    questionId: 3,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content:
                    "What is behind the plywood? Please be more descriptive",
                    userId: 2,
                    questionId: 3,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("answers", null, {});
    },
};
