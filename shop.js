var ShopImpl = (function () {
    function ShopImpl() {}

    var array = [];

    ShopImpl.prototype.addNewProduct = function (product) {

        var overlap = 0;

        for(var i = 0; i < array.length; i++){
            if (array[i].id == product.id) {
                overlap++;
            };
        };
        if (overlap > 0) {
            //console.log("The product with same id already exists in the Shop \n");
            return false;
        } else {
            array.push(product);
            return true;
        };
    };

    ShopImpl.prototype.deleteProduct = function (id) {
        for(var i = 0; i < array.length; i++){
            if (array[i].id == id) {
                array.splice(i, 1);
                return true;
            } else {
                return false;
            }
        };
    };
    
    ShopImpl.prototype.listProductsByName = function (searchString) {

        var names =[];
        var count = 0; 

        array.forEach(function(item, i, array) {
            if (array[i].name.indexOf(searchString) > -1 && names.length < 10) {
                for(var j = 0; j < array.length; j++){
                    if (i != j) {
                        if (array[i].name == array[j].name) {
                        count++;
                        };
                    }; 
                };

                if (count > 0) {
                    names.push(array[i].name + " " + array[i].producer);
                } else {
                    names.push(array[i].name);
                };

                count = 0;
            };
        });

        //console.log(names);
        return names;
    };

    ShopImpl.prototype.listProductsByProducer = function (searchString) {
        var producers =[];

        array.forEach(function(item, i, array) {
            if (array[i].producer.indexOf(searchString) > -1 && producers.length < 10) {
                producers.push(item);
            };
        });

        producers.sort(function (a, b) {
            if (a.producer > b.producer && parseInt(a.producer.match(/\d+/)) > parseInt(b.producer.match(/\d+/))) {

                return 1;
            }
            if (a.producer < b.producer && parseInt(a.producer.match(/\d+/)) < parseInt(b.producer.match(/\d+/))) {
                return -1;
            }
            if (a.producer === b.producer) {
                if (a.name > b.name && parseInt(a.name.match(/\d+/)) > parseInt(b.name.match(/\d+/))) {
                    return 1;
                }
                if (a.name < b.name && parseInt(a.name.match(/\d+/)) < parseInt(b.name.match(/\d+/))) {
                    return -1;
                }
                return 0;
            }
            return 0;
        });
        
        //console.log(producers);
        return producers;
    };


    let numbers = [0, 1, 2];

    numbers = new Proxy(numbers, {
    get(target, prop) {
        if (prop in target) {
        return target[prop];
        } else {
        return 0; // значение по умолчанию
        }
    }
    });

alert( numbers[1] ); // 1
alert( numbers[123] ); // 0 (нет такого элемента)



    return ShopImpl;
}());


function test(shop) {    
    //shop.deleteProduct("1");
    // shop.addNewProduct({ id: "1", name: "1", producer: "Lex" });
    // !shop.addNewProduct({ id: "1", name: "any name because we check id only", producer: "any producer" });
    // shop.deleteProduct("1");
    // shop.addNewProduct({ id: "3", name: "Some Product3", producer: "Some Producer2" });
    // shop.addNewProduct({ id: "4", name: "Some Product1", producer: "Some Producer3" });
    // shop.addNewProduct({ id: "2", name: "Some Product2", producer: "Some Producer2" });
    // shop.addNewProduct({ id: "1", name: "Some Product1", producer: "Some Producer1" });
    // shop.addNewProduct({ id: "5", name: "Other Product5", producer: "Other Producer4" });
    // shop.addNewProduct({ id: "6", name: "Other Product6", producer: "Other Producer4" });
    // shop.addNewProduct({ id: "7", name: "Other Product7", producer: "Other Producer4" });
    // shop.addNewProduct({ id: "8", name: "Other Product8", producer: "Other Producer4" });
    // shop.addNewProduct({ id: "9", name: "Other Product9", producer: "Other Producer4" });
    // shop.addNewProduct({ id: "10", name: "Other Product10", producer: "Other Producer4" });
    // shop.addNewProduct({ id: "11", name: "Other Product11", producer: "Other Producer4" });

    // var byNames = shop.listProductsByName("Product");
    // console.log(byNames.length == 10);
    // byNames = shop.listProductsByName("Some Product");
    // console.log(byNames.length == 4);
    // console.log(byNames.indexOf("Some Producer3 - Some Product1") >= 0);
    // console.log(byNames.indexOf("Some Product2") >= 0);
    // console.log(byNames.indexOf("Some Product3") >= 0);
    // console.log(byNames.indexOf("Some Product1") < 0);
    // console.log(byNames.indexOf("Some Producer1 - Some Product1") >= 0);

    // var byProducer = shop.listProductsByProducer("Producer");
    // console.log(byProducer.length == 10);
    // byProducer = shop.listProductsByProducer("Some Producer");
    // console.log(byProducer.length == 4);
    // console.log(byProducer[0] == "Some Product1");
    // console.log(byProducer[1] == "Some Product2" || byProducer[1] == "Some Product3");
    // console.log(byProducer[2] == "Some Product2" || byProducer[2] == "Some Product3");
    // console.log(byProducer[3] == "Some Product1");

};


test(new ShopImpl());

