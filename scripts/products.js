//Este archivo sirve como base de datos
export {inventory};

const getRandomQuantity = () =>{
    return Math.floor(Math.random()*50)+1;

}
const inventory = [
    { id: 1, nombre: "The Witcher 3: Wild Hunt", cantidad: getRandomQuantity(), precio: 79.95 + "€" },
    { id: 2, nombre: "The Legend of Zelda: Breath of the Wild", cantidad: getRandomQuantity(), precio: 59.99 + "€" },
    { id: 3, nombre: "Mass Effect: Legendary Edition", cantidad: getRandomQuantity(), precio: 69.99 + "€" },
    { id: 4, nombre: "Call of Duty: Modern Warfare", cantidad: getRandomQuantity(), precio: 49.99 + "€" },
    { id: 5, nombre: "Red Dead Redemption 2", cantidad: getRandomQuantity(), precio: 89.95 + "€" },
    { id: 6, nombre: "Uncharted 4: A Thief's End", cantidad: getRandomQuantity(), precio: 39.99 + "€" },
    { id: 7, nombre: "The Sims 4", cantidad: getRandomQuantity(), precio: 49.95 + "€" },
    { id: 8, nombre: "The Elder Scrolls V: Skyrim", cantidad: getRandomQuantity(), precio: 74.99 + "€" },
    { id: 9, nombre: "Resident Evil 2 Remake", cantidad: getRandomQuantity(), precio: 54.95 + "€" },
    { id: 10, nombre: "Subnautica", cantidad: getRandomQuantity(), precio: 64.99 + "€" },
    { id: 11, nombre: "Cyberpunk 2077", cantidad: getRandomQuantity(), precio: 69.99 + "€" },
    { id: 12, nombre: "Horizon Zero Dawn", cantidad: getRandomQuantity(), precio: 49.99 + "€" },
    { id: 13, nombre: "Assassin's Creed Valhalla", cantidad: getRandomQuantity(), precio: 59.95 + "€" },
    { id: 14, nombre: "FIFA 22", cantidad: getRandomQuantity(), precio: 44.99 + "€" },
    { id: 15, nombre: "Minecraft", cantidad: getRandomQuantity(), precio: 29.99 + "€" },
    { id: 16, nombre: "Dark Souls III", cantidad: getRandomQuantity(), precio: 39.95 + "€" },
    { id: 17, nombre: "Hades", cantidad: getRandomQuantity(), precio: 24.99 + "€" },
    { id: 18, nombre: "Overwatch", cantidad: getRandomQuantity(), precio: 39.99 + "€" },
    { id: 19, nombre: "Death Stranding", cantidad: getRandomQuantity(), precio: 49.95 + "€" },
    { id: 20, nombre: "Final Fantasy VII Remake", cantidad: getRandomQuantity(), precio: 69.95 + "€" },
]
        

