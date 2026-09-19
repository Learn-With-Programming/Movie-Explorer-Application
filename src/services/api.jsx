const BASE_URL = "https://api.tvmaze.com";

export const fetchAllShows = async () => {
  try {
    const response = await fetch(`${BASE_URL}/shows`);
    if (!response.ok) {
      throw new Error("Failed to fetch shows");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching all shows:", error);
    return [];
  }
};

export const searchShows = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search/shows?q=${query}`);
    if (!response.ok) {
      throw new Error("Failed to search shows");
    }
    const data = await response.json();

    return data.map((item) => item.show);
  } catch (error) {
    console.log("Error searching shows:", error);
    return [];
  }
};
