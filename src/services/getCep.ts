import axios from 'axios';

export const getAdress = async (cep: string) => {
	const apiResponse = await axios
		.get(`https://viacep.com.br/ws/${cep}/json`)
		.then((response) => response.data)
		.catch((error) => {
			error;
		});
	return apiResponse;
};
