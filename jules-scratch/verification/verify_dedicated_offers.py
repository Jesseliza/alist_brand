from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()
    page.goto("http://localhost:3000/businesses/dedicated-offers")
    page.wait_for_load_state("networkidle")
    page.screenshot(path="jules-scratch/verification/dedicated-offers-list.png")

    page.locator("a[href*='/businesses/dedicated-offers/']").first.click()
    page.wait_for_load_state("networkidle")
    page.screenshot(path="jules-scratch/verification/dedicated-offer-details.png")

    context.close()
    browser.close()

with sync_playwright() as playwright:
    run(playwright)