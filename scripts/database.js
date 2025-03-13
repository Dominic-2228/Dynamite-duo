export const database = {
  heroes: [
    {
        id: 1,
        name: "Dynoguy",
        power: "Fire blasts"
    },
    {
        id: 2,
        name: "Hyperspeed",
        power: "Super speed"
    }
],

villains: [
  {
    id:1,
    name: "Herod",
    power: "Military Forces"
  },
  {
    id:2, 
    name: 'Goliath', 
    power: 'Tall, Warrior from youth'
  },
  {
    id:3, 
    name: 'Absolam',
    power: 'Long Hair'
  }
]
}

export const getVillain = () => {
  return structuredClone(database.villains)
}