
from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()
    page.goto("http://localhost:3000/login")
    page.get_by_placeholder("Enter phone number").click()
    page.get_by_placeholder("Enter phone number").fill("5555555555")
    page.get_by_role("button", name="Continue").click()
    page.get_by_placeholder("Enter OTP").click()
    page.get_by_placeholder("Enter OTP").fill("1234")
    page.get_by_role("button", name="Verify OTP").click()
    page.wait_for_url("http://localhost:3000/dashboard")
    page.goto("http://localhost:3000/accounts")
    page.screenshot(path="jules-scratch/verification/accounts.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
