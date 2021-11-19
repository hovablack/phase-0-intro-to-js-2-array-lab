// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(params) {
  cats.push(params)
};

function destructivelyPrependCat(params) {
  cats.unshift(params)
};

function destructivelyRemoveLastCat(params) {
  cats.pop(params)
};

function destructivelyRemoveFirstCat(params) {
  cats.shift(params)
};

function appendCat(params) {
  return [...cats, params]
};

function prependCat(params) {
  return [params, ...cats]
};

function removeLastCat() {
  return cats.slice(0, -1)
};

function removeFirstCat() {
  return cats.slice(1)
};