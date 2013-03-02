var waitingState = true;
var timeWithoutPulsations = 0; 
var frameTime = 200;
var curSection = null;
var curPhraseIdx = null;

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

function settingsPopulate(){
	for (var elem in phraseDb){
		var listCategory = $("<li class='category' id='" + elem + "'>" + elem + "</li>");
		listCategory.hide();
		var listCategoryPhraseList = $("<ol class='phraseList'></ol>");
		for (var phrase in phraseDb[elem]){
			var listPhrase = $("<li class='phrase'><button onclick='settingsDelPhrase(\""+ elem + "\"," + phrase + ")'>-</button>" + phraseDb[elem][phrase] + "</li>");
			listCategoryPhraseList.append(listPhrase);
		}
		listCategory.append(listCategoryPhraseList);
		$("#themeList").append(listCategory);
		listCategory.show(400);
	}
	
};

function settingsSave(){
	
};

function settingsCancel(){
	
};

function settingsAddCategory(){
	
};

function settingsAddPhrase(category){
	
};

function settingsDelPhrase(cat, numFrase){
	alert("Quieres borrar la frase número " + numFrase + " de la categoría " + cat);
};