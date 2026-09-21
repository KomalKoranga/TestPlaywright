import {test, expect} from '@playwright/test';

test (' Demo API Test', async ({request}) => {
    const response = await request.get("https://dummyjson.com/products");
    expect (response.status()).toBe(200);
    //console.log(await response.json());
    const data = await response.json();
    const secondHighestPriceProduct = data.products.sort((a, b) => b.price - a.price)[1];
    console.log(`The second highest price product is: ${secondHighestPriceProduct.title} with a price of ${secondHighestPriceProduct.price}`);
    console.log(secondHighestPriceProduct);
    expect(data.products[0].tags[0]).toBe("beauty");
    expect(data.products[0].description).toMatch(/The Essence */);
}
)

