
const GOT_IT = "Begrepen";

const TEST_SOUND_INSTRUCTION =  `<p>
    We gaan nu het geluid een keertje testen.
    Draag vanaf nu <b>oordopjes of een koptelefoon</b> tijdens de rest van dit taakje.
    </p>`;

const FULLSCREEN_INSTRUCTION = `<p>Het taakje zal nu het volledige scherm gaan
    gebruiken als jij op de knop hierbeneden klikt.</p>`;

const CAMERA_INSTRUCTION = `
    <p>Om mee te kunnen doen, moet je het taakje <b>toestaan</b> om je
    camera te gebruiken.
    </p>
    <p>Dit vragen we je op het volgende scherm te doen.</p>
    <p>Als je geen toestemming geeft om je camera te gebruiken kun je niet meedoen aan het taakje.<p>
    <p>Het kan tot 30 seconden duren voordat de camera opstart nadat je toestemming gegeven hebt.</p>`;

const CAMERA_INIT_INSTRUCTION = `
    <p>Probeer je hoofd op de goede plaats te houden zodat de webcam je ogen ook goed kan zien.</p>
    <p>
        Houd je gezicht in het midden in het vakje en kijk recht naar de camera. Het is
        heel belangrijk dat je je hoofd goed stil probeert te houden tijdens het taakje.
        Ga er daarom goed voor zitten en neem je tijd om een fijne houding aan te nemen.
        Als je je gezicht op de goede plaats houdt, wordt het vakje groen.
        Je kunt dan doorklikken.
    </p>`

const CALIBRATION_INSTRUCTION = `
    <p>Nu gaan we de eye-tracker kalibreren.</p>
    <p></p>
    <p>Op die manier kunnen we met de beelden van
    je ogen voorspellen waar je naartoe kijkt.</p>
    <p></p>
    <p>Je ziet zo meteen een reeks punten verschijnen op het scherm.</p>
    
    <p>Kijk goed naar iedere punt als deze op het scherm verschijnt,
    en blijf ernaar kijken totdat de punt weer verdwijnt.</p>`;


const VALIDATION_INSTRUCTION = `
    <p>Nu berekenen we of de kalibratie goed verlopen is.</p>
    <p>Kijk wederom goed naar iedere punt als deze op het scher verschijnt
    en blijf er naar kijken totdat de punt weer verdwijnt.</p>`;

const RECALIBRATION_INSTRUCTION = `
    <p>De kalibratie is iets minder goed verlopen dan we zouden willen.
Laten we dat nog één keer proberen.</p>
    <p>Kijk goed naar iedere punt als deze op het scherm verschijnt,
en blijf ernaar kijken totdat de punt weer verdwijnt</p>
    <p></p>`;


const CALIBRATION_DONE_INSTRUCTION = `<p>Super, we zijn klaar met de kalibratie!</p>`;

const BEGIN_PRACTICE_INSTRUCTION = `
    <p>We beginnen eerst met een oefengedeelte.</p>
    <p>Druk op een willekeurige knop om te beginnen.</p>`;

const BEGIN_TEST_INSTRUCTION = `
    <p>Nu gaat het echte taakje beginnen.</p>
    <p>Druk op een willekeurige knop om te beginnen.</p>
    `;

const FEEDBACK_SCREEN_INSTRUCTION = `<p>
    Het taakje is klaar, <strong>maar sluit het tabblad niet af</strong>.
    </p>`;

const FEEDBACK_PROMPT = `Heb je nog aan- of opmerkingen over het experiment?
    Laat dat dan even weten hierbeneden. Is dat niet het geval, laat het invulvakje
    dan leeg.`;

const SAVE_LOCAL_INSTRUCTION_1 =
    `<h1>Unable to save data</h1>
    <p>The data is saved in your downloads folder: as <b>`;

const SAVE_LOCAL_INSTRUCTION_2 = `</b></p>
    <p>Please send this file to the instructor</p>
    <p>Press the ok button to continue</p>`;

const END_EXPERIMENT_INSTRUCTION = 
    `<p>Bedankt voor het meedoen!</p>`;
