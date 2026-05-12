////////////////
// SURVEY
///////////////

let repeat_survey = false;

let survey_1 = {
    type: IlsSurveyPlugin,
    fields: {
        pp_number: {label: 'Proefpersoonnummer'},
    },
    html: `
    <h4>Vul hier alsjeblieft je <b>proefpersoonnummer</b> in</h4>
    <div style="text-align: left">
	    <p>Wat is je proefpersoonnummer?</p>
        <div>
            <input type="number" name="pp_number" required>
        </div>
    </div>
    <div style="margin: 20px">
        <button class="jspsych-btn">Ga door</button>
    </div>
    `,
    reviewPrompt: "<h4>Klopt dit?</h4>",
    ok: "Dit klopt",
    cancel: "Verander",
    exclusion: function(data) {
        // return true when participant should be excluded
        // there are currently no exclusion criteria
        
        // accept participant otherwise
	    return false
    },
}

let survey_procedure = {
    timeline: [
        survey_1,
    ],
};
