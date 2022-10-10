# Example
Task:

The task is to implement the Shop protocol (you can do that in this file directly).
- No database or any other storage is required, just store data in memory
- No any smart search, use String method contains (case sensitive/insensitive - does not matter)
- Performance optimizations are optional

      var ShopImpl = (function () {

Adds a new product object to the Shop.
- Parameter product: product to add to the Shop
- Returns: false if the product with same id already exists in the Shop, true – otherwise.

      ShopImpl.prototype.addNewProduct = function (product) {};

Deletes the product with the specified id from the Shop.
Returns: true if the product with same id existed in the Shop, false – otherwise.

      ShopImpl.prototype.deleteProduct = function (id) {};

Returns: 10 product names containing the specified string. If there are several products with the same name, producer's name is appended to product's name.

      ShopImpl.prototype.listProductsByName = function (searchString) {};

Returns: 10 product names whose producer contains the specified string, ordered by producers.

          ShopImpl.prototype.listProductsByProducer = function (searchString) {};
   
        return ShopImpl;
      }());

My solusion - shop.js
