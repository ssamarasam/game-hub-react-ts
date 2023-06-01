import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e364e10d251649df984d5907abc60649",
  },
});

//  e364e10d251649df984d5907abc60649
