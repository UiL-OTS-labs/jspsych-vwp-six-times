"use-strict"

// The stimuli for the practice phase
const PRACTICE_ITEMS = [
    {
        id: 1,
        item_type: PRACTICE,
        image: './img/ChurchTableNecklaceRing.jpg',
        sound: './sounds/BlinktEenKettingGras.wav',
        bias_onset: 1234, // After 1234 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: LEFT
    },
];
