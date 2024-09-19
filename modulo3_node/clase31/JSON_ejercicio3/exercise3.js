const fs = require('fs');

fs.readFile('book.json', 'utf-8', (err, data) => {
    if (err) {
        console.log("Error reading JSON file: ", err);
        return;
    };

    const bookToObject = JSON.parse(data);
    console.log("\nProperties of object:\n ");
    console.log(`Title: ${bookToObject.title}`);
    console.log(`Author: ${bookToObject.author}`);
    console.log(`Year: ${bookToObject.year}`);
});