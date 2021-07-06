let details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
};

let sentenceList = [];
for (i in details) {
  sentenceList.push(i);
  sentenceList.push(details[i]);
}

newSentence = sentenceList.join(" ");
console.log(newSentence);
