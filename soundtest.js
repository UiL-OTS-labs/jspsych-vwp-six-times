//////////////
// soundtest
////////////

const AUDIO_PATH = './sounds/'; //currently not used!

const AUDIO_CHECK_PROMPT_TEXT_LOOP = `
    <p>
        Je kan nu nogmaals naar het geluid luisteren en het volume van je koptelefoon of
        oortjes harder of zachter zetten.
    </p>
    <p></p>
    <p>
        Als je het goed kan verstaan, mag je door klikken
    </p>
    `;

// audio test procedure

let test_audio_looped = {
    post_trial_gap: DEFAULT_ITI,
    timeline:
        [
            {
                type: jsPsychAudioButtonResponse,
                stimulus: './sounds/beep.mp3',
                choices: ['Luister opnieuw', 'Ga door'],
                prompt: function(){
                    return "<div class='instruction' >" +
                        '<p>' + AUDIO_CHECK_PROMPT_TEXT_LOOP + '</p></div>'
                }
            }
        ],
    loop_function: function(data){
        if (data.trials[0].response == 0){
            return true; // loop again!
        } else {
            return false; // continue
        }
    },
    on_finish: function(data) {
        data.audio_checked = true;
    }
};
