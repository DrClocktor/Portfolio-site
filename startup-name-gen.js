const firstPart = ["Tech", "Inno", "Smart", "Blue", "Next", "Bright", "Quantum", "Rapid", "Future", "Digital"];
const secondPart = ["Vision", "Solutions", "Systems", "Works", "Dynamics", "Hub", "Network", "Innovations", "Labs", "Path"];

function getStartupName () {
   let randomNumber = Math.round(Math.random() * 10)
    let ranStartupName = firstPart[randomNumber] + secondPart[randomNumber]
    console.log(ranStartupName)
}
getStartupName()