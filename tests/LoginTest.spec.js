import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';
import { log } from 'node:console';

test ( 'Verify Title', async ({page}) => {

    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await expect(page).toHaveTitle("Test Login | Practice Test Automation");

}
)
test ( 'Login Test', async ({page}) => {
    const url = "https://practicetestautomation.com/practice-test-login/";
    await page.goto(url);
    await page.locator("#username").fill("student");
    await page.locator("#password").fill("Password123");
    //await page.locator("#password").pressSequentially(["Tab", "Enter"]);
    await page.locator("#submit").click();
    await expect(page.getByText("Logged In Successfully")).toBeVisible();
    await expect(page).toHaveTitle(/Logged In Successfully .*/);
    //await page.locator("#Log out").click();
    await page.getByText("Log out").click();
    await expect(page).toHaveTitle(/Test Login .*/);
    const add = (a , b) => a+b ;
    console.log(add(10,10)); 
    const user = {
    name: "Komal",
    role: "QA Lead"
    };
    for (const key in user) {
    console.log(user[key]);
}
}
)
test.only ('Check Login PageObject', async ({page}) => {
await page.context().storageState({path : 'auth.json'});
const login = new LoginPage(page);
await login.Login('student','Password123');
console.log("This is to check git changes");
}
)