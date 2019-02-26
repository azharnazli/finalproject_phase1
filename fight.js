//database heroes
let hero = {
  id: 1,
  name: 'goku',
  powerLevel: 101,
  agi: 1,
  str: 1,
  int: 1,
}

//helper
function randomMonster(data){
  if(data.threatName === 'wolf'){
    data.monsterPower = Math.ceil(Math.random()*(130-50))+50
  }
  return data
}
//helper
function fight(objHero,objVillain){
  let result = objHero.powerLevel - objVillain.monsterPower
  console.log(objVillain.monsterPower, objHero.powerLevel,result)
  return result < 0 ? result = 'lose' : result = 'win'
}

//database threat
const threat ={
  threatName : 'wolf',
  monsterPower : 0
}


const monster = randomMonster(threat)
let result = fight(hero,monster)
console.log(result)

