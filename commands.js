#!/usr/bin/env node

const program = require('commander');
const { prompt } = require('inquirer');
const { listUsers} = require('./slack-api')
const { setKey, getKey, deleteKey } = require("./key-manager");

program.version('1.0.0').description('Slack cli apis');

// Set api-key for slack
program.command('set-key').alias('sk').description("Set slack key - Get it from: https://api.slack.com/").action(function () {
	prompt({
		type: 'input',
		name: 'key',
		message: 'Enter slack api key'
	}).then(function (params) {
		if (!params.key) {
			console.error("Api key is required");
		}
		try {
			setKey(params.key);
			console.log("Api key successfully saved");
		} catch (e) {
			console.error("Setting key failed !!!");
		}
	})
})

// Get api-key for slack
program.command('get-key').alias('gk').description("Get current slack api key").action(function () {
	try {
		const key = getKey();
		if (!key) {
			console.warn("API key not set")
		} else {
			console.log(key);
		}
	} catch (e) {
		console.error("Something went wrong");
	}
})

// Delete api-key for slack
program.command('delete-key').alias('dk').description("Delete current slack api key").action(function () {
	try {
		const key = deleteKey();
		console.log("Api key successfully deleted !!")
	} catch (e) {
		console.error("Something went wrong");
	}
})

// Get all slack users
program.command('list-users').alias('lu').description("List users").action(async function () {
	try {
		let users = await listUsers();
		console.log(users);
	} catch (e) {
		console.log(e);
	}
})

program.parse(process.argv);
