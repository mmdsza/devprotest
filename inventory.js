function sortProducts(products, sortKey, ascending) {
    return products.sort((a, b) => {
      const aValue = a[sortKey];
      const bValue = b[sortKey];
  
      if (ascending) {
        return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
      } else {
        return bValue > aValue ? 1 : bValue < aValue ? -1 : 0;
      }
    });
  }
  
  module.exports = sortProducts;