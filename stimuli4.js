"use-strict.js"

// The stimuli for list4
const LIST_4 = [
    {
        id: 2,
        item_type: TARGET,
        image: './img/01e.png',
        sound: './sounds/amb_R_die_banane_fangt_mia.wav',
        bias_onset: 1000, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: false,
        target_pos: AMB
    },  
    {
        id: 3,
        item_type: TARGET,
        image: './img/02e.png',
        sound: './sounds/mkd_L_der_konig_sieht_johann.wav',
        bias_onset: 1000, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: false,
        target_pos: LEFT
    },
    {
        id: 4,
        item_type: TARGET,
        image: './img/03e.png',
        sound: './sounds/amb_L_mia_liebt_die_taube.wav',
        bias_onset: 3700, // after 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: AMB, // ambiguous
    },
    {
        id: 5,
        item_type: TARGET,
        image: './img/04e.png',
        sound: './sounds/mkd_R_den_flamingo_schlagt_johann.wav',
        bias_onset: 1000, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: RIGHT
    },
        {
        id: 6,
        item_type: TARGET,
        image: './img/05e.png',
        sound: './sounds/amb_R_die_aubergine_verfolgt_mia.wav',
        bias_onset: 1000, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: AMB
    },
        {
        id: 7,
        item_type: TARGET,
        image: './img/06e.png',
        sound: './sounds/mkd_L_johann_sieht_den_tiger.wav',
        bias_onset: 3700, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: LEFT
    },
        {
        id: 8,
        item_type: TARGET,
        image: './img/07e.png',
        sound: './sounds/mkd_L_den_otter_schlagt_mia.wav',
        bias_onset: 1000, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: LEFT
    },
        {
        id: 9,
        item_type: TARGET,
        image: './img/08e.png',
        sound: './sounds/amb_R_mia_fangt_die_eule.wav',
        bias_onset: 3700, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: AMB
    },
        {
        id: 10,
        item_type: TARGET,
        image: './img/09e.png',
        sound: './sounds/amb_L_die_buche_schlagt_johann.wav',
        bias_onset: 1000, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: AMB
    },
        {
        id: 11,
        item_type: TARGET,
        image: './img/10e.png',
        sound: './sounds/mkd_R_mia_sieht_den_hase.wav',
        bias_onset: 3700, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: RIGHT
    },
        {
        id: 12,
        item_type: TARGET,
        image: './img/11e.png',
        sound: './sounds/amb_R_die_antilope_verfolgt_johann.wav',
        bias_onset: 1000, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: AMB
    },
        {
        id: 13,
        item_type: TARGET,
        image: './img/12e.png',
        sound: './sounds/amb_L_die_anaconda_fangt_mia.wav',
        bias_onset: 1000, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: AMB
    },
        {
        id: 14,
        item_type: TARGET,
        image: './img/13e.png',
        sound: './sounds/mkd_R_der_orca_liebt_johann.wav',
        bias_onset: 1000, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: RIGHT
    },
        {
        id: 15,
        item_type: TARGET,
        image: './img/14e.png',
        sound: './sounds/amb_R_mia_schlagt_die_narzisse.wav',
        bias_onset: 3700, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: AMB
    },
        {
        id: 16,
        item_type: TARGET,
        image: './img/15e.png',
        sound: './sounds/mkd_R_der_stern_verfolgt_mia.wav',
        bias_onset: 1000, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: RIGHT
    },
        {
        id: 17,
        item_type: TARGET,
        image: './img/16e.png',
        sound: './sounds/amb_L_die_maus_sieht_johann.wav',
        bias_onset: 1000, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: AMB
    },
        {
        id: 18,
        item_type: TARGET,
        image: './img/17e.png',
        sound: './sounds/mkd_R_den_schwan_verfolgt_mia.wav',
        bias_onset: 1000, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: RIGHT
    },
        {
        id: 19,
        item_type: TARGET,
        image: './img/18e.png',
        sound: './sounds/mkd_L_johann_sieht_den_panda.wav',
        bias_onset: 3700, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: LEFT
    },    
        {
        id: 20,
        item_type: TARGET,
        image: './img/19e.png',
        sound: './sounds/amb_L_die_biene_liebt_johann.wav',
        bias_onset: 1000, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: AMB
    },
        {
        id: 21,
        item_type: TARGET,
        image: './img/20e.png',
        sound: './sounds/mkd_L_johann_fangt_der_elefant.wav',
        bias_onset: 3700, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: LEFT
    },
      {
        id: 22,
        item_type: TARGET,
        image: './img/21e.png',
        sound: './sounds/mkd_L_den_fisch_schlagt_johann.wav',
        bias_onset: 1000, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: LEFT
    },
        {
        id: 23,
        item_type: TARGET,
        image: './img/22e.png',
        sound: './sounds/amb_R_mia_liebt_die_hyane.wav',
        bias_onset: 3700, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: AMB
    },
        {
        id: 24,
        item_type: TARGET,
        image: './img/23e.png',
        sound: './sounds/mkd_L_den_piranha_verfolgt_johann.wav',
        bias_onset: 1000, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: LEFT
    },
        {
        id: 25,
        item_type: TARGET,
        image: './img/24e.png',
        sound: './sounds/amb_L_die_spinne_fangt_mia.wav',
        bias_onset: 1000, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: AMB
    },
        {
        id: 26,
        item_type: TARGET,
        image: './img/25e.png',
        sound: './sounds/mkd_R_mia_verfolgt_der_koala.wav',
        bias_onset: 3700, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: RIGHT
    },
        {
        id: 27,
        item_type: TARGET,
        image: './img/26e.png',
        sound: './sounds/amb_L_mia_liebt_die_kaktee.wav',
        bias_onset: 3700, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: AMB
    },
        {
        id: 28,
        item_type: TARGET,
        image: './img/27e.png',
        sound: './sounds/amb_L_die_kuh_verfolgt_johann.wav',
        bias_onset: 1000, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: AMB
    },
        {
        id: 29,
        item_type: TARGET,
        image: './img/28e.png',
        sound: './sounds/mkd_L_johann_liebt_der_delfin.wav',
        bias_onset: 3700, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: LEFT
    },
        {
        id: 30,
        item_type: TARGET,
        image: './img/29e.png',
        sound: './sounds/mkd_R_johann_sieht_den_loffel.wav',
        bias_onset: 3700, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: RIGHT
    },
        {
        id: 31,
        item_type: TARGET,
        image: './img/30e.png',
        sound: './sounds/mkd_L_der_pinguin_fangt_mia.wav',
        bias_onset: 1000, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: LEFT
    },
        {
        id: 32,
        item_type: TARGET,
        image: './img/31e.png',
        sound: './sounds/amb_R_johann_schlagt_die_konigin.wav',
        bias_onset: 3700, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: AMB
    },
    {
        id: 33,
        item_type: TARGET,
        image: './img/32e.png',
        sound: './sounds/amb_L_johann_fangt_die_nachtigall.wav',
        bias_onset: 3700, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: AMB
    },
];

