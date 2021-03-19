const fs = require('fs').promises;

exports.writeData = async (data) => {
    await fs.writeFile('./store.json', JSON.stringify(data));
}

exports.readData = async () => {
    try {
        const data = await fs.readFile('./store.json')
        return JSON.parse(data);
    } catch (err) {
        console.log(err)
    }
}
