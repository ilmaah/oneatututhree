import wixData from "wix-data";
import wixLocation from 'wix-location';
// For full API documentation, including code examples, visit https://wix.to/94BuAAs

$w.onReady(function () {
	//TODO: write your page related code here...

});

export async function button1_click(event) {

	await Promise.resolve(validAcc($w('#input1').value, $w('#input2').value)).then(res => {
		if(res){
			$w('#notification').html = '<p style = color:green;width:100%;text-align:center>'
			$w('#notification').text = "Login Successful";
			$w('#notification').expand();
			$w('#notification').show();
			wixLocation.to("/questions");
		}else{
			$w('#notification').html = '<p style = color:red;width:100%;text-align:center>'
			$w('#notification').text = "Invalid username/or password.";
			$w('#notification').expand();
			$w('#notification').show();

		}
	});
}

async function validAcc(username, password) {
	let found = false;
	return await wixData.query("contact02").eq("username", username.valueOf())
		.find() // Run the query
		.then(searchResults => {
			searchResults.items.forEach(res => {
				if (res.username === username.valueOf() && res.password === password.valueOf()) {
					found = true;
				}
			});
			return found;

		}).catch((err) => {
			let errorMsg = err;
			return false;
		});

}
