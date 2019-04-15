import test from "tape"
import Expression from "./Expression"

const expression = new Expression()

// isNumber tests

test("isNumber should return whether the expression is a number or not", (t) => {
  expression.setValue("22")
  t.true(expression.isNumber(), "22 is a number")

  expression.setValue("26 - 3")
  t.false(expression.isNumber(), "26 - 3 is not a number")

  expression.setValue("")
  t.false(expression.isNumber(), "an empty expression is not a number")

  expression.setValue("+")
  t.false(expression.isNumber(), "+ is not a number")

  t.end()
})


// getLastNumber tests

test("getLastNumber should return the last number from the expression", (t) => {
  expression.setValue("22 + 33 - ")
  t.equal(expression.getLastNumber(), "33")

  expression.setValue("22 + 33")
  t.equal(expression.getLastNumber(), "33")

  expression.setValue("22 * 3 + - /")
  t.equal(expression.getLastNumber(), "3")

  expression.setValue("+")
  t.equal(expression.getLastNumber(), undefined)

  t.end()
})

// getLastValue tests 

test("getLastValue should return the last value from the expression", (t) => {
  expression.setValue("234 - ")
  t.equal(expression.getLastValue(), "-")

  expression.setValue("234 * 556")
  t.equal(expression.getLastValue(), "556")

  t.end()
})

// getFirstToPenultimateValue tests 

test("getFirstToPenultimateValue should return everything but the last value from the"+ 
  " expression", (t) => {
  expression.setValue("234")
  t.equal(expression.getFirstToPenultimateValue(), "23")
  
  // a valid expression does not contain unneeded white space
  expression.setValue("234 + ")
  t.equal(expression.getFirstToPenultimateValue(), "234")

  t.end()
})
