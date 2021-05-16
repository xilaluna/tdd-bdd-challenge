const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function () {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================

it("should return the area of a rectangle", function () {
  const areaFunction = utils.area(3, 10)
  expect(areaFunction).to.be.a("Number")
  expect(areaFunction).to.equal(3 * 10)
  expect(areaFunction).to.be.above(0)
})
it("should return the perimeter of a rectangle", function () {
  const perimeterFunction = utils.perimeter(7, 9)
  expect(perimeterFunction).to.be.a("Number")
  expect(perimeterFunction).to.equal(2 * (7 * 9))
  expect(perimeterFunction).to.be.above(0)
})
it("should return the area of a circle", function () {
  const circleArea = utils.circleArea(5)
  expect(circleArea).to.be.a("Number")
  expect(circleArea).to.equal((Math.PI * 5) ** 2)
  expect(circleArea).to.be.above(0)
})

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it("Should create a new (object) Item with name and price", function () {
  const item = utils.createItem("apple", 0.99)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", function () {
  const getShoppingCart = utils.getShoppingCart()
  expect(getShoppingCart).to.be.a("array")
})

it("Should add a new item to the shopping cart", function () {
  const apple = utils.createItem("apple", 0.99)
  const addItemToCart = utils.addItemToCart(apple)
  expect(addItemToCart).to.be.a("Number")
  expect(addItemToCart).to.equal(1)
})

it("Should return the number of items in the cart", function () {
  const apple = utils.createItem("apple", 0.99)
  utils.addItemToCart(apple)
  utils.addItemToCart(apple)
  utils.addItemToCart(apple)
  const getNumItemsInCart = utils.getNumItemsInCart()
  expect(getNumItemsInCart).to.be.a("Number")
  expect(getNumItemsInCart).length.to.equal(3)
})

it("Should remove items from cart", function () {
  const apple = utils.createItem("apple", 0.99)
  utils.addItemToCart(apple)
  const removeItemFromCart = utils.removeItemFromCart("apple")
  expect(removeItemFromCart).to.be.a("array")
})

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart")

it("Should validate that an empty cart has 0 items")

it("Should return the total cost of all items in the cart")
