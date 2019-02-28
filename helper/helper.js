function quizResult(body){
    let point = 0;

    const answers = 
    {
        "1" : "A",
        "2" : "B",
        "3" : "B",
        "4" : "A",
        "5" : "B"
    }

    for(key in body){
        if(body[key] == answers[key]){
            point = point + 20
        }
    }
    return point
}


function randomNumber(value = 5) {
    const data = Math.ceil(Math.random() * value)
    return data
}


module.exports = {
    quizResult,
    randomNumber
}