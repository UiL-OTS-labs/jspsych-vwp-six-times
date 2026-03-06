////////////////
// STIMULI
///////////////

// Item types
const PRACTICE = "PRACTICE";
const TARGET = "TARGET";

// name for lists, in this case one list, one item in the list
const LISTS = [
    "1",
    "2",
    "3",
    "4"
];


const PRACTICE_ITEMS = [
    {
        id: 1,
        item_type: PRACTICE,
        image: './img/ChurchTableNecklaceRing.jpg',
        sound: './sounds/BlinktEenKettingGras.wav',
        bias_onset: 1234, // After 1234 ms the sentence should cause a bias in looking behavior
        expected_answer: true
    },
];

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

const LIST_2 = []; // To be filled in.
const LIST_3 = []; // To be filled in.
const LIST_4 = []; // To be filled in.

const TEST_ITEMS = [
    {list_name: LISTS[0], table: LIST_1},
    {list_name: LISTS[1], table: LIST_2},
    {list_name: LISTS[2], table: LIST_3},
    {list_name: LISTS[3], table: LIST_4}
];

/**
 * finds a list base on a group
 *
 * @param {int} listnum: the number of the desired list
 *
 * @returns {array<string>} A list of test items.
 */
function findList(listnum) {
    const VALID = [1,2,3,4];

    if (!VALID.includes(listnum)) {
        throw new Error(
            `${findList.name}: listnum is not valid expected one of: ${VALID}`
        );
    }

    return TEST_ITEMS[listnum - 1];
}

// If there were two lists to choose from:

// const TEST_ITEMS = [
//     {list_name: LISTS[0], table: LIST_1},
//     {list_name: LISTS[1], table: LIST_2}
// ];

/**
 * Get the list of practice items
 *
 * Returns an object with a list and a table, the list will always indicate
 * "practice" since it are the practice items
 *
 * @returns {object} object with list and table fields
 */
function getPracticeItems() {
    return {list_name : "practice", table : PRACTICE_ITEMS};
}

/**
 * This function will pick a random list from the TEST_ITEMS array.
 * @returns {object} object with one or more "lists" and table fields
 */
function pickRandomList() {
    let range = function (n) {
        let empty_array = [];
        let i;
        for (i = 0; i < n; i++) {
            empty_array.push(i);
        }
        return empty_array;
    }
    let num_lists = TEST_ITEMS.length;
    var shuffled_range = jsPsych.randomization.repeat(range(num_lists), 1);
    var retlist = TEST_ITEMS[shuffled_range[0]];
    return retlist;
}
