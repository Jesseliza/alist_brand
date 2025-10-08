import re
from playwright.sync_api import Page, expect, sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    try:
        # Go to the login page
        page.goto("http://localhost:3000/")

        # Enter phone number and send OTP
        page.get_by_placeholder("Phone Number").fill("501234567")
        page.get_by_role("button", name="Send OTP").click()

        # Wait for the OTP form to appear
        expect(page.get_by_text(re.compile("Enter the OTP sent to"))).to_be_visible()

        # Fill in the OTP
        otp_input = page.get_by_placeholder("OTP")
        otp_input.fill("1234")

        # Click login
        page.get_by_role("button", name="Sign In").click()

        # Wait for navigation to the dashboard
        expect(page).to_have_url(re.compile(".*/dashboard"), timeout=10000)

        # Open profile dropdown and navigate to "My Profile"
        page.locator(".flex.items-center.gap-4.cursor-pointer").click()
        page.get_by_role("link", name="My Profile").click()

        # Verify on the correct page
        expect(page).to_have_url(re.compile(".*/businesses/accounts/.*"))

        # --- Verification Step 1: Check Profile Page Tabs and Details ---

        # Verify the "Change Phone Number" tab is visible
        change_phone_tab = page.get_by_role("tab", name="Change Phone Number")
        expect(change_phone_tab).to_be_visible()

        # Verify the "Brands" tab is visible (for non-admin)
        brands_tab = page.get_by_role("tab", name="Brands")
        expect(brands_tab).to_be_visible()

        # Verify the phone number input is NOT visible on the "Details" tab
        phone_input = page.locator('input[name="phoneNumber"]')
        expect(phone_input).not_to_be_visible()

        # --- Verification Step 2: Test "Change Phone Number" Tab ---
        change_phone_tab.click()

        # Verify the new tab is active and form elements are present
        expect(change_phone_tab).to_have_attribute("aria-selected", "true")
        expect(page.get_by_label("Country Code")).to_be_visible()
        expect(page.get_by_role("button", name="Send OTP")).to_be_visible()

        # Take a screenshot of the form
        page.screenshot(path="jules-scratch/verification/verification.png")

    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)