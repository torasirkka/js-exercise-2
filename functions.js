"use strict";


// 1. isHometown
function isHometown(town) {
  return town === "San Francisco";  
}

// 2. getFullName
function getFullName(first, last) {
    return `${first} ${last}`;
}

// 3. calculateTotal
const calculateTotal = (base_price, state, tax = 0.05) => {
  /** Return the total price of an item, figuring in state taxes and fees.

  Arguments:
      base_price (float): Base price of an item
      state (str): Two-letter abbreviation of a U.S. state
      tax (float): Tax rate. Defaults to 0.05

  Returns:
      float: The total price of an item
  */

  let subtotal = base_price * (1 + tax);

  let fee = 0;
  if (state === 'CA') {
    fee = 0.03 * subtotal;
  } else if (state == 'MA') {
      if (base_price <= 100) {
        fee = 1;
      }
      else {
        fee = 3;
      }
  } else if (state === 'PA') {
    fee = 2;
  }

  return subtotal + fee ;
};

