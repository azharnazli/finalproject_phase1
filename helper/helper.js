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

function fight(player,monster){
    let monsterPower;
    let result;
    if(monster.ThreatId == 5) {
        monsterPower = Math.ceil(Math.random()*(130-50))+50
    } else if (monster.ThreatId == 4) {
        monsterPower = Math.ceil(Math.random()*(1300-500))+500
    } else if (monster.ThreatId == 3) {
        monsterPower = Math.ceil(Math.random()*(13000-5000))+5000
    } else if (monster.ThreatId == 2) {
        monsterPower = Math.ceil(Math.random()*(130000-50000))+50000
    } else if (monster.ThreatId == 1) {
        monsterPower = Math.ceil(Math.random()*(1300000-500000))+500000
    }
    result =  player.powerLevel - monsterPower
    if(result < 0 ) {
        result = "lose"
    } else {
        result = win
    }
    return result
}

module.exports = {
    quizResult,
    randomNumber
}