from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Navigate to the dashboard page
    page.goto("http://localhost:3000/dashboard")

    # Wait for the dashboard stat cards to be visible
    expect(page.locator("text=Total campaigns")).to_be_visible(timeout=30000)

    # Take a screenshot of the dashboard
    page.screenshot(path="jules-scratch/verification/dashboard_verification.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)