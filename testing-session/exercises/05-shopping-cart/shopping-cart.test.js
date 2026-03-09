/**
 * Exercise 05 — Shopping Cart Tests
 * ════════════════════════════════════════════════════════════════
 * Difficulty : ⭐⭐ Beginner–Intermediate
 * Topic      : Classes, beforeEach, test isolation, stateful objects
 * Time       : ~25 minutes
 *
 * INSTRUCTIONS
 * ─────────────
 * This exercise introduces testing a CLASS with STATE.
 * The key challenge: each test must start with a FRESH cart.
 * If Test A adds items and Test B doesn't reset, Test B will fail!
 *
 * You MUST use beforeEach to create a new cart before every test.
 * A skeleton is already provided — fill in the let cart variable.
 *
 * New concept to practice:
 *   beforeEach(() => {
 *     cart = new ShoppingCart(); // fresh cart for every test
 *   });
 *
 * Run your tests:  npx jest 05-shopping-cart
 * ════════════════════════════════════════════════════════════════
 */

const ShoppingCart = require("./shopping-cart");

// ─────────────────────────────────────────────
// Test data — reusable product objects
// ─────────────────────────────────────────────
const apple  = { id: 1, name: "Apple",  price: 1.50 };
const banana = { id: 2, name: "Banana", price: 0.75 };
const mango  = { id: 3, name: "Mango",  price: 3.00 };

// ─────────────────────────────────────────────
// Setup — runs before EACH test
// ─────────────────────────────────────────────
let cart;

beforeEach(() => {
  // TODO: Create a new ShoppingCart instance and assign it to cart
  //       This ensures every test starts with an empty cart
});

// ─────────────────────────────────────────────
// Initial state
// ─────────────────────────────────────────────
describe("initial state", () => {
  it("starts with an empty items array", () => {
    // TODO: expect cart.items to have length 0
  });

  it("starts as empty (isEmpty returns true)", () => {
    // TODO: expect cart.isEmpty() to be true
  });

  it("starts with a total of 0", () => {
    // TODO: expect cart.getTotal() to be 0
  });
});

// ─────────────────────────────────────────────
// addItem()
// ─────────────────────────────────────────────
describe("addItem", () => {
  it("adds an item to the cart", () => {
    // TODO: call cart.addItem(apple), then expect cart.items to have length 1
  });

  it("adds a default quantity of 1 when no quantity is specified", () => {
    cart.addItem(apple);
    // TODO: expect cart.items[0].quantity to be 1
  });

  it("cart is no longer empty after adding an item", () => {
    cart.addItem(apple);
    // TODO: expect cart.isEmpty() to be false
  });

  it("increments the quantity when the same item is added twice", () => {
    cart.addItem(apple);
    cart.addItem(apple);
    // TODO: expect cart.items to still have length 1 (not 2 separate entries)
    // TODO: expect cart.items[0].quantity to be 2
  });

  it("can add multiple different items", () => {
    cart.addItem(apple);
    cart.addItem(banana);
    cart.addItem(mango);
    // TODO: expect cart.items to have length 3
  });
});

// ─────────────────────────────────────────────
// removeItem()
// ─────────────────────────────────────────────
describe("removeItem", () => {
  it("removes an item from the cart by id", () => {
    cart.addItem(apple);
    cart.addItem(banana);
    cart.removeItem(apple.id);
    // TODO: expect cart.items to have length 1
    // TODO: expect the remaining item's name to be "Banana"
    //       HINT: cart.items[0].name
  });

  it("does nothing when the item id does not exist", () => {
    cart.addItem(apple);
    cart.removeItem(999); // id 999 doesn't exist
    // TODO: expect cart.items to still have length 1
  });
});

// ─────────────────────────────────────────────
// updateQuantity()
// ─────────────────────────────────────────────
describe("updateQuantity", () => {
  it("updates the quantity of an existing item", () => {
    cart.addItem(apple);
    cart.updateQuantity(apple.id, 5);
    // TODO: expect cart.items[0].quantity to be 5
  });

  it("removes the item when quantity is set to 0", () => {
    cart.addItem(apple);
    cart.updateQuantity(apple.id, 0);
    // TODO: expect cart.items to have length 0
  });

  it("throws an error when the item is not in the cart", () => {
    // TODO: expect(() => cart.updateQuantity(999, 2)).toThrow("Item with id 999 not found in cart")
  });
});

// ─────────────────────────────────────────────
// getTotal()
// ─────────────────────────────────────────────
describe("getTotal", () => {
  it("returns the correct total for a single item", () => {
    cart.addItem(apple);
    // TODO: apple.price is 1.50, quantity 1, so total should be 1.50
  });

  it("returns the correct total for multiple items", () => {
    cart.addItem(apple);   // 1.50
    cart.addItem(banana);  // 0.75
    // TODO: expect the total to be 2.25
  });

  it("correctly multiplies price by quantity", () => {
    cart.addItem({ ...apple, quantity: 3 }); // 3 × 1.50 = 4.50
    // TODO: expect getTotal() to equal 4.50
  });

  it("returns 0 after clearing the cart", () => {
    cart.addItem(apple);
    cart.addItem(banana);
    cart.clear();
    // TODO: expect getTotal() to be 0
  });
});

// ─────────────────────────────────────────────
// getItemCount()
// ─────────────────────────────────────────────
describe("getItemCount", () => {
  it("returns 0 for an empty cart", () => {
    // TODO: expect cart.getItemCount() to be 0
  });

  it("counts the total quantity across all items", () => {
    cart.addItem({ ...apple,  quantity: 2 }); // 2
    cart.addItem({ ...banana, quantity: 3 }); // 3
    // TODO: expect getItemCount() to be 5
  });
});

// ─────────────────────────────────────────────
// clear()
// ─────────────────────────────────────────────
describe("clear", () => {
  it("removes all items from the cart", () => {
    cart.addItem(apple);
    cart.addItem(banana);
    cart.addItem(mango);
    cart.clear();
    // TODO: expect cart.isEmpty() to be true
    // TODO: expect cart.items to have length 0
  });
});

// ─────────────────────────────────────────────
// 🏆 BONUS CHALLENGES
// ─────────────────────────────────────────────
describe("BONUS", () => {
  it("total is recalculated correctly after removing an item", () => {
    // TODO:
    // 1. Add apple (1.50) and mango (3.00)
    // 2. Confirm total is 4.50
    // 3. Remove mango
    // 4. Confirm total is now 1.50
  });

  it("item count decreases correctly after updating quantity to 1", () => {
    // TODO:
    // 1. Add apple with quantity 5 → count should be 5
    // 2. updateQuantity(apple.id, 1) → count should now be 1
  });
});
