const preparePayload = (data, isSuccess) => {
	return {
		"success": isSuccess,
		"payload": data
	};
};

export const getData = (url) => {
	return fetch(url, {
		method: "GET",
		headers: {
				"Content-Type": "application/json"
		}
	})
	.then((res) => {
		if (res.ok) {
				return res.json();
		} else {
				throw res.statusText || "Error while updating info.";
		}
	})
	.then((res) => {
		return preparePayload(res, true);
	})
	.catch((err) => {
		return preparePayload(err, false);
	});
};