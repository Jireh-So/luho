consoleText(['Web Design','UI/UX Design','Data Entry',''], 'text');

function consoleText(words, id) {
  var target = document.getElementById(id);
  var currentIndex = 0;
  var currentWord = '';
  var interval = setInterval(function() {
    if (currentWord.length !== words[currentIndex].length) {
      currentWord = words[currentIndex].slice(0, currentWord.length + 1);
      target.innerHTML = currentWord;
    } else {
      clearInterval(interval);
      setTimeout(function() {
        currentIndex = (currentIndex + 1) % words.length;
        currentWord = '';
        interval = setInterval(arguments.callee, 100);
      }, 1000);
    }
  }, 100);
}
