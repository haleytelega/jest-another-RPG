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

test("gets player's stats as an object", () => {
    const player = new Player('Dave');

    expect(player.getStats()).toHaveProperty('potion');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
});

test('gets inventory from player or returns false', () => {
    const player = new Player('Haley');

    expect(player.getInventory()).toEqual(expect.any(Array));

    player.inventory = [];

    expect(player.getInventory()).toEqual(false);
});

test("gets players health value", () => {
    const player = new Player ('Haley');

    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString())); //.stringContaining makes sure our string includes our players health
});

test('checks if player is alive or not', () => {
    const player = new Player('Dave');

    expect(player.isAlive()).toBeTruthy();

    player.health = 0;

    expect(player.isAlive()).toBeFalsy();
});

test("subtracks from players health", () => {
    const player = new Player('Dave');
    const oldHealth = player.health;

    player.reduceHealth(5);

    expect(player.health).toBe(oldHealth - 5);
    player.reduceHealth(999999);
    expect(player.health).toBe(0);
});

test("gets player's attack value", () => {
    const player = new Player("Dave");
    player.strength = 10;

    expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(player.getAttackValue()).toBeLessThanOrEqual(15)
});

test('adds a potion to the inventory', () => {
    const player = new Player("Dave");
    const oldCount = player.inventory.length;

    player.addPotion(new Potion());

    expect(player.inventory.length).toBeGreaterThan(oldCount);
});

test('uses a potion from inventory', () => {
    const player = new Player ("Dave");
    player.inventory = [new Potion(), new Potion(), new Potion()];
    const oldCount = player.inventory.length;

    player.usePotion(1);
    
    expect(player.inventory.length).toBeLessThan(oldCount);
});