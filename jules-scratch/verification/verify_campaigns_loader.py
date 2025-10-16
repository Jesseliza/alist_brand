from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()
    page.goto("http://localhost:3000/businesses/campaigns")
    page.get_by_placeholder("Search campaigns").fill("test")
    page.wait_for_selector("div.loader", timeout=5000)
    page.screenshot(path="jules-scratch/verification/campaigns_loader.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)