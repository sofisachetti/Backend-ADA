const fs = require('fs');

fs.readFile('data.json', 'utf-8', (err, data) => {
    if (err) {
        console.log("Error reading JSON file: ", err);
        return;
    }

    const dataToJS = JSON.parse(data);
    dataToJS.age = 31;

    const newJSON = JSON.stringify(dataToJS, null, 2);

    fs.writeFile('newData.json', newJSON, (err) => {
        if (err) {
            console.log("Error writing JSON file: ", err);
            return;
        }
        console.log("Modified JSON file has been saved in newData.json.");
    });
});