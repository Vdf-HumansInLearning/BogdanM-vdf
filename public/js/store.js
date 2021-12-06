// phone store exercise

// copy json data, change it to a JS object
let productObj = {
    "products": [
    {
    "name": "Galaxy A12",
    "brand": "Samsung",
    "operating_system": "Android",
    "price": 899,
    "discount": 0,
    "quantity": 2000,
    "availability_date":"2020-11-24",
    "rating": 4
    },
    {
    "name": "Galaxy a52s 5G",
    "brand": "Samsung",
    "operating_system": "Android",
    "price": 1849,
    "discount": 0,
    "quantity": 2500,
    "availability_date":"2021-08-17",
    "rating": 5
    },
    {
    "name": "Galaxy s21",
    "brand": "Samsung",
    "operating_system": "Android",
    "price": 3899,
    "discount": 50,
    "quantity": 0,
    "availability_date":"2021-01-29",
    "rating": -1
    },
    {
    "name": "Moto G30",
    "brand": "Motorola",
    "operating_system": "Android",
    "price": 799,
    "discount": 100,
    "quantity": 1000,
    "availability_date":"2021-03-17",
    "rating": 4.5
    },
    {
    "name": "iPhone 13",
    "brand": "Apple",
    "operating_system": "iOS",
    "price": 4449,
    "discount": 0,
    "quantity": 3500,
    "availability_date":"2021-09-14",
    "rating": 5
    },
    {
    "name": "iPhone 13 Pro",
    "brand": "Apple",
    "operating_system": "iOS",
    "price": 5699,
    "discount": 0,
    "quantity": 4,
    "availability_date":"2021-09-14",
    "rating": 5
    },
    {
    "name": "Mi 11 Lite 5G",
    "brand": "Xiaomi",
    "operating_system": "Android",
    "price": 1449,
    "discount": 0,
    "quantity": 1500,
    "availability_date":"2021-03-29",
    "rating": 2
    },
    {
    "name": "Pixel 6",
    "brand": "Google",
    "operating_system": "Android",
    "price": 649,
    "discount": 0,
    "quantity": 0,
    "availability_date":"2021-10-26",
    "rating": -1
    }
    ],
    "standard_delivery_fee": 35,
    "free_delivery_min_price": 500
    };
    
    
    displayProducts();

    // display brands in the filter form
    displayCheckboxes('brand','filter-brand');

    // display os in the filter form
    displayCheckboxes('operating_system','filter-os');



// EVENT LISTENERS

    // hide/show the filter form
    document.getElementById('toggle-filters').addEventListener('click', function() {
        if(document.getElementById('filter-form').classList.contains('hide-form')){
            document.getElementById('filter-form').classList.remove('hide-form');
        } else {
            document.getElementById('filter-form').classList.add('hide-form');
        }
    });

    let searchInput = document.getElementById('search-input');
    let filterButton = document.getElementById('submit');
    let selectSort = document.getElementById('sort');
    
    // reset the filters in the form
    document.getElementById('reset').addEventListener('click', function() {
        let items = document.querySelectorAll('#filter-brand input[type=checkbox]:checked, #filter-price input[type=radio]:checked');
        items.forEach(item => {
            item.checked = false;
        })
        document.getElementById('minimum_rating').value = 1;
        if(selectSort.value == "asc"){
            displayProducts(item => searchProducts(item), getSortedByPriceAsc());
        } else if(selectSort.value == 'desc'){
            displayProducts(item => searchProducts(item), getSortedByPriceDesc());
        } else if(selectSort.value == 'none') {
            displayProducts(item => searchProducts(item));
        }
        document.getElementById('filter-form').classList.add('hide-form');
    });

   
    // get products on search
    searchInput.addEventListener("input", function() {
        callDisplayProducts(selectSort.value);
    });

    // filter the products based on the selected fields
    // filterButton.addEventListener('click', function(e){
    //     e.preventDefault();
    //     callDisplayProducts(selectSort.value);
    //     document.getElementById('filter-form').classList.add('hide-form');

    // });

    // sort the products based on selected option
    selectSort.addEventListener('change',function() {
        callDisplayProducts(selectSort.value);
    });
    


