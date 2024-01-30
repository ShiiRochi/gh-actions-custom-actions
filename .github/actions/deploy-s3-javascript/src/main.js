const core = require('@actions/core');
const githun = require('@actions/github');
const exec = require('@actions/exec');

function run() {
    core.notice("Hello world from my custom JavaScript Action!");
}

run();
