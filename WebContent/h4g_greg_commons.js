// Just keys for setup thingies. Not very interesting. 
// Down in this file there's a function to reset settings to default, and 
// populate the phraseDb for testing.

localStorageInitKey = "h4g_greg_firstRun";

localStoragePhraseListKey = "h4g_greg_phraseList";
localStoragePhraseWildKey = "h4g_greg_wildPhrases";
localStorageSelectDelayKey = "h4g_greg_selectDelay";
localStorageSelectDelayAutoKey = "h4g_greg_selectAuto";
localStorageLowModeDelayKey = "h4g_greg_exitDelay";

localStoragePrevKeyCodeKey = "h4g_greg_previousKey";
localStorageNextKeyCodeKey = "h4g_greg_nextKey";
localStorageDownKeyCodeKey = "h4g_greg_downKey";

function resetToDefaultSettings(){
	localStorage.setItem(localStoragePhraseListKey,"{}");
	localStorage.setItem(localStoragePhraseWildKey,"[]");
	localStorage.setItem(localStorageSelectDelayAutoKey,true);
	localStorage.setItem(localStorageSelectDelayKey,800);
	localStorage.setItem(localStorageDownKeyCodeKey,67);
	localStorage.setItem(localStorageNextKeyCodeKey,88);
	localStorage.setItem(localStoragePrevKeyCodeKey,90);
	localStorage.setItem(localStorageInitKey,true);
	localStorage.setItem(localStorageLowModeDelayKey,60000);
}

if (localStorage.getItem(localStorageInitKey) == null){
	resetToDefaultSettings();
}

// Change when not debugging
if (true){

	localStorage.setItem(localStoragePhraseListKey,
			JSON.stringify(
					{	"ocio":["Me apetece ver la televisión","Apaga la televisión, por favor","Quiero mirar por la ventana"],
						"higiene":["Necesito ir URGENTEMENTE al baño","Necesito ir al baño","Necesito una ducha"],
						"sentimientos":["Estoy contento","Quiero acabar con todos los humanos"]
					}));
}