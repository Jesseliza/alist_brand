from playwright.sync_api import sync_playwright, expect

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the campaign details page
        # Using a known campaign ID from the provided API response
        page.goto("http://localhost:3000/businesses/campaigns/61986")

        # Wait for the page to load and the overview tab to be visible
        expect(page.locator("text=Overview")).to_be_visible()

        # The overview tab is selected by default, so no need to click it.

        # Take a screenshot of the overview tab content
        page.screenshot(path="jules-scratch/verification/overview_verification.png")

        browser.close()

if __name__ == "__main__":
    run_verification()