appStates = {waiting : 0, category : 1, phrase : 2};
appState = appStates.waiting;

timeWithoutPulsations = 0;
frameTime = 200;

curSection = null;
curPhraseIdx = null;

function nextElement(){};
function chooseThisOne(){};
function back(){
	
};

function keyPressed(e){
	if(appState == appStates.waiting){
		$("#waitingScreen").hide();
		$("#mainApp").show(400);
		return 0;
	}
	e = e || window.event;
	var k = e.keyCode || e.which;
	switch (k){
		case 90:
			back();
			break;
		case 88:
			nextElement();
			break;
		case 67:
			chooseThisOne();
			break;
	}
	
};

function setupApp(){
	$("#mainApp").hide();
	$("#waitingScreen").show();
	// convertTextToVoiceVoz("PRUEBA PRUEBOSA");
};

function timerTick(){
	if (appState == appStates.waiting){
		timeWithoutPulsations += frameTime;
	}
}
setInterval(frameTime,timerTick);

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
