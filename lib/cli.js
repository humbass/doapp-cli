var commands = require('./commands');

function helpTitle(){
    commands.helpTitle();
}

function run(cmd){
    commands.run(cmd)
}

module.exports = {
    run: run,
    helpTitle: helpTitle
}
