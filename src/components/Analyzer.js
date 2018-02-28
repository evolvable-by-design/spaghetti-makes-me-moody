/* 
Translates sentiment analysis and text classification data 
into human readable forms. 
*/

/*
Returns 1. feeling: from -100 to 100 indicating positivity/negativity
		2. feedback: a random phrase from our phrase-bank.
*/

// -60 or lower
const veryNegative = [
  'Wow you feel terrible!',
  'Make sure you reach out if you need help!',
  'Sounds like you need a big bowl of spaghetti'
];
// -30 to -59
const negative = [
  'Aw shucks.',
  'Maybe watching some standup comedy will cheer you up.',
  'Better luck next time!'
];
// -10 to -29
const slightlyNegative = [
  'We hope your day gets better!',
  'At least it could be worse.',
  'Maybe eating a snack will help.'
];
// -9 to 9
const neutral = ['Boring.', "You're not very interesting, are you?", 'OK.'];
// 10 to 29
const slightlyPositive = [
  "Happy to hear you're having an alright day!",
  'You know what would make this day even better? SPAGHETTI.',
  'Love it! Keep up the good work.'
];
// 30 to 59
const positive = [
  'Yay! Glad to hear you are having a good day.',
  ':) :) :) :) :)',
  "Today is your day, isn't it?"
];
// 60 or higher
const veryPositive = [
  'WOOHOO. Sounds like you should reward yourself with some spaghetti!',
  'Spread the positivity!',
  'We hope everyday is this good for you.'
];

function getFeedbackText(score) {
  let randomText = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };
  if (score <= -60) {
    return randomText(veryNegative);
  }

  if (score <= -30) {
    return randomText(negative);
  }

  if (score <= -10) {
    return randomText(slightlyNegative);
  }

  if (score < 10) {
    return randomText(neutral);
  }

  if (score < 30) {
    return randomText(slightlyPositive);
  }

  if (score < 60) {
    return randomText(positive);
  }

  if (score <= 100) {
    return randomText(veryPositive);
  }
}

export function sentimentFeedback(data) {
  let magnitude = data.magnitude;
  let sentimentScore = data.score;
  let feelingScore = Math.max(
    -100,
    Math.min(10 ** magnitude * sentimentScore * 10, 100)
  );
  let text = getFeedbackText(feelingScore);
  console.log(feelingScore);
  console.log(text);
  return {
    feeling: feelingScore,
    feedback: text
  };
}

export function classificationFeedback(data) {
  return 'hehe';
}
