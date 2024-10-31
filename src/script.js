import config from "../config/apikey.js";
const TARGETDT = "20241101";

// 주말 박스 오피스 API
fetch(
  `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${config.API_KEY}&targetDt=${TARGETDT}`
)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => {
    console.error("error", error);
  });

// 일별 박스 오피스 API
fetch(
  `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=${config.API_KEY}&targetDt=${TARGETDT}`
)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => {
    console.error("error", error);
  });
