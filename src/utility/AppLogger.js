import AppConstants from "./AppConstants";
export default {
  log(message) {
    if (AppConstants.enableLog) console.log(message);
  }
};
