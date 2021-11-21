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
    "quantity": 800,
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
    "rating": -1
    },
    {
    "name": "Pixel 6",
    "brand": "Google",
    "operating_system": "Android",
    "price": 649,
    "discount": 0,
    "quantity": 0,
    "availability_date":"2021-10-25",
    "rating": -1
    }
    ],
    "standard_delivery_fee": 35,
    "free_delivery_min_price": 500
    };


    const urlParams = new URLSearchParams(window.location.search);
    const phoneName = urlParams.get('phone');
    console.log(urlParams.get('phone'));

    let product = productObj.products.find( item => item.name === phoneName);
    console.log(product);
    if(product){
        let html = "";
        html += `<div class="title mt-3">
                    <h4 class="title">${product.brand} <span class="subtitle model-name">${product.name}</span></h4>
                </div>
                <div class="container mt-3">
                    <div class="row">
                    <div class="phone-img col-sm-6 col-12" id="phone-img">`;
        
        switch(product.name){
            case "Galaxy A12" :
                html += '<img src="/img/samsung-galaxy-a12.png" alt="Phone placeholder">';
                break;
            case "Galaxy a52s 5G" :
                html += '<img src="/img/galaxy-a52s.png" alt="Phone placeholder">';
                break;
            case "Galaxy s21" :
                html += '<img src="/img/samsung-galaxy-s21-5g-0.png" alt="Phone placeholder">';
                break;
            case "Moto G30" :
                html += '<img src="/img/motorola-moto-g30.png" alt="Phone placeholder">';
                break;
            case "iPhone 13" :
                html += '<img src="/img/apple-iphone-13.png" alt="Phone placeholder">';
                break;
            case "iPhone 13 Pro" :
                html += '<img src="/img/apple-iphone-13-pro.png" alt="Phone placeholder">';
                break;
            case "Mi 11 Lite 5G" :
                html += '<img src="/img/xiaomi-mi-11-lite-5g.png" alt="Phone placeholder">';
                break;
            case "Pixel 6" :
                html += '<img src="/img/google-pixel-6.png" alt="Phone placeholder">';
                break;
        }
                    
        html += `</div>
                    <div class="details col-sm-6 col-12 align-self-center" id="phone-details">`;

            if(product.discount > 0) {
                    html += `<h5>Price : <span class="discounted">${product.price}</span> ${product.price - product.discount} lei</h5>`;
                } else {
                    html += `<h5>Price : ${product.price} lei</h5>`;
                }

                html += `<div id="rating">
                    <h5>Rating : `;
        
                for(let i=1;i<=5;i++){
                    if(Math.trunc(product.rating) >= i){
                        html+=`<span class="fa fa-star checked"></span>`;
                    } else {
                        html+=`<span class="fa fa-star unchecked"></span>`;
                    }
                }
                if(product.rating !== -1) {
                    html+= `<span> (${product.rating})</span>`;
                    
                } else {
                    html += `
                            <span> ( - )</span>
                    `;
                }
    
                html += '</h5></div>'
        
                let avgRating = getAverageRatingBySelectedBrand(product.brand)[0][1];
        
                if(avgRating > 0){
                    html += `
                    <p>(Average: ${avgRating})</p>
                    `;
                } else {
                    html += `
                    <p>(Average: - )</p>
                    `;
                }


            html += `<h5>OS : <span class="detail-value">${product.operating_system}</span></h5>
                    <h5>Available from : <span class="detail-value">${product.availability_date}</span></h5>
                    <h5>In stock :`;
        
        if(product.quantity >0) {
            html += ` <span class="detail-value">YES</span></p>`;
        } else {
            html += ` <span class="detail-value">NO</span></p>`;
        }
        html += `</div>
                    </div>
                </div>`;

        document.getElementById("container").innerHTML = html;
    } else {
        window.location.href="404.html"
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