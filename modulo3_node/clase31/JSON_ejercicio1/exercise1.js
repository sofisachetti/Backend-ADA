const fs = require('fs');

fs.readFile('person.json', 'utf-8', (err, data) => {
    if (err) {
        console.log("Error reading JSON file: ", err);
        return;
    };
    
    const personToJs = JSON.parse(data);
    console.log("Object JSON to Javascript: ", personToJs);
});