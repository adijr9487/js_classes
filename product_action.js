import {data} from './product.js';

let product = data["products"];

function get_all_products_by_category() {
    
    let all_category_product = new Map()
    product.forEach(element => {
        if(!all_category_product.has(element.category)){
            all_category_product.set(element.category, [])
        }
        all_category_product.get(element.category).push(element)
    });

    return all_category_product
}


function get_all_products_by_brand(){
    let all_brand_product = new Map()

    product.forEach(element => {
        if(!all_brand_product.has(element.brand)){
            all_brand_product.set(element.brand, [])
        }
        all_brand_product.get(element.brand).push(element)
    });
    
    return all_brand_product
}

// console.log(get_all_products_by_category())
// console.log(get_all_products_by_brand())