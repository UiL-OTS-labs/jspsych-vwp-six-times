"use strict";

let jsPsych = initJsPsych({
    override_safe_mode : true,
    extensions: [
        {type: jsPsychExtensionWebgazer}
    ],
    exclusions: {
        min_width: MIN_WIDTH,
        min_height: MIN_HEIGHT
    },
    on_finish: function() {
        uil.saveData(ACCESS_KEY);
    }
});

let preload = {
    type: jsPsychPreload,
    images: [],
}

let browser_data = {
    type: jsPsychCallFunction,
    func: () => uil.browser.getResolutionInfo()
};

let enter_fullscreen = {
    type: jsPsychFullscreen,
    fullscreen_mode: true
}

let sound_test_instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: TEST_SOUND_INSTRUCTION,
    choices: [GOT_IT],
}

let camera_instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: CAMERA_INSTRUCTION,
    choices: [GOT_IT],
}

let init_camera = {
    type: jsPsychWebgazerInitCamera
}

let calibration_instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: CALIBRATION_INSTRUCTION,
    choices: [GOT_IT],
}

let calibration = {
    type: jsPsychWebgazerCalibrate,
    calibration_points: CALIBRATION_POINTS,
    repetitions_per_point: 2,
    randomize_calibration_order: true,
    calibration_mode: CALIBRATION_CLICK ? 'click':'view',
    css_classes: ['no-cursor']
}

let validation_instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: VALIDATION_INSTRUCTION,
    choices: [GOT_IT],
    post_trial_gap: 1000
}

let validationObserver;

let validation = {
    type: jsPsychWebgazerValidate,
    validation_points: CALIBRATION_POINTS,
    roi_radius: 200,
    time_to_saccade: 1000,
    validation_duration: 2000,
    show_validation_data: true,
    data: {
        task: 'validate'
    },
    css_classes: ['no-cursor'],

    /*
      we want to hide the cursor during validation but show it when validation is done so that
      the participant can find their way to the continue button. This could be done by disqualifying
      the '.no-cursor' css class using ':has(button)', but that's a bit too new for some browsers.
      since jsPsych's webgazer validate plugin doesn't tell us when validation is complete (it's still the same "trial")
      I use a MutationObserver to detect the right moment where the .no-cursor class can be removed.
      */
    on_load: function() {
        validationObserver = new MutationObserver((mutationList, observer) => {
            // each validation point results in a mutation of a single child.
            // when validation is complete, there's a big mutation with many elements
            mutationList.forEach(mutation => {
                if (mutation.addedNodes.length > 1) {
                    document.querySelector('.no-cursor').classList.remove('no-cursor');
                }
            });
        });
        validationObserver.observe(document.querySelector('#webgazer-validate-container'), {childList: true});
    },
    on_finish: function() {
        validationObserver.disconnect();
    }
}

let recalibrate_instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: RECALIBRATION_INSTRUCTION,
    choices: [OK_BUTTON_TEXT],
}

let hide_dot = {
    type: jsPsychCallFunction,
    func: function() {
        jsPsych.extensions["webgazer"].hidePredictions();
    }
}

let recalibrate = {
    timeline: [hide_dot, recalibrate_instructions, calibration, validation_instructions, validation, hide_dot],
    conditional_function: function(){
        let validation_data = jsPsych.data.get().filter({task: 'validate'}).values()[0];
        return validation_data.percent_in_roi.some(function(x){
            let minimum_percent_acceptable = 50;
            return x < minimum_percent_acceptable;
        });
    },
    data: {
        phase: 'recalibration'
    }
}

let calibration_done = {
    type: jsPsychHtmlButtonResponse,
    stimulus: CALIBRATION_DONE_INSTRUCTION,
    choices: [OK_BUTTON_TEXT]
}

let begin_practice = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: BEGIN_PRACTICE_INSTRUCTION,
}

