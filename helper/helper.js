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
        monsterPower = Math.ceil(Math.random()*(80-20))+20
    } else if (monster.ThreatId == 4) {
        monsterPower = Math.ceil(Math.random()*(200-100))+100
    } else if (monster.ThreatId == 3) {
        monsterPower = Math.ceil(Math.random()*(5000-1000))+1000
    } else if (monster.ThreatId == 2) {
        monsterPower = Math.ceil(Math.random()*(10000-3000))+3000
    } else if (monster.ThreatId == 1) {
        monsterPower = Math.ceil(Math.random()*(50000-5000))+5000
    }
    result =  player.powerLevel - monsterPower
    if(result <= 0 ) {
        result = "lose"
    } else {
        result = "win"
    }
    return result
}

function checkClass(data){
    let clas
    if(data.powerLevel<=60){
        clas = 4
    } else if (data.powerLevel<=100) {
        clas = 3
    } else if (data.powerLevel<=5500) {
        clas = 2
    } else {
        clas = 1
    }
    return clas
}


module.exports = {
    quizResult,
    randomNumber,
    fight,
    checkClass
}