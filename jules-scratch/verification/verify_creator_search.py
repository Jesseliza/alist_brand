
from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Navigate to the login page
    page.goto("http://localhost:3000/login")

    # Wait for the page to load
    page.wait_for_load_state("networkidle")

    # Enter phone number and send OTP
    page.fill('input[placeholder="Phone Number"]', "5555555555")
    page.click('button:text("Send OTP")')

    # Wait for the OTP input to appear
    page.wait_for_selector('input[placeholder="OTP"]')

    # Enter OTP
    page.fill('input[placeholder="OTP"]', "1234")

    # Click the captcha
    page.click('div[id="nc_1_n1z"]')

    # Click the sign in button
    page.click('button:text("Sign In")')

    # Wait for navigation to the dashboard
    page.wait_for_url("**/dashboard")

    # Navigate to a dedicated offer page
    page.goto("http://localhost:3000/businesses/dedicated-offers/1")

    # Click on the "Creators" tab
    page.click('text="Creators"')

    # Enter a search query
    page.fill('input[placeholder="Search"]', "John")

    # Wait for the search results to update
    page.wait_for_timeout(1000)

    # Take a screenshot
    page.screenshot(path="jules-scratch/verification/verification.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
