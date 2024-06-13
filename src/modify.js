const crypto = require('crypto');
/** FEEDBACK: This problem was a challenge but you killed it like a boss!!!! Great job! */
const numsToRGBColor = ([color1, color2, color3]) => {
  return `rgb(${color1}, ${color2}, ${color3})`;
};

const getRandomBytes = () => new Promise((resolve, reject) => {
  crypto.randomFill(new Uint8Array(3), (err, buffer) => {
    if (err) return reject(err);
    resolve([...buffer]);
  });
});

const return4RandomColors = () => {
  const colors = [];
  return getRandomBytes()
    .then((co1) => {
      colors.push(numsToRGBColor(co1))
      return getRandomBytes(); 
    })
    .then((co2) => {
      colors.push(numsToRGBColor(co2))
      return getRandomBytes(); 
    })
    .then((co3) => {
      colors.push(numsToRGBColor(co3))
      return getRandomBytes(); 
    })
    .then((co4) => {
      colors.push(numsToRGBColor(co4))
      return colors;
    })
    .catch((err) => {
      console.error(err.message);
      return null;
    });
};

return4RandomColors((colors) => console.log(colors));

module.exports = {
  numsToRGBColor,
  getRandomBytes,
  return4RandomColors,
};
