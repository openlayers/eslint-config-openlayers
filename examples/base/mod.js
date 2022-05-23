const obj = {
  'bar': 'foo',
};

export function foo() {
  // This is a legacy style from a time when Closure Compiler would mangle property names.
  // TODO: Confirm this is still needed and remove the `quoteProps: 'preserve'`
  // option for prettier if not.
  return obj['bar'];
}

/**
 * @typedef {Object} FoodOptions
 * @property {number} calories The number of calories.
 */

export class Food {
  constructor(options) {
    /**
     * @type {number}
     */
    this.calories = options.calories;
  }
}

/**
 * @typedef {Object} SoupOptions
 * @property {number} calories The number of calories.
 * @property {string} [type='chicken'] The type of soup.
 * @property {boolean} [noodles=false] Include noodles.
 * @property {Array<string>} [vegetables=[]] The vegetables.
 */

/**
 * @classdesc
 * Soup.
 *
 * @api
 */
export class Soup extends Food {
  /**
   * Construct a soup.
   * @param {SoupOptions} options The soup options.
   */
  constructor(options) {
    super({calories: options.calories});

    /**
     * @private
     * @type {string}
     */
    this.type_ = options.type || 'chicken';

    /**
     * @private
     * @type {boolean}
     */
    this.noodles_ = !!options.noodles;

    /**
     * @private
     * @type {Array<string>}
     */
    this.vegetables_ = options.vegetables || [];
  }

  /**
   * Get the soup type.
   * @return {string} The type of soup.
   */
  getType() {
    return this.type_;
  }

  /**
   * Check if the soup has noodles.
   * @return {boolean} The soup has noodles.
   */
  hasNoodles() {
    return this.noodles_;
  }

  /**
   * Get the vegetables.
   * @return {Array<string>} The vegetables.
   */
  getVegetables() {
    return this.vegetables_;
  }
}

/**
 * @template {Food} [F=Soup]
 */
export class Restaurant {
  /**
   * @param {Array<F>} menu The menu items.
   */
  constructor(menu) {
    /**
     * @private
     * @type {Array<F>}
     */
    this.menu_ = [];
  }
}
