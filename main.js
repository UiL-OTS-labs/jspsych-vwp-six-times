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
    func: () => {uil.browser.getResolutionInfo()}
};

let enter_fullscreen = {
    type: jsPsychFullscreen,
    fullscreen_mode: true
}

let sound_test_instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
                <p>We will now play a test sound</p>
             `,
    choices: ['Got it'],
}

let camera_instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
                <p>In order to participate you must allow the experiment to use your camera.</p>
                <p>You will be prompted to do this on the next screen.</p>
                <p>If you do not wish to allow use of your camera, you cannot participate in this experiment.<p>
                <p>It may take up to 30 seconds for the camera to initialize after you give permission.</p>
             `,
    choices: ['Got it'],
}

let init_camera = {
    type: jsPsychWebgazerInitCamera
}

let calibration_instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
                <p>Now you'll calibrate the eye tracking, so that the software can use the image of your eyes to predict where you are looking.</p>
                <p>You'll see a series of dots appear on the screen</p>
                <p>Look at each dot as it appears on the screen, and keep looking until it disappears.</p>
             `,
    choices: ['Got it'],
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
    stimulus: `
                <p>Now we'll measure the accuracy of the calibration.</p>
                <p>Look at each dot as it appears on the screen, and keep looking until it disappears.</p>
             `,
    choices: ['Got it'],
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
    stimulus: `
                <p>The accuracy of the calibration is a little lower than we'd like.</p>
                <p>Let's try calibrating one more time.</p>
                <p>Look at each dot as it appears on the screen, and keep looking until it disappears.</p>
             `,
    choices: ['OK'],
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
    stimulus: `<p>Great, we're done with calibration!</p>`,
    choices: ['OK']
}

let begin_practice = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<p>Instructions for the practice phase go here</p>
               <p>Press any key to start.</p>`
}

let begin_test = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<p>Instructions for the test phase go here</p>
                        <p>Press any key to start.</p>`
}


let trial = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: jsPsych.timelineVariable('sound'),
    prompt: () => '<img id="image-stimulus" src="'+jsPsych.timelineVariable('image')+'"/>',
    choices: () => Object.values(getKeys()),
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
        data.answer = data.response.toLowerCase() == getKeys().yes.toLowerCase();
        data.correct = data.answer == jsPsych.timelineVariable('expected_answer');
    },
    css_classes: ['no-cursor']
}


let start_screen = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function() {
        return "<div class='instruction' >" +
            "<p>Initial instructions go here</p></div>";
    },
    choices: [OK_BUTTON_TEXT],
    response_ends_trial: true
};

let feedback_screen = {
    type: jsPsychSurveyText,
    preamble: '<p>The experiment is now complete. <strong>Please do not close this window yet.</strong></p>',
    questions: [
        {prompt: 'Do you have any further comments or feedback about the experiment? If not, please leave empty',
            rows: 5},
    ],
    on_load: function() {
        uil.saveJson(jsPsych.data.get().json(), ACCESS_KEY);
    },
    on_finish: function(data) {
        let payload = {
            feedback: data.response,
            ...jsPsych.data.dataProperties // adds subject id and list info
        }
        uil.saveJson(JSON.stringify(payload), ACCESS_KEY);
    }
};

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

let participant_keyboard_control_start = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function(){
        return `<div class="instruction">
            <p>Instruct the participant about questions and how to answer using the keyboard</p>
            <p>
                Hit your <kbd>${getKeys().yes}</kbd> key (<i>'yes'</i>) to start.
            </p>
            </div>`;
    },
    choices: function(){
        return [getKeys().yes];
    },
    trial_ends_after_response: true,
    post_trial_gap: 300,
    on_finish : function(data) {
        if (typeof data.rt === "number") {
            data.rt = Math.round(data.rt);
        }
    }
};

function getTimeline(stimuli) {
    let timeline = [];

    timeline.push(preload);
    timeline.push(start_screen);

    timeline.push(consent_procedure);
    timeline.push(survey_procedure);

    timeline.push(sound_test_instructions);
    timeline.push(test_audio_looped);

    // kb layout
    timeline.push(select_keyboard_layout);

    // kb important keys (keyboard.js)
    timeline.push(keyboard_set_key_left_procedure);
    timeline.push(keyboard_set_key_right_procedure);

    timeline.push(participant_keyboard_control_start);

    timeline.push(browser_data);
    timeline.push(camera_instructions);
    timeline.push(init_camera);
    timeline.push(enter_fullscreen);

    timeline.push(calibration_instructions);
    timeline.push(calibration);
    timeline.push(validation_instructions);
    timeline.push(validation);
    timeline.push(hide_dot);
    timeline.push(recalibrate);
    timeline.push(calibration_done);

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

    // Option 1: client side randomization:
    let stimuli = pickRandomList();
    kickOffExperiment(stimuli, getTimeline(stimuli));

    // Option 2: server side balancing:
    // Make sure you have matched your groups on the dataserver with the
    // lists in stimuli.js..
    // This experiment uses groups/lists list1, and list2 by default (see
    // stimuli.js).
    // Hence, unless you change lists here, you should created matching
    // groups there.
    // uil.session.start(ACCESS_KEY, (group_name) => {
    //     let stimuli = findList(group_name);
    //     kickOffExperiment(stimuli, getTimeline(stimuli));
    // });
}

// this function will eventually run the jsPsych timeline
function kickOffExperiment(stimuli, timeline) {

    let subject_id = uil.session.isActive() ?
        uil.session.subjectId() : jsPsych.randomization.randomID(8);
    let test_items = stimuli.table;
    let list_name = stimuli.list_name;

    if (PSEUDO_RANDOMIZE) {
        let shuffled = uil.randomization.randomizeStimuli(
            test_items,
            max_same_type=MAX_SUCCEEDING_ITEMS_OF_TYPE
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
