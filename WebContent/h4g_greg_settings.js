function settingsPopulate(){
	$('.category').remove();
	$('#themeList').hide();
	
	for (var elem in phraseDb){
		var listCategory = $("<li class='category' id='" + elem + "'>" + elem + "</li>");
		listCategory.hide(400);
		var listCategoryPhraseList = $("<ol class='phraseList'></ol>");
		for (var phrase in phraseDb[elem]){
			var listPhrase = $("<li class='phrase'><button onclick='settingsDelPhrase(\""+ elem + "\"," + phrase + ")'>-</button>" + phraseDb[elem][phrase] + "</li>");
			listCategoryPhraseList.append(listPhrase);
		}
		listCategory.append(listCategoryPhraseList);
		$("#themeList").append(listCategory);
		listCategory.show(400);	
	}
	
	$('#themeList').append($("<li class='category'><input type='text' id='newCategoryName' value='Nueva categoría aquí...'></input><button onclick='settingsAddCategory()'>+</button></li>"));
	$('#themeList').show(400);	
};

function settingsSave(){
	localStorage.setItem(localStoragePhraseListKey, JSON.stringify(phraseDb));
	localStorage.setItem(localStorageSelectDelayKey, $("#delayText").val());
	localStorage.setItem(localStorageSelectDelayAutoKey,($('#autoDelay:checked').val() == 'true'));   
	window.location = "index.html";
};

function settingsCancel(){
	window.location="index.html";
};

function settingsAddCategory(){
	phraseDb[$("#newCategoryName").val() ] = [];
	settingsPopulate();
};

function settingsAddPhrase(category,phrase){
	phraseDb.category.append(phrase);
	settingsPopulate();
};

function settingsDelPhrase(cat, numFrase){
	phraseDb.cat.splice(numFrase,1);
	settingsPopulate();
};

function showPhrases(){
	$("#setupMenu").hide();
	$("#setupTab").removeClass("active");
	$("#phrasesMenu").show();
	$("#phrasesTab").addClass("active");
};

function showSetup(){
	$("#setupMenu").show();
	$("#setupTab").addClass("active");
	$("#phrasesMenu").hide();
	$("#phrasesTab").removeClass("active");
};