from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context(viewport={'width': 375, 'height': 812})
    page = context.new_page()

    # Increase the timeout to 60 seconds
    page.set_default_timeout(60000)

    try:
        # Navigate to the login page
        page.goto("http://localhost:3000/login")

        # Fill in the phone number and send OTP
        page.fill('input[placeholder="Phone Number"]', "9876543210")
        page.click('button:has-text("Send OTP")')

        # Wait for the OTP input to appear
        expect(page.locator('input[placeholder="OTP"]')).to_be_visible()

        # For this test, we'll assume the OTP is automatically filled or not needed for the test environment
        # and the captcha is passed.
        # In a real scenario, this would need to be handled.

        # Click the Sign In button
        # I will assume the button becomes enabled after a few seconds
        page.wait_for_timeout(5000)
        page.click('button:has-text("Sign In")')


        # Wait for navigation to the dashboard page
        expect(page).to_have_url("http://localhost:3000/businesses/dashboard")

        # Navigate to the campaigns page and click on the first campaign
        page.goto("http://localhost:3000/businesses/campaigns")
        page.locator('a[href*="/businesses/campaigns/"]').first.click()

        # Wait for the tabs to be visible
        expect(page.locator('nav[class*="overflow-x-auto"]')).to_be_visible()

        # Take a screenshot of the tabs
        page.screenshot(path="jules-scratch/verification/tabs.png")

    except Exception as e:
        print(f"An error occurred: {e}")
        page.screenshot(path="jules-scratch/verification/error.png")

    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)