const Conf = require('conf');

const config = new Conf();

exports.setKey = function (key) {
	config.set('SLACK_KEY', key);
}

exports.getKey = function () {
	return config.get('SLACK_KEY');
}

exports.deleteKey = function () {
	config.delete('SLACK_KEY');
}