import wixData from 'wix-data';

$w.onReady(function () {
	//TODO: write your page related code here...
	$w('#dataset1').onReady(() => {
		$w("#dataset1").setFilter(
			wixData.filter()
			.eq("status", false)
			.isNotEmpty("question1")
			.ne("question1", "")
  		).then(() => {
			console.log("Filter successful")
		}).catch((err) => {
			console.log(err);
		});
	})
});
