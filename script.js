class HumanShip {
    constructor(hull, firePower, accuracy) {
        this.hull = 20
        this.firePower = 5
        this.accuracy = .7
    }

}
const h = new HumanShip()
// console.log(h)



class AlienShip {
    constructor(hull, firePower, accuracy) {
        this.hull = Math.round(Math.random() * (6 - 3)) + 3
        this.firePower = Math.round(Math.random() * (4 - 2)) + 2
        this.accuracy = Math.random() * (.8 - .6) + .6
    }
}
const p = new AlienShip()
// console.log(p)
function attack(h, alien) {
    console.log("In attack")
    // console.log(h)
    // console.log(alien)
    alien.hull -= h.firePower
    // console.log(alien.hull)

    if (alien.hull <= 0) {
        aliens.shift()
        return
    } else if (alien.hull > 0) {
        attackHuman(h, alien)
        // h.hull -= alien.firePower
    }
    // h.hull -= alien.firePower
    // console.log(h.hull)
    // console.log(h)
}
// attack(h, p)

function attackHuman(h, alien) {
    h.hull -= alien.firePower
    // console.log(h)
}
// continue working here^


const aliens = []
for (let i = 0; i < 6; i++) {
    aliens[i] = new AlienShip()
}
console.log(aliens)


if (Math.random() < aliens[0].accuracy) {
    console.log('You have been hit!');
}

for (let i = 0; i < aliens.length; i++) {
    // console.log("Human Ship")
    // console.log(h)
    // console.log("Alien Ship")
    // console.log(aliens)
    console.log(i)
    attack(h, aliens[i])
}



console.log("===========")
console.log(aliens)