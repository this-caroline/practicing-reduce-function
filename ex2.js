const { spells } = require('./mock')

//Write a function that returns an array of all the spell names.
function getSpellName(spells){
    return spells.reduce((acc, curr) => acc.concat(curr.name), [])
}

console.log('2.1:', getSpellName(spells))

//2. Write a function that returns an array of spell objects that have a level higher than 1, with each object holding the spell name and level:
function getSpellLevel(spells){
    return spells.reduce((acc, curr, index)=>{
        if(curr.level > 1){
            acc.push({ index: index+1, name: curr.name , level: curr.level })
        }
        return acc
    }, [])
}

console.log('2.2:', getSpellLevel(spells))