// FUNCTIONS

    // call displayProducts based on sort
    function callDisplayProducts(sort){
        if(sort == "asc"){
            displayProducts(item => searchProducts(item) && getProductsByBrand(item) && getProductsByPriceRange(item) && getProductsByOS(item) && getProductsByRating(item) && getProductsByStock(item), getSortedByPriceAsc());
        } else if(sort == 'desc'){
            displayProducts(item => searchProducts(item) && getProductsByBrand(item) && getProductsByPriceRange(item) && getProductsByOS(item) && getProductsByRating(item) && getProductsByStock(item), getSortedByPriceDesc());
        } else if(sort == 'none') {
            displayProducts(item => searchProducts(item) && getProductsByBrand(item) && getProductsByPriceRange(item) && getProductsByOS(item) && getProductsByRating(item) && getProductsByStock(item));
        }
    }

    // display phones
    function displayProducts(filterFunction,sortFunction){
        let html = '';
        let products = productObj.products;
        if (filterFunction) {
            products = products.filter(filterFunction);
        }
        if (sortFunction) {
            products = products.sort(sortFunction);
        }

        if(products.length > 0){
            products.forEach(product => {
         
            html += `<div class="phone-card col-lg-3 col-md-4 col-12 g-3">
                <div class="phone-img d-flex justify-content-center align-items-center">`;
            
            let img_path = "";
            switch(product.name){
                case "Galaxy A12" :
                    img_path += "samsung-galaxy-a12.png";
                    break;
                case "Galaxy a52s 5G" :
                    img_path += "galaxy-a52s.png";
                    break;
                case "Galaxy s21" :
                    img_path += "samsung-galaxy-s21-5g-0.png";
                    break;
                case "Moto G30" :
                    img_path += "motorola-moto-g30.png";
                    break;
                case "iPhone 13" :
                    img_path += "apple-iphone-13.png";
                    break;
                case "iPhone 13 Pro" :
                    img_path += "apple-iphone-13-pro.png";
                    break;
                case "Mi 11 Lite 5G" :
                    img_path += "xiaomi-mi-11-lite-5g.png";
                    break;
                case "Pixel 6" :
                    img_path += "google-pixel-6.png";
                    break;
            }
                
                    
                
            html += `<img src="/img/${img_path}" alt="Phone placeholder"/>
                </div>
                <div class="phone-info">
                    <h3 class="title">${product.brand}</h3>
                    <h4 class="subtitle">${product.name}</h4>
                    `;
            if(product.discount > 0) {
                    html += `<h5><span class="discounted">${product.price}</span> ${product.price - product.discount} lei</h5>`;
            } else {
                    html += `<h5>${product.price} lei</h5>`;
            }
            html+= `<a href="/details?phone=${product.name}" class="phone-link mb-2"><button class="btn btn-danger">See product></button></a>
                    </div>
                </div>`;

            });
        } else {
            html = "<p>No product found</p>";
        }
    
    
        // document.querySelector("#container").innerHTML = html;
        document.getElementById("phone-row").innerHTML = html;
    }


    // display checkboxes in form
    function displayCheckboxes(property, id){
        let propertySet = new Set();
        let html = '';
        productObj.products.forEach(product => propertySet.add(product[property]));
        propertySet.forEach(item => {
            html+=`
            <input type="checkbox" id="${item}" name="${item}" value="${item}">${item}
            <br>
            `;
        });
        document.getElementById(id).innerHTML += html;
    }
    
    // CUSTOMER ACTIONS

    // Search products by brand and/or name
    function searchProducts(item) {
        let searchValue = searchInput.value;
        return item.brand.toLowerCase().includes(searchValue.toLowerCase()) || item.name.toLowerCase().includes(searchValue.toLowerCase())
    }

    // filter by brands
    function getProductsByBrand(item,brands){
        let checkedBrands = [];
        let selectedBrandCheckboxes = document.querySelectorAll('#filter-brand input[type=checkbox]:checked');
        selectedBrandCheckboxes.forEach(item => {
            checkedBrands.push(item.value);
        });
        if(checkedBrands.length > 0){
            return checkedBrands.indexOf(item.brand) !== -1;
        }
        return true;
    }
    
    // filter by price range
    function getProductsByPriceRange(item){
        let checkedPriceRange = [];
        let selectedPriceRange = document.querySelector('#filter-price input[type=radio]:checked');
        if(selectedPriceRange){
            checkedPriceRange = selectedPriceRange.value.split("_");
        }
        if(checkedPriceRange.length > 0){
            if(checkedPriceRange.length === 1){
                return (item.price-item.discount) >= checkedPriceRange[0];
            } else {
                return (item.price-item.discount) >= checkedPriceRange[0] && (item.price-item.discount) <= checkedPriceRange[1];
            }
        }
        return true;
        
    }

    // filter by OS
    function getProductsByOS(item) {
        let checkedOS = [];
        let selectedOSCheckboxes = document.querySelectorAll('#filter-os input[type=checkbox]:checked');
        selectedOSCheckboxes.forEach(item => {
            checkedOS.push(item.value);
        });
        if(checkedOS.length>0){
            return checkedOS.indexOf(item.operating_system) !== -1;
        }
        return true;
    }

    // filter by minimum rating
    function getProductsByRating(item){
        let selectedRating = document.getElementById('minimum_rating').value;
        if(selectedRating){
            return item.rating >= selectedRating;
        }
        return true;
    }

    // filter by available stock (change stock to zero to see effects)
    function getProductsByStock(item){
        let isChecked = document.getElementById('stock-yes').checked;
        if(isChecked){
            return item.quantity > 0;
        }
        return true;
    }

    // filter by available date (change availability_date to see effects)
    function getProductsByDate(item){
        let today = new Date();
        return new Date(item.availability_date) <= today;
    }

    
    // ADMIN ACTIONS

    // show all phones with less than N items available in stock
    function getProductsWithStock(num){
        let filtered = productObj.products.filter(product => product.quantity < num);
        return filtered
    }

    // show average rating by brand - for all brands
    function getAverageRatingByBrand(){

        let brands = new Set();
        productObj.products.forEach(product => brands.add(product.brand));

        let ratingArr = [];

        brands.forEach(brand => {
            let average = parseFloat(productObj.products.filter(product => product.brand === brand && product.rating > 0).reduce((previous,current,index,array) => {
                let calcSum = previous + current.rating;
                if(index === array.length - 1 ) {
                    return calcSum/array.length;
                }
                return calcSum;
            },0).toFixed(1));
            ratingArr.push([brand,average]);
        });
        return ratingArr;
        
    }

    // show average rating by brand - for selected brands
    function getAverageRatingBySelectedBrand(...brands){

        let ratingArr = [];

        brands.forEach(brand => {
            let average = parseFloat(productObj.products.filter(product => product.brand === brand && product.rating > 0).reduce((previous,current,index,array) => {
                let calcSum = previous + current.rating;
                if(index === array.length - 1 ) {
                    return calcSum/array.length;
                }
                return calcSum;
            },0).toFixed(1));
            ratingArr.push([brand,average]);
        });
        return ratingArr;
        
    }

    // show average discount by brand - for all brands
    function getAverageDiscountByBrand(){

        let brands = new Set();
        productObj.products.forEach(product => brands.add(product.brand));

        let discountArr = [];
        
        brands.forEach(brand => {
            let average = parseFloat(productObj.products.filter(product => product.brand === brand).reduce((previous,current,index,array) => {
                let calcSum = previous + current.discount;
                if(index === array.length - 1 ) {
                    return calcSum/array.length;
                }
                return calcSum;
            },0).toFixed());
            discountArr.push([brand,average]);
        });
        return discountArr;
        
    }

    // show average discount by brand - for selected brands
    function getAverageDiscountBySelectedBrand(...brands){

        let discountArr = [];
        
        brands.forEach(brand => {
            let average = parseFloat(productObj.products.filter(product => product.brand === brand).reduce((previous,current,index,array) => {
                let calcSum = previous + current.discount;
                if(index === array.length - 1 ) {
                    return calcSum/array.length;
                }
                return calcSum;
            },0).toFixed());
            discountArr.push([brand,average]);
        });
        return discountArr;
        
    }

    // show max discount by brand
    function getMaxDiscountByBrand(){

        let brands = new Set();
        productObj.products.forEach(product => brands.add(product.brand));

        let discountArr = [];
        
        brands.forEach(brand => {
            let max = productObj.products.filter(product => product.brand === brand).map(product => product.discount).reduce((previous,current) => Math.max(previous,current));
            discountArr.push([brand,max]);
        });
        return discountArr;
    }


    // sort by brand
    function getSortedByBrand(){
        return (a,b) => {
            return a.brand.localeCompare(b.brand);
        };
    }



    // sort by price asc
    function getSortedByPriceAsc(){
        return (a,b) => {
            return a.price - b.price;
        };
    }


    // sort by price desc
    function getSortedByPriceDesc(){
        return (a,b) => {
            return b.price - a.price;
        };
    }
