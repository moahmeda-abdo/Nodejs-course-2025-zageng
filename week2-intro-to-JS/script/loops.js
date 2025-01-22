console.log("For Loop:");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log("Multiplication Table:");
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        const result = i * j;
        process.stdout.write(result + "\t");
    }
    console.log();
}


let count = 0;
console.log("While Loop:");
while (count < 5) {
    console.log(count);
    count++;
}


let index = 0;
console.log("Do-While Loop:");
do {
    console.log(index);
    index++;
} while (index < 5);


let infiniteLoopCount = 0;
while (true) {
    if (infiniteLoopCount >= 3) break;
    console.log("This will repeat indefinitely until broken.");
    infiniteLoopCount++;
}
