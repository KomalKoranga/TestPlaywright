import { expect } from "@playwright/test";
export class LoginPage{
    constructor(page){
        this.page = page ;
        this.userName = page.getByLabel("username");
        this.password = page.getByLabel("password");
        this.submit = page.getByRole("button" , {name : "Submit"});
    }

    async Login(username,password){
        await this.page.goto("https://practicetestautomation.com/practice-test-login/");
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.submit.click();
        await expect(this.page.getByText("Logged In Successfully")).toBeVisible();
    }
}