let begin_test = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: BEGIN_TEST_INSTRUCTION,
}


let trial = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: jsPsych.timelineVariable('sound'),
    prompt: () => '<img id="image-stimulus" src="'+jsPsych.timelineVariable('image')+'"/>',
    choices: [],
    trial_ends_after_audio: true,
    extensions: [
        {
            type: jsPsychExtensionWebgazer,
            params: {targets: ['#image-stimulus']}
        }
    ],
    on_finish: function(data) {
        data.id = jsPsych.timelineVariable('id');
        data.item_type = jsPsych.timelineVariable('item_type');
        data.image = jsPsych.timelineVariable('image');
        data.sound = jsPsych.timelineVariable('sound');
        data.answer = data.response;
        data.correct = data.answer == jsPsych.timelineVariable('expected_answer');
        data.bias_onset = jsPsych.timelineVariable('bias_onset');
    },
    css_classes: ['no-cursor']
}


let start_screen = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function() {
        return START_SCREEN_INSTRUCTION; 
    },
    choices: [OK_BUTTON_TEXT],
    response_ends_trial: true
};

let feedback_screen = {
    type: jsPsychSurveyText,
    data_saved: undefined, // true or false after upload succeeds/fails
    preamble: FEEDBACK_SCREEN_INSTRUCTION,
    questions: [
        {
            prompt: FEEDBACK_PROMPT,
            rows: 5
        },
    ],
    on_load: function() {
        uil.saveJson(jsPsych.data.get().json(), ACCESS_KEY)
            .then(() => feedback_screen.data_saved = true)
            .catch(() => feedback_screen.data_saved = false);
    },
    on_finish: function(data) {
        let payload = {
            feedback: data.response,
            ...jsPsych.data.dataProperties // adds subject id and list info
        }
        uil.saveJson(JSON.stringify(payload), ACCESS_KEY);
    }
};

// Is ran when the data isn't saved correctly
let save_local = {
    type: jsPsychHtmlButtonResponse,
    name: "",
    stimulus: function () {
        return SAVE_LOCAL_INSTRUCTION_1 + `${save_local.name}` +
               SAVE_LOCAL_INSTRUCTION_2;
    },
    on_load : function () {
        jsPsych.data.get().localSave("json", save_local.name);
    },
    choices: [OK_BUTTON_TEXT],
}

let test_manual_save_data = {
    timeline : [ save_local ],
    conditional_function: function () {
        return feedback_screen.data_saved === false;
    }
}

let end_experiment = {
    type : jsPsychHtmlKeyboardResponse,
    stimulus : '<p>Thank you for participating, you will now be redirected to Prolific</p>',
    choices : [],
    trial_duration: 5000,
    on_finish: function() {
        location.href = PROLIFIC_COMPLETION_URL;
    }
};


function getKeys()
{
    if (participant_info.hand_pref === ParticipantInfo.RIGHT) {
        return {
            yes: KEYBOARD_DEFAULTS[chosen_keyboard].right_key,
            no: KEYBOARD_DEFAULTS[chosen_keyboard].left_key
        };
    }

    return {
        no: KEYBOARD_DEFAULTS[chosen_keyboard].right_key,
        yes: KEYBOARD_DEFAULTS[chosen_keyboard].left_key
    };
}

// let participant_keyboard_control_start = {
//     type: jsPsychHtmlKeyboardResponse,
//     stimulus: function(){
//         return `<div class="instruction">
//             <p>Instruct the participant about questions and how to answer using the keyboard</p>
//             <p>
//                 Hit your <kbd>${getKeys().yes}</kbd> key (<i>'yes'</i>) to start.
//             </p>
//             </div>`;
//     },
//     choices: function(){
//         return [getKeys().yes];
//     },
//     trial_ends_after_response: true,
//     post_trial_gap: 300,
//     on_finish : function(data) {
//         if (typeof data.rt === "number") {
//             data.rt = Math.round(data.rt);
//         }
//     }
// };

