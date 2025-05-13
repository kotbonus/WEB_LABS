function ProgressBar(percent) {
    const filled = percent / 10;
    const empty = 10 - filled;

    const bar = `[${'%'.repeat(filled)}${'.'.repeat(empty)}]`;

    if (percent === 100) {
        console.log(`${percent}% Complete!\n${bar}`);
    } else {
        console.log(`${percent}% ${bar}\nStill loading...`);
    }
}
ProgressBar(30);
ProgressBar(50);
ProgressBar(100);