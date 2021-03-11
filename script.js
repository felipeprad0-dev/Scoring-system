let btn = document.getElementById("button-calculate");

function getTotalScore() {
    let score1 = parseInt(document.getElementById("score1").value);
    let score2 = parseInt(document.getElementById("score2").value);
    let totalScore = score1 + score2;
    let result = document.getElementById("result");
    let resultLetter= document.getElementById("result-letter");
    
    
    if (totalScore >= 90 && totalScore <= 100) {
        result.outerHTML = totalScore 
        resultLetter.outerHTML = 'A';
    } else if (totalScore >= 80 && totalScore < 90) {
        result.outerHTML = totalScore,
        resultLetter.outerHTML = 'B';
    } else if (totalScore >= 70 && totalScore < 80) {
        result.outerHTML = totalScore,
        resultLetter.outerHTML = 'C';
    } else if (totalScore >= 60 && totalScore < 70) {
        result.outerHTML = totalScore,
        resultLetter.outerHTML = 'D';
    } else if (totalScore < 60 && totalScore >= 0) {
        result.outerHTML = totalScore,
        resultLetter.outerHTML = 'E';
    } else {
        alert('Invalid score!');
        console.log('Invalid score!');
    }
}

btn.addEventListener('click', getTotalScore);

