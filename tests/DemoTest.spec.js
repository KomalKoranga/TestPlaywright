import {test, expect} from '@playwright/test';

test ('Demo APT Testing', async ({request}) => {

    const response = await request.get("https://dummyjson.com/products");
    expect (response.status()).toBe(200);
    const responseData = await response.json();
    const HighestReviewProduct = responseData.products.sort((a, b) => b.rating - a.rating)[0];
    console.log(`The highest review product is: ${HighestReviewProduct.title} with a rating of ${HighestReviewProduct.rating}`)    
    const MaximumReviewProduct = responseData.products.reduce((max, product) => product.rating > max.rating ? product : max, responseData.products[0]);
    console.log(`The product with the maximum review is: ${MaximumReviewProduct.title} with a rating of ${MaximumReviewProduct.rating}`);
}
)


test ('Find product having maximum reviews', async ({ request }) => {

const response = await request.get('https://dummyjson.com/products');
const data = await response.json();

const products = data.products;

let maxReviews = 0;
let maxReviewedProducts = [];

for (const product of products) {
    const reviewCount = product.reviews.length;

    if (reviewCount > maxReviews) {
        maxReviews = reviewCount;
        maxReviewedProducts = [product];
    } else if (reviewCount === maxReviews) {
        maxReviewedProducts.push(product);
    }
}

console.log("Maximum number of reviews:", maxReviews);

for (const product of maxReviewedProducts) {
    console.log(
        "Product:",
        product.title,
        "Review Count:",
        product.reviews.length
    );
}
});