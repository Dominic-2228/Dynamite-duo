//importing the functions that generate HTML lists
import { villainList } from "./villains.js"
import { heroList } from "./heroes.js"
//assign the return values of the functions to a variable
const heroListHTML = heroList()
const villainListHTML = villainList()

// built the single string from the given function return value that produces an 
const theWholeEnchilada = `
<h1>Heroes</h1>
${heroListHTML}

<h1>Villains</h1>
${villainListHTML}
`

const theExistingMainElement = document.querySelector("#container")

theExistingMainElement.innerHTML = theWholeEnchilada