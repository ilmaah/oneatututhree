import wixData from 'wix-data';

$w.onReady(function () {
	//TODO: write your page related code here...
	let datasetItems;
	$w('#dataset1').onReady(() => {
		$w("#dataset1").setFilter(
			wixData.filter()
			.eq("status", false)
			.isNotEmpty("question2")
			.ne("question2", "")
  		).then(() => {
			console.log("Filter successful")
		}).catch((err) => {
			console.log(err);
		});
	})
});
