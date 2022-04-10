const { WebClient } = require('@slack/web-api');
const { getKey } = require("./key-manager");

// initailizing slack token
const token = getKey();

// initializing slack client
const web = new WebClient(token);

// Listing all users 
exports.listUsers = async function () {
	return new Promise(function (resolve, reject) {
		web.users.list().then(function (resp) {
			const tempMem = resp.members;
			console.log(JSON.stringify(tempMem));
			const members = [];
			for(let i=0; i<tempMem.length; i++) {
				members.push({
					name : tempMem[i].name,
					status: tempMem[i].profile.status_text,
					image: tempMem[i].profile.image_24,
					team : tempMem[i].profile.team
				})
			}
			return resolve(members);
		}).catch(function (err) {
			return reject(err.data.error)
		})
	})
}
