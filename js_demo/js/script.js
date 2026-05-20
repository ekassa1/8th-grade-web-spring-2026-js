function askName() {
    var nameReturn = document.getElementById('ask-name');
    var name = prompt('please enter your name in the box below.');
    if (name == '') {
        alert('Please try again.');
    } else {
        nameReturn.innerHTML = 'Hello ' + name + '! Nice to meet you!'
    }
    nameReturn.style.fontSize = '30px';
    nameReturn.style.color = 'aquamarine';
}

function askQuestion() {
    var p = prompt('does pinaple belong on pizza')
    if (p != null) {
        document.getElementById('ask-question').innerHTML = 'so your chose is ' + p + ', interesting...'
    }
}