function getTimeline(stimuli) {

    let short_version = getShort();

    let timeline = [];

    timeline.push(preload);
    timeline.push(start_screen);

    if (!short_version) {
        timeline.push(consent_procedure);
        timeline.push(survey_procedure);

        timeline.push(sound_test_instructions);
        timeline.push(test_audio_looped);

        // // kb important keys (keyboard.js)
        // timeline.push(keyboard_set_key_left_procedure);
        // timeline.push(keyboard_set_key_right_procedure);

        // timeline.push(participant_keyboard_control_start);
    }

    timeline.push(browser_data);

    timeline.push(camera_instructions);
    timeline.push(init_camera);
    if (!short_version) {
        timeline.push(enter_fullscreen);

        timeline.push(calibration_instructions);
        timeline.push(calibration);
        timeline.push(validation_instructions);
        timeline.push(validation);
        timeline.push(hide_dot);
        timeline.push(recalibrate);
        timeline.push(calibration_done);
    }

    timeline.push(begin_practice);
    let practice = {
        timeline: [
            trial
        ],
        timeline_variables: getPracticeItems().table,
        randomize_order: false,
    };
    timeline.push(practice);

    timeline.push(begin_test);
    let test = {
        timeline: [
            trial,
        ],
        timeline_variables: stimuli.table
    }
    timeline.push(test);

    timeline.push(feedback_screen);
    timeline.push(test_manual_save_data);
    timeline.push(end_experiment);

    return timeline;
}

function main() {
    // Make sure you have updated your key in globals.js
    uil.setAccessKey(ACCESS_KEY);
    uil.stopIfExperimentClosed();

    // capture info from Prolific
    var subject_id = jsPsych.data.getURLVariable('PROLIFIC_PID');
    var study_id = jsPsych.data.getURLVariable('STUDY_ID');
    var session_id = jsPsych.data.getURLVariable('SESSION_ID');

    jsPsych.data.addProperties({
        subject_id: subject_id,
        study_id: study_id,
        session_id: session_id
    });

    // // TODO Remove this
    // // Enable test at localhost:8001
    uil.useCustomServer("http://localhost:8001/api/");

    // Option 1: client side randomization:
    // let stimuli = pickRandomList();
    // kickOffExperiment(stimuli, getTimeline(stimuli));

    // Option 2: server side balancing:
    // Make sure you have matched your groups on the dataserver with the
    // lists in stimuli.js..
    // This experiment uses groups/lists list1, and list2 by default (see
    // stimuli.js).
    // Hence, unless you change lists here, you should created matching
    // groups there.
    uil.session.start(ACCESS_KEY, (group_name) => {
        
        let stimuli = findList(getListNum());
        kickOffExperiment(stimuli, getTimeline(stimuli));
    });
}

// this function will eventually run the jsPsych timeline
function kickOffExperiment(stimuli, timeline, sessionId) {

    let subject_id = uil.session.isActive() ?
        uil.session.subjectId() : jsPsych.randomization.randomID(8);
    save_local.name = `Data-${subject_id}.json`
    let test_items = stimuli.table;
    let list_name = stimuli.list_name;

    if (PSEUDO_RANDOMIZE) {
        let shuffled = uil.randomization.randomizeStimuli(
            test_items,
            MAX_SUCCEEDING_ITEMS_OF_TYPE
        );
        if (shuffled !== null)
            test_items = shuffled;
        else
            console.error('Unable to shuffle stimuli according constraints.')
    }

    // data one would like to add to __all__ trials, according to:
    // https://www.jspsych.org/overview/data/
    jsPsych.data.addProperties (
        {
            subject : subject_id,
            list : list_name,
        }
    );

    // Start jsPsych when running on a Desktop or Laptop style pc.
    uil.browser.rejectMobileOrTablet();
    jsPsych.run(timeline);
}
