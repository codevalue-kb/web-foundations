/**
 * Exercise 05 — Shopping Cart
 * ────────────────────────────
 * A simple shopping cart class to practice testing stateful objects
 * and using beforeEach for test isolation.
 * Your job: write tests in shopping-cart.test.js
 */

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  /**
   * Adds an item to the cart. If the item already exists (by id),
   * increments its quantity instead of adding a duplicate.
   * @param {{ id: number, name: string, price: number, quantity?: number }} item
   */
  addItem(item) {
    const existing = this.items.find((i) => i.id === item.id);
    if (existing) {
      existing.quantity += item.quantity || 1;
    } else {
      this.items.push({ ...item, quantity: item.quantity || 1 });
    }
  }

  /**
   * Removes an item from the cart by its id.
   * Does nothing if the item is not found.
   * @param {number} id
   */
  removeItem(id) {
    this.items = this.items.filter((i) => i.id !== id);
  }

  /**
   * Updates the quantity of an existing item.
   * If quantity is set to 0 or less, removes the item.
   * @param {number} id
   * @param {number} quantity
   * @throws {Error} if the item is not found in the cart
   */
  updateQuantity(id, quantity) {
    const item = this.items.find((i) => i.id === id);
    if (!item) throw new Error(`Item with id ${id} not found in cart`);
    if (quantity <= 0) {
      this.removeItem(id);
    } else {
      item.quantity = quantity;
    }
  }

  /**
   * Returns the total price of all items in the cart.
   * @returns {number}
   */
  getTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  /**
   * Returns the total number of individual items in the cart
   * (counting quantity).
   * @returns {number}
   */
  getItemCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }

  /**
   * Removes all items from the cart.
   */
  clear() {
    this.items = [];
  }

  /**
   * Returns true if the cart has no items.
   * @returns {boolean}
   */
  isEmpty() {
    return this.items.length === 0;
  }
}

module.exports = ShoppingCart;
