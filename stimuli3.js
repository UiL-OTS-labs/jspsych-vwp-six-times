"use-strict.js"

// The stimuli for list3
const LIST_3 = [
    {
        id: 2,
        item_type: TARGET,
        image: './img/01e.png',
        sound: './sounds/amb_L_mia_fangt_die_banane.wav',
        bias_onset: 3700, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: false,
        target_pos: AMB
    },  
    {
        id: 3,
        item_type: TARGET,
        image: './img/02e.png',
        sound: './sounds/mkd_R_johann_sieht_den_konig.wav',
        bias_onset: 3700, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: false,
        target_pos: RIGHT
    },
    {
        id: 4,
        item_type: TARGET,
        image: './img/03e.png',
        sound: './sounds/amb_L_mia_liebt_die_taube.wav',
        bias_onset: 3700, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: AMB, // ambiguous
    },
    {
        id: 5,
        item_type: TARGET,
        image: './img/04e.png',
        sound: './sounds/mkd_L_der_flamingo_schlagt_johann.wav',
        bias_onset: 1000, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: LEFT
    },
        {
        id: 6,
        item_type: TARGET,
        image: './img/05e.png',
        sound: './sounds/amb_L_mia_verfolgt_die_aubergine.wav',
        bias_onset: 3700, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: AMB
    },
        {
        id: 7,
        item_type: TARGET,
        image: './img/06e.png',
        sound: './sounds/mkd_R_johann_sieht_der_tiger.wav',
        bias_onset: 3700, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: RIGHT
    },
        {
        id: 8,
        item_type: TARGET,
        image: './img/07e.png',
        sound: './sounds/mkd_R_der_otter_schlagt_mia.wav',
        bias_onset: 1000, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: RIGHT
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
        sound: './sounds/mkd_L_mia_sieht_der_hase.wav',
        bias_onset: 3700, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: LEFT
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
        sound: './sounds/amb_L_die_anakonda_fangt_mia.wav',
        bias_onset: 1000, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: AMB
    },
        {
        id: 14,
        item_type: TARGET,
        image: './img/13e.png',
        sound: './sounds/mkd_L_johann_liebt_den_orca.wav',
        bias_onset: 3700, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: LEFT
    },
        {
        id: 15,
        item_type: TARGET,
        image: './img/14e.png',
        sound: './sounds/amb_L_die_narzisse_schlagt_mia.wav',
        bias_onset: 1000, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: AMB
    },
        {
        id: 16,
        item_type: TARGET,
        image: './img/15e.png',
        sound: './sounds/mkd_L_mia_verfolgt_den_stern.wav',
        bias_onset: 3700, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: LEFT
    },
        {
        id: 17,
        item_type: TARGET,
        image: './img/16e.png',
        sound: './sounds/amb_R_johann_sieht_die_maus.wav',
        bias_onset: 3700, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: AMB
    },
        {
        id: 18,
        item_type: TARGET,
        image: './img/17e.png',
        sound: './sounds/mkd_L_der_schwan_verfolgt_mia.wav',
        bias_onset: 1000, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: LEFT
    },
        {
        id: 19,
        item_type: TARGET,
        image: './img/18e.png',
        sound: './sounds/mkd_R_johann_sieht_der_panda.wav',
        bias_onset: 3700, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: RIGHT
    },    
        {
        id: 20,
        item_type: TARGET,
        image: './img/19e.png',
        sound: './sounds/amb_R_johann_liebt_die_biene.wav',
        bias_onset: 3700, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: AMB
    },
        {
        id: 21,
        item_type: TARGET,
        image: './img/20e.png',
        sound: './sounds/mkd_R_den_elefant_fangt_johann.wav',
        bias_onset: 1000, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: RIGHT
    },
      {
        id: 22,
        item_type: TARGET,
        image: './img/21e.png',
        sound: './sounds/mkd_R_der_fisch_schlagt_johann.wav',
        bias_onset: 1000, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: RIGHT
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
        sound: './sounds/mkd_R_der_piranha_verfolgt_johann.wav',
        bias_onset: 1000, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: RIGHT
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
        sound: './sounds/mkd_L_den_koala_verfolgt_mia.wav',
        bias_onset: 1000, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: LEFT
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
        sound: './sounds/amb_R_johann_verfolgt_die_kuh.wav',
        bias_onset: 3700, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: AMB
    },
        {
        id: 29,
        item_type: TARGET,
        image: './img/28e.png',
        sound: './sounds/mkd_R_den_delfin_liebt_johann.wav',
        bias_onset: 1000, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: RIGHT
    },
        {
        id: 30,
        item_type: TARGET,
        image: './img/29e.png',
        sound: './sounds/mkd_L_johann_sieht_der_loffel.wav',
        bias_onset: 3700, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: LEFT
    },
        {
        id: 31,
        item_type: TARGET,
        image: './img/30e.png',
        sound: './sounds/mkd_R_mia_fangt_den_pinguin.wav',
        bias_onset: 3700, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: RIGHT
    },
        {
        id: 32,
        item_type: TARGET,
        image: './img/31e.png',
        sound: './sounds/amb_L_die_konigin_schlagt_johann.wav',
        bias_onset: 1000, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: AMB
    },
    {
        id: 33,
        item_type: TARGET,
        image: './img/32e.png',
        sound: './sounds/amb_R_die_nachtigall_fangt_johann.wav',
        bias_onset: 1000, // After 4000 ms the sentence should cause a bias in looking behavior
        expected_answer: true,
        target_pos: AMB
    },
];