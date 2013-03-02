appStates = {waiting : 0, category : 1, phrase : 2};
appState = appStates.waiting;

timeWithouPulsations = 0;
var timeWithoutPulsations = 0; 
var frameTime = 200;
var curSection = null;
var curPhraseIdx = null;

if (localStorage.getItem(localStoragePhraseListKey) == null){phraseDb = {};}
else { phraseDb = JSON.parse(localStorage.getItem(localStoragePhraseListKey));}

function nextElement(){};
function chooseThisOne(){};
function back(){};

function keyPressed(e){
	if(waitingState){
		startChoosing();
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
	
};

function timerTick(){
	if (!waitingState){
		timeWithoutPulsations += frameTime;
	}
}
setInterval(frameTime,timerTick);

