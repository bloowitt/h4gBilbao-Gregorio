phraseDb = JSON.parse(localStorage.getItem(localStoragePhraseListKey));
wildPhraseArray = JSON.parse(localStorage.getItem(localStoragePhraseWildKey));

function setupSettingsPage(){
	var phraseMovingSelectContents = "";
	for (var elem in phraseDb){
		phraseMovingSelectContents = phraseMovingSelectContents + "<option value=" + elem + ">" + phraseDb[elem].name + "</option>";	
	};
	var elemCategoriesListString = "";
	for (var elem in phraseDb){
		var currentListElementString = "<li><span class='title'>";
		currentListElementString += phraseDb[elem].name;
		currentListElementString += "</span><ol>";
		for (var elem2 in phraseDb[elem].phrases){
			currentListElementString = currentListElementString + "<li>"; 
			currentListElementString += "<div class='buttons'>";
			currentListElementString += '<input type="button" value="Borrar"/>';
			currentListElementString += '<input type="button" value="Guardar" />';
			currentListElementString += '<select>';
			currentListElementString += phraseMovingSelectContents;
			currentListElementString += '</select></div>';
			currentListElementString = currentListElementString + "<span class='phrase'>" + phraseDb[elem].phrases[elem2] + "</span>";
			currentListElementString += "</li>";
		}
		currentListElementString +="</ol></li>";
		elemCategoriesListString += currentListElementString;
	};
	elemCategoriesListString
	$("#categoryList").html(elemCategoriesListString);
	
};

function saveSettings(){
	
};

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


function showPhrases(){
	$("#setupMenu").hide();
	$("#setupTab").removeClass("active");
	$("#phrasesMenu").show();
	$("#phraseTab").addClass("active");
};

function showSetup(){
	$("#setupMenu").show();
	$("#setupTab").addClass("active");
	$("#phrasesMenu").hide();
	$("#phraseTab").removeClass("active");
};