var fs = require("fs");
//var stringifyObject = require('stringify-object');

function yourCallback() {
    //
}

// type - user, room
function _save(type, tel, json) {

    var fileName = type + '-' + tel + '.json';

    // var pretty = stringifyObject(json, {
    //     indent: '  ',
    //     singleQuotes: true
    // });
    var pretty = JSON.stringify(json);
    
    fs.writeFile(fileName, pretty, "utf8", yourCallback);

}

// type - user, room
function _read(type, tel) {

    var fileName = type + '-' + tel + '.json';

    var ret = {};

    try {
        var ss = fs.readFileSync(fileName, "utf8");
        ret = JSON.parse(ss);
    } catch (err) {
        console.log('file not found, or JSON.parse error', err);
    }

    return ret;
}

module.exports = {
    save: _save,
    read: _read,
};
