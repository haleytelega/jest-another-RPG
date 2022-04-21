const Player = require('../lib/Player');
const Potion = require('../lib/Potion'); //Potion is now a usable variable

jest.mock('../lib/Potion'); //replaces the constructors implementation with our fake data.

console.log(new Potion());

test('creates a player object', () => {
    const player = new Player('Haley');

    expect(player.name).toBe('Haley');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)])
    );
});