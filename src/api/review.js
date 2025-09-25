import baseApiUrl from "@/config/apiUrl";

export async function submitReviewApi(payload) {
	const response = await fetch(`${baseApiUrl}/reviews`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(payload),
	});

	if (!response.ok) {
		const errorBody = await response.text().catch(() => "");
		throw new Error(errorBody || `Failed to submit review (${response.status})`);
	}

	return response.json();
}


