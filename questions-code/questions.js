import { saveFormData } from 'backend/googleSheet'

export function button1_click(event) {

	const q6Responses = $w('#checkboxGroup1').value.map((response) => {
		if(response.valueOf() === "Other"){
			return response.concat(": ", $w('#otherAnswers').value);
		}else{
			return response;
		}
	});


	const answers = [$w("#radioGroup1").value, $w("#radioGroup2").value,
	$w("#radioGroup3").value, $w("#radioGroup4").value, $w("#radioGroup5").value, q6Responses.toString(),
	$w("#radioGroup7").value, $w("#radioGroup8").value, $w("#radioGroup9").value]
	saveFormData(answers, false).then(() => {
		})
		.catch(error => {
			console.log("I couldn't save form data");
			console.log(error);
		});
}
