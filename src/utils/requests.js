const newsApiKey = "7ad5acec044f4b19a84c3b197b32a6f0";
const weatherApiKey = "9c9ebba60deae8f7d421026a9b66221b";

const requests = {
  weather: `api.openweathermap.org/data/2.5/weather?q=Lagos&units=metric&appid=${weatherApiKey}`,
  forex: `newsapi.org/v2/everything?q=forex&sortBy=publishedAt&language=en&pageSize=30&apiKey=${newsApiKey}`,
  home: `newsapi.org/v2/top-headlines?country=ng&sortBy=publishedAt&language=en&pageSize=30&apiKey=${newsApiKey}`,
  bitcoin: `newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&language=en&pageSize=30&apiKey=${newsApiKey}`,
  technology: `newsapi.org/v2/everything?q=Technology&sortBy=publishedAt&language=en&pageSize=30&apiKey=${newsApiKey}`,
  sport: `newsapi.org/v2/everything?q=epl&sortBy=publishedAt&language=en&pageSize=20&apiKey=${newsApiKey}`,
};

export default requests;
