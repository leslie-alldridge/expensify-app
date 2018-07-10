const moment = require.requireActual('moment');
//cannot import moment for mock testing
//below says if there's a timestamp use it, otherwise set to 0
export default (timestamp = 0) => {
  return moment(timestamp);
};
