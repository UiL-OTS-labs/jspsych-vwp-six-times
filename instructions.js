
const GOT_IT = "Got it";

const TEST_SOUND_INSTRUCTION =  `<p>We will now play a test sound</p>`;

const CAMERA_INSTRUCTION = `
    <p>In order to participate you must allow the experiment to use your camera.</p>
    <p>You will be prompted to do this on the next screen.</p>
    <p>If you do not wish to allow use of your camera, you cannot participate in this
    experiment.<p>
    <p>It may take up to 30 seconds for the camera to initialize after you give
    permission.</p>`;

const CALIBRATION_INSTRUCTION = `
    <p>Now you'll calibrate the eye tracking, so that the software can use the
    image of your eyes to predict where you are looking.</p>
    <p>You'll see a series of dots appear on the screen</p>
    <p>Look at each dot as it appears on the screen, and keep looking until
    it disappears.</p>`;

const VALIDATION_INSTRUCTION = `
    <p>Now we'll measure the accuracy of the calibration.</p>
    <p>Look at each dot as it appears on the screen, and keep looking
    until it disappears.</p>`;

const RECALIBRATION_INSTRUCTION = `
    <p>The accuracy of the calibration is a little lower than we'd like.</p>
    <p>Let's try calibrating one more time.</p>
    <p>Look at each dot as it appears on the screen, and keep looking until
    it disappears.</p>`;

const CALIBRATION_DONE_INSTRUCTION = `<p>Great, we're done with calibration!</p>`;

const BEGIN_PRACTICE_INSTRUCTION = `
    <p>Instructions for the practice phase go here</p>
    <p>Press any key to start.</p>`;

const BEGIN_TEST_INSTRUCTION = `
    <p>Instructions for the test phase go here</p>
    <p>Press any key to start.</p>
    `;

const FEEDBACK_SCREEN_INSTRUCTION = `<p>The experiment is now complete.
    <strong>Please do not close this window yet.</strong></p>`;

const FEEDBACK_PROMPT = `Do you have any further comments or feedback about the 
    experiment? If not, please leave empty`

const SAVE_LOCAL_INSTRUCTION_1 =
    `<h1>Unable to save data</h1>
    <p>The data is saved in your downloads folder: as <b>`;

const SAVE_LOCAL_INSTRUCTION_2 = `</b></p>
    <p>Please send this file to the instructor</p>
    <p>Press the ok button to continue</p>`;

const END_EXPERIMENT_INSTRUCTION = 
    `<p>Thank you for participating, you will now be redirected to Prolific</p>`;
