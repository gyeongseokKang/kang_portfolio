import axios from "axios";

const GOOGLE_SHEET_BASE_URL = "https://sheets.googleapis.com/v4/spreadsheets";
const GOOGLE_API_KEY = "AIzaSyCEaXKI0mELD8cNpaA0x_5rCZ243vlwatI";
const GOOGLE_SHEET_ID = "1IRKS35UhZSsJXsz6i_DOiiTv0ZKrDWB2kj2Cu08Bcv4";

const DefaultGoogleSpreadURl = `https://sheets.googleapis.com/v4/spreadsheets/1IRKS35UhZSsJXsz6i_DOiiTv0ZKrDWB2kj2Cu08Bcv4/values/sample?key=${GOOGLE_API_KEY}`;
export const getI18nFromGoogleSheet = async () => {
  const response = await axios.get(
    `${GOOGLE_SHEET_BASE_URL}/${GOOGLE_SHEET_ID}/values/meta?key=${GOOGLE_API_KEY}`
  );

  console.log(response.data);
};

// example url : https://sheets.googleapis.com/v4/spreadsheets/1IRKS35UhZSsJXsz6i_DOiiTv0ZKrDWB2kj2Cu08Bcv4/values/sample?key=AIzaSyCEaXKI0mELD8cNpaA0x_5rCZ243vlwatI
