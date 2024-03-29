const API_KEY = "2x4KUAcLSwFMuIZxVpNyTb2GYSyi9tvS";

export const fetchMostPopularArticles = async (period = 1) => {
  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/${period}.json?api-key=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
