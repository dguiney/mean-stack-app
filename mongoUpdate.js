db.hotels.update(
	{
		"name" : "Grand Hotel Palatino"
	},
	{
		$set : {
			"reviews.0._id" : ObjectId()
		}
	},
	{
		multi : true
	}
)