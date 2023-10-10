const GOOGLE_API_KEY = "AIzaSyC3NH1Sv1A9scsnch6AwPHjEuhQ2wfT93I";

export const Youtube_Video_Api =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const youtube_search_api =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
