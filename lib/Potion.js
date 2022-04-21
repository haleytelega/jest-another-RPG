function Potion (name) {
    this.types = ['strenth', 'agility', 'health'];
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)]; //either name is health or randomizes the types

    if (this.name === 'health'){
        this.value = Math.floor(Math.random() * 10 + 30);
    } else {
        this.value = Math.floor(Math.random() * 5 + 7);
    }
}

module.exports = Potion //set as constructor so tests can create new potions