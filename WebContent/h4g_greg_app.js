waitingState = true;
curSelectionIdx = 0;
timeWithoutPulsations = 0;
frameTime = 100;

iterationArray = [];
phraseDb = localStorage.getItem(localStoragePhraseListKey);

function populateIterationArray(){
	iterationArray = [];
	switch (iterationDepth){
		case 0:
			for (var elem in phraseDb){
				iterationArray.push(elem);
			};
		break;
		case 1:
			
		break;
	}
};

function nextElementKeyPressed(){
	curSelectionIdx = (curSelectionIdx+1)%iterationArray.length;
};

function chooseThisOneKeyPressed(){
};

function backKeyPressed(){
};

function keyPressed(e){
	timeWithoutPulsations = 0;
	// FIXME : This should only work with setup keys?
	if(waitingState){
		$("#waitingScreen").hide(100);
		$("#mainApp").slideDown(400);
		waitingState = false;
		return 0;
	}
	e = e || window.event;
	var k = e.keyCode || e.which;
	switch (k){
		case localStorage.getItem(localStoragePrevKeyCodeKey):
			backKeyPressed();
			break;
		case localStorage.getItem(localStorageDownKeyCodeKey):
			nextElementKeyPressed();
			break;
		case localStorage.getItem(localStorageNextKeyCodeKey):
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
