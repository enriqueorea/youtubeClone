import axios from "axios";

const api = axios.create({
  baseURL: "https://youtube-v31.p.rapidapi.com",
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
});

export const fetchVideos = async (query) => {
  const { data } = await api.get(query);

  return data;
};
