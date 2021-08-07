# elements-nodejs

User{
	number id,
	alphanumeric username,
	email email,
}

Profile{
	number userId,
	string firstName,
	string lastName,
	enum gender,
	date dob,
}

Address{
	number profileId,
	alphanumeric line1,
	alphanumeric line2,
	alphanumeric district,
	alphanumeric state,
	alphanumeric country,
	number pincode,
	boolean default,
}

User has atmost one profile
Profile belongs to User
Profile has many address