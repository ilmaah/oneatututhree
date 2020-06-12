import wixData from 'wix-data';

// ...
wixData.query("Post")
    .eq("status", false)
    .not(
        wixData.query("Post").eq("question1", "")
        .or(
        	wixData.query("Post").eq("question1", null)
        )
    )
    .find()
    .then((results1) => {
    	let items1 = results1.items;

        console.log(items1);

        $w('#repeater4').data = items1.slice(0, 3);
    })
    .catch((err) => {
        let errorMsg = err;
});

wixData.query("Post")
   .eq("status", false)
	.not(
    	wixData.query("Post").eq("question2", "")
        .or(
        	wixData.query("Post").eq("question2", null)
      	)
  	)
    .find()
    .then((results1) => {
 	let items1 = results1.items;

        console.log(items1);

        $w('#repeater2').data = items1.slice(0, 3);
     })
    .catch((err) => {
 	 	let errorMsg = err;
  });

wixData.query("Post")
   .eq("status", false)
	.not(
    	wixData.query("Post").eq("question3", "")
        .or(
        	wixData.query("Post").eq("question3", null)
      	)
  	)
    .find()
    .then((results1) => {
 	let items1 = results1.items;

        console.log(items1);

        $w('#repeater3').data = items1.slice(0, 3);
     })
    .catch((err) => {
 	 	let errorMsg = err;
  });
