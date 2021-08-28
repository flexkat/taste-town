const uniqueRandomArray = require("unique-random-array")
const tasteTown = require("./taste-town.json")

module.exports = {
  all: tasteTown,
  random: uniqueRandomArray(tasteTown)
}
