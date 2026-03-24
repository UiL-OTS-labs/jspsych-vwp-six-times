"use-strict.js"

// The stimuli for list1
const LIST_1 = [
    {
        id: 2,
        item_type: TARGET,
        image: './img/TaartPlantPlasDiamant.jpg',
        sound: './sounds/LigtEenPlasVeld.wav',
        bias_onset: 1234, // After 1234 ms the sentence should cause a bias in looking behavior
        expected_answer: false
    },
    {
        id: 3,
        item_type: TARGET,
        image: './img/BookCraddlePlantWheel.jpg',
        sound: './sounds/LigtEenWielKamer.wav',
        bias_onset: 1234, // After 1234 ms the sentence should cause a bias in looking behavior
        expected_answer: true
    },
];
