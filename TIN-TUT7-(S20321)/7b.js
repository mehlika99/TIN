const fs = require('fs');
const path = "./TASK7/";


fs.watch(path, (eventType, filename) => {
	
    console.log("WE HAD A " + eventType + "IN THE" + filename);

    if (eventType === "change") {
        try {
            console.log(fs.readFileSync(filename,'utf8'))
        } catch (ignored) {}
    }
});