import wixData from "wix-data";
import wixLocation from 'wix-location';
// For full API documentation, including code examples, visit https://wix.to/94BuAAs

$w.onReady(function () {

});

async function insertAccountInfo(username, password) {
	const acc = {
		"username": username,
		"password": password
	};

	await wixData.insert("contact02", acc)
		.then((results) => {
			let item = results; //see item below
		})
		.catch((err) => {
			let errorMsg = err;
		});
}

function verifyPassword(password1, password2) {
	if (password1.length < 7) {
		// Use as least 7 characters
		printMessage("Password should have at least 7 characters", true);
		return false;
	} else if (password1.valueOf() !== password2.valueOf()) {
		// passwords are not the same
		printMessage("Passwords are not the same", true);
		return false;
	} else {
		printMessage("Sign up Successful", false)
		return true;
	}
}

async function usedUsername(username) {
	console.log(username);
	let found = false;
	let collection = wixData.query("contact02");
	return await collection.eq("username", username)
		.find() // Run the query
		.then(searchResults => {
			searchResults.items.forEach(res => {
				if (res.username === username.valueOf()) {
					found = true;
				}
			})
			return found;
		}).catch((err) => {
			let errorMsg = err;
			return false;

		});

}

function printMessage(text, error){
	let color = "green";
	if(error){
		color = "red";
	}
	const style = '<p style = width:100%;text-align:center;color:' + color + '>';
	$w('#notification').html = style;
	$w('#notification').text = text;
	$w('#notification').expand();
	$w('#notification').show();
}

export async function button1_click(event) {
	//Add your code for this event here:

	let username = $w('#username').value;
	let password = $w('#password').value;
	let password2 = $w('#password2').value;

	await Promise.resolve(usedUsername(username)).then(res => {

		let samePassword = verifyPassword(password, password2);
		if(res){
			printMessage("User name taken. Try another one.", true);
		}else if(!res && samePassword){
			insertAccountInfo(username, password).then(success => {
				wixLocation.to("/sign-up-demographics");
			}).catch(err => {
				let errorMsg = err;
			})
		}
	});
}
