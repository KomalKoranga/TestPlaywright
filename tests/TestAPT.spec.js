import {test, expect} from '@playwright/test';
test.describe.configure({mode: 'serial'});
let id;
test.only (' Demo API Test', async ({request}) => {
    const response = await request.get("https://dummyjson.com/products");
    expect (response.status()).toBe(200);
    //console.log(await response.json());
    const data = await response.json();
    const responsejson = await response.json();
    const secondHighestPriceProduct = data.products.sort((a, b) => b.price - a.price)[1];
    //onsole.log(`The second highest price product is: ${secondHighestPriceProduct.title} with a price of ${secondHighestPriceProduct.price}`);
    expect(data.products.length).toBeGreaterThan(0);
    expect(data.products[0]).toHaveProperty('title');
    expect (data.products[0]).toHaveProperty('price');
    const headers = response.headers();
    expect (headers['content-type']).toContain('application/json');
    const responseTime = response.timing().responseEnd - response.timing().requestStart;
    console.log(`Response time: ${responseTime} ms`);
    const duplicatePriceProducts = data.products.filter((product, index, self) => self.findIndex(p => p.price === product.price) !== index);
    console.log(`Duplicate price products: ${duplicatePriceProducts.map(p => p.title).join(', ')}`)
    const totalprice = data.products.reduce((acc, product) => acc + product.price, 0);
    const everypriceexists = data.products.every(product => product.price > 0);
    expect (data).toEqual(responsejson);
    
}
)

test.skip ('Post Request', async ({request}) => {
    const response = await request.post( "https://reqres.in/api/users",
        {
            data : {"name": "morpheus","job": "leader"}
        },
        {
            headers : {"Content-Type" : "application/json"}
        }
    )
    const data = await response.json();
    console.log(data);
    expect (data).toHaveProperty('id');
    expect (data).toHaveProperty('createdAt');
    expect (data).toMatchObject({
        "name": "morpheus","job": "leader"
    })
    id = data.id;
    console.log(`The id of the created user is: ${id}`);
    //const user = (data).data.find(user => user.name === "morpheus" && user.job === "leader");
    //expect(user).toBeDefined();
}
)

test.skip ("Delete Test", async ({request}) => {
    const response = await request.delete(`https://reqres.in/api/users/${id}`);
    expect (response.status()).toBe(204);
    console.log(`The user with id ${id} has been deleted successfully.`);
})
