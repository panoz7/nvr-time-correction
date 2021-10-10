const screenTimeInput = document.getElementById('screen-time');
const actualTimeInput = document.getElementById('actual-time');
const correctionTimeInput = document.getElementById('correction-time');
const calculateCorrectionButton = document.getElementById('calculate-correction');
const correctedTimeOutput = document.getElementById('corrected-time');

calculateCorrectionButton.addEventListener('click', calculateCorrectTime);

function calculateCorrectTime() {
    const screenTime = screenTimeInput.value;
    const actualTime = actualTimeInput.value;
    const correctionTime = correctionTimeInput.value;
   
    const deviceDelta = dateFromTimeStr(screenTime).getTime() - dateFromTimeStr(actualTime).getTime();
    const correctedTime = new Date(dateFromTimeStr(correctionTime).getTime() - deviceDelta);

    correctedTimeOutput.innerHTML = correctedTime.toTimeString();
}

function dateFromTimeStr(timeStr) {
    const [h,m,s] = timeStr.split(':')
    return new Date(2000,0,1,h,m,s);
}