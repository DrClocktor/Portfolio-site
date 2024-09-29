let island =['T','_','_','T','_','_','T'];
console.log(`There are ${island.length} moves on the island`)

treasureCount = 0
for (let i = 0; i < island.length; i++) {
    if (island[i] === 'T') {
        treasureCount++
        console.log(`You found a treasure at move ${i} :) Good Job!`);
    } else {
        console.log("No treasure here :( keep looking!");
    }
}
console.log(`There were ${treasureCount} treasures on the island!`)

/*
// Another way to do it
let index = 0; // Keeps track of index
for(const sand of island) {
    if (sand === 'T') {
        console.log(`You found a treasure at ${index} :) Good Job!`)
    }else {
        console.log("No treasure here :( keep looking!");
    }
    index++; // Increment the index after each iteration
}
/* On the first iteration, index is 0, and we check island[0].
On the second iteration, index becomes 1, and we check island[1], and so on. */
