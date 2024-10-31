import config from "../config/apikey.js";
const TARGETDT = "20241101";

fetch(
  `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${config.API_KEY}&targetDt=${TARGETDT}`
)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => {
    console.error("error", error);
  });
