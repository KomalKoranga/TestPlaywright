import {test, expect} from '@playwright/test';

test ("This is positive test", async ({page}) => {
    const url = "https://www.saucedemo.com/" ;
    const username = ["standard_user","locked_out_user","problem_user","performance_glitch_user","error_user","visual_user"];
    const password ="secret_sauce";
    await page.goto(url);
    await page.getByRole("textbox", {name : "Username"}).fill(username[0]);
    page.pause(100000);
    await page.getByRole("textbox", {name : "Password"}).fill(password);
    await page.getByRole('button', {name : "Login"}).click();
    await expect(page).toHaveTitle(/Swag Labs/);
}
)

test ("Locked User", async ({page}) => {
    const url = "https://www.saucedemo.com/" ;
    const username = ["standard_user","locked_out_user","problem_user","performance_glitch_user","error_user","visual_user"];
    const password ="secret_sauce";
    await page.goto(url);
    await page.getByRole("textbox", {name : "Username"}).fill(username[1]);
    page.pause(100000);
    await page.getByRole("textbox", {name : "Password"}).fill(password);
    await page.getByRole('button', {name : "Login"}).click();
    await expect(page).toHaveTitle(/Swag Labs/);
    await expect(page.getByText("Epic sadface: Sorry, this user has been locked out.")).toBeVisible();
}
)