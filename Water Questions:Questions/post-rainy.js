import { saveFormData } from 'backend/googleSheet'
import wixData from 'wix-data'
import wixLocation from 'wix-location'


export async function button7_click(event) {
	//if($w('#textBox1').valid && $w('#textBox2').valid && $w('#textBox3').valid )


	let answers = [String($w('#textBox1').value).trim(), String($w('#textBox2').value).trim(), String($w('#textBox3').value).trim()];

	saveFormData(answers, true, "rainy").then(() => {
		console.log("logged open ended answers");
		})
		.catch(error => {
			console.log("Couldn't save form data");
			console.log(error);
	});


	wixData.insert("Post", answers)
		.then((results) => {
			wixLocation.to("/thank-you");

		})
		.catch((err) => {
			let errorMsg = err;
		});
//	}
}
