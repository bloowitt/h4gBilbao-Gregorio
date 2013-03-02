
phraseDb = JSON.parse(localStorage.getItem(localStoragePhraseListKey));

waitingState = true;
curSelectionIdx = 0;
timeWithoutPulsations = 0;
frameTime = 100;
// This is inelegant
selectedCategory = -1;
iterationArray = [];

function populateIterationArray(){
	iterationArray = [];
	if (selectedCategory == -1 ){
		for (var elem in phraseDb){
			iterationArray.push(phraseDb[elem].name);
		}
	} else {
		for (var elem in phraseDb[curSelectionIdx].phrases){
			iterationArray.push(phraseDb[curSelectionIdx].phrases[elem]);
		}
	}
	curSelectionIdx = 0;
	updateCentralText();
};

function nextElementKeyPressed(){
	curSelectionIdx = (curSelectionIdx+1) % iterationArray.length;
	updateCentralText();
};

function chooseThisOneKeyPressed(){
	if (selectedCategory == -1){
		selectedCategory = curSelectionIdx;
		populateIterationArray();
	}else {
		showPhrase(phraseDb[selectedCategory].phrases[curSelectionIdx]);
	}
};

function backKeyPressed(){
	selectedCategory = -1;
	populateIterationArray();
};

function updateCentralText(){
	$("#contentGoesHere").text(iterationArray[curSelectionIdx]);
};

function keyPressed(e){
	timeWithoutPulsations = 0;
	// FIXME : This should only work with setup keys?
	if(waitingState){
		$("#waitingScreen").hide(100);
		$("#mainApp").slideDown(400);
		waitingState = false;
		selectedCategory = -1;
		populateIterationArray();
		return 0;
	}
	e = e || window.event;
	var k = e.keyCode || e.which;
	switch (k){
		case parseInt(localStorage.getItem(localStoragePrevKeyCodeKey)):
			backKeyPressed();
			break;
		case parseInt(localStorage.getItem(localStorageDownKeyCodeKey)):
			nextElementKeyPressed();
			break;
		case parseInt(localStorage.getItem(localStorageNextKeyCodeKey)):
			chooseThisOneKeyPressed();
			break;
	}
	
};

function startWaitingState(){
	waitingState = true;
	$("#mainApp").hide(200);
	$("#waitingScreen").show(200);
};

function setupApp(){
	startWaitingState();
	
};

function timerTick(){
	if (!waitingState){
		timeWithoutPulsations = timeWithoutPulsations +  frameTime;
		if (timeWithoutPulsations >= localStorage.getItem(localStorageLowModeDelayKey)){
			startWaitingState();
		}
	} else {
		
	}
}
setInterval(timerTick,frameTime);

function lanzarError(err) {
    if (err) {
        alert(err.toString());
    }
}


function convertTextToVoiceVoz(texto){
	var idioma = 'es-ES';
	var tts = new GoogleTTS(idioma);
	
	tts.play(texto,idioma,lanzarError);
}

function showPhrase(stringFrase){
	curSelectionIdx = 0;
	selectedCategory = -1;
	/* METER AQUI LA VOZ*/
	startWaitingState();
};