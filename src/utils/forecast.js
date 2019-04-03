const request = require("request");
const forecast = (lat, long, callback) => {
  const url =
    "https://api.darksky.net/forecast/a6a0e17ce326fc67ca6fe1e0d72e85af/" +
    lat +
    "," +
    long +
    "?units=si";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find Location", undefined);
    } else {
      callback(
        undefined,
        body.daily.data[0].summary +
          "It is currently " +
          body.currently.temperature +
          " degrees out. There is a " +
          body.currently.precipProbability +
          "% chances of rain!!"
      );
    }
  });
};

module.exports = forecast;
