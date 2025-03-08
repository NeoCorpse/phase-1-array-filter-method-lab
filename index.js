// Code your solution here
function findMatching(drivers, name) {
  return drivers.filter(
    (driver) => driver.toLowerCase() === name.toLowerCase()
  );
}

function fuzzyMatch(array, str) {
  return array.filter((item) => item.startsWith(str));
}

function matchName(array, str) {
  return array.filter((item) => item.name === str);
}
