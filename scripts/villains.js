import { getVillain } from "./database.js";

const villains = getVillain()

export const villainList = () => {
return `<ul>${villains.map(villain => `<li>${villain.name}</li>`).join('')}</ul>`
}