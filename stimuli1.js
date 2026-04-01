"use-strict.js"

// The stimuli for list1
const LIST_1 = [
    {
        id: 2,
        item_type: TARGET,
        image: './img/slide1.png',
        sound: './sounds/media3.flac',
        bias_onset: 4000, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: false,
        target_pos: RIGHT
    },
    {
        id: 3,
        item_type: TARGET,
        image: './img/slide2.png',
        sound: './sounds/media7.flac',
        bias_onset: 4000, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: AMB, // ambiguous
    },
    {
        id: 4,
        item_type: TARGET,
        image: './img/slide2.png',
        sound: './sounds/media11.flac',
        bias_onset: 4000, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: AMB, // ambiguous
    },
];
