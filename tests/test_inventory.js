const sortProducts = require('./inventory');

describe('sortProducts function', () => {
  const products = [
    { name: 'Product A', price: 100, stock: 5 },
    { name: 'Product B', price: 200, stock: 3 },
    { name: 'Product C', price: 50, stock: 10 },
  ];

  it('sorts products by name in ascending order', () => {
    const result = sortProducts(products, 'name', true);
    expect(result).toEqual([
      { name: 'Product A', price: 100, stock: 5 },
      { name: 'Product B', price: 200, stock: 3 },
      { name: 'Product C', price: 50, stock: 10 },
    ]);
  });

  it('sorts products by price in descending order', () => {
    const result = sortProducts(products, 'price', false);
    expect(result).toEqual([
      { name: 'Product B', price: 200, stock: 3 },
      { name: 'Product A', price: 100, stock: 5 },
      { name: 'Product C', price: 50, stock: 10 },
    ]);
  });

  it('sorts products by stock in ascending order', () => {
    const result = sortProducts(products, 'stock', true);
    expect(result).toEqual([
      { name: 'Product B', price: 200, stock: 3 },
      { name: 'Product A', price: 100, stock: 5 },
      { name: 'Product C', price: 50, stock: 10 },
    ]);
  });

});