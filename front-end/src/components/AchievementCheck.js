export function checkForAchievements(historyData) {
	var achievements = [];
	if (checkForSpaghetti(historyData)) {
		achievements.push( { 
			'text': 'YEAH! SPAGHETTI!', 
			'image': 'spaghetti-award.png' });
	}

	if (checkForBusyBee(historyData)) {
		achievements.push( { 
			'text': 'Busy Bee', 
			'image': 'busy-bee.png' });
	}

	if (checkForGettingHappier(historyData)) {
		achievements.push( { 
			'text': "Trending Up!", 
			'image': 'trending-up.png' });
	}
	return achievements;
}

/**
* Returns true if user has the word spaghetti in any of their entries
*/
function checkForSpaghetti(historyData) {
	for (var i = 0; i < historyData.length; i++) {
		var entry = historyData[i];
		if (entry.entry.search(new RegExp("spaghetti", "i")) !== -1) {
			return true;
		}
	}
	return false;
}


/**
* Returns true if user has 5 or more entries in past 5 days.
*/
function checkForBusyBee(historyData) {
	var fiveDaysAgo = new Date();
	fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5);
	var count = 0;
	for (var i = 0; i < historyData.length; i++) {
		var entry = historyData[i];
		if (new Date(entry.date) > fiveDaysAgo) {
			count++;
		}

	}
	return count >= 5;
}

/**
* Returns true if the user has 3 or more entries 
* and the most recent 3 trend upwards in happiness
*/
function checkForGettingHappier(historyData) {
	if (historyData.length < 3) {
		return false;
	}
	var lastThreeEntries = historyData.slice(0, 3).reverse()
	var latestScore = -101;
	for (var i = 0; i < 3; i++) {
		var entry = lastThreeEntries[i];
		if (entry.sentimentData.feeling > latestScore) {
			latestScore = entry.sentimentData.feeling;
		} else {
			return false;
		}
	}
	return true;
}