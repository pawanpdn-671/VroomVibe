export async function fetchCars() {
	const headers = {
		"X-RapidAPI-Key":
			"4f421300b1mshe08eb33446aca04p166523jsn44d7040b2b19",
		"X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
	};

	const response = await fetch(
		"https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
		{
			headers: headers,
		},
	);
	const result = await response.json();
	return result;
}
