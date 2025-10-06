from playwright.sync_api import sync_playwright, expect
import re

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    try:
        page.goto("http://localhost:3000/login")

        # The OTP form is now always visible, so we can directly check for the input
        otp_input = page.get_by_placeholder("OTP")
        expect(otp_input).to_be_visible()

        # Check if the OTP input is focused
        expect(otp_input).to_be_focused()

        # Take a screenshot
        page.screenshot(path="jules-scratch/verification/otp_focus_verification.png")

    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)