const axios = require("axios");

const API_KEY = "AIzaSyCyoU5_m6jeJJatlGNOzgymWMegF7Cdwp0";
const CHANNEL_ID = "UCFbNIlppjAuEX4znoulh0Cw";

module.exports = {
  search: (req, res) => {
    let { query, results } = req.body;
    results = results ? results : 12;
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${results}&order=date&channelId=${CHANNEL_ID}&q=${query}&key=${API_KEY}`
      )
      .then((results) => {
          res.status(200).send(results.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
