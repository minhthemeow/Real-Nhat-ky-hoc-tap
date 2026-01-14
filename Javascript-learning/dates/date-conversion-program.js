const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;
console.log(currentDateFormat);

const formatDateMMDDYYYY = obj => `Formatted Date (MM/DD/YYYY): ${obj.toLocaleDateString()}`;

const formatDateLong = obj => {
  const options = {
    "month": "long",
    "day": "numeric",
    "year": "numeric",
  }
  return `Formatted Date (Month Day, Year): ${obj.toLocaleDateString("en-US", options)}`
};

console.log(formatDateLong(currentDate))