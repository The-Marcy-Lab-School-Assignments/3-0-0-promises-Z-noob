const resolvedWrapper = (val) => {
  return Promise.resolve(val)
};

const rejectedWrapper = (message) => {
  return Promise.reject(new Error(message));
};

const handleResolvedPromise = (val) => {
  return val.then((value) => {
    console.log(value);
      return value;
    });
};

const handleResolvedOrRejectedPromise = (val) => {
  return val.then((value) => {
    console.log(value);
      return value;
    }).catch((error) => {
      console.error(`Your error message was: ${error.message}`);
      return null;
    })
};

const pauseForMs = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms);
  });

};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
