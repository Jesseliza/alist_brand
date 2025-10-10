from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Navigate to the login page
    page.goto("http://localhost:3000/login")

    # Fill in the phone number and send OTP
    page.get_by_placeholder("Phone Number").fill("555555555")
    page.get_by_role("button", name="Send OTP").click()

    # Wait for the OTP input to appear
    page.wait_for_selector('input[placeholder="OTP"]')

    # Fill in the OTP
    page.get_by_placeholder("OTP").fill("1234")

    # Handle the captcha
    slider = page.locator(".ant-slider-handle")
    if slider.is_visible():
        slider.drag_to(page.locator(".ant-slider-rail"), target_position={"x": 500, "y": 0})

    # Click the sign in button
    page.get_by_role("button", name="Sign In").click()
    page.wait_for_load_state("networkidle")

    # Navigate to the dedicated offers page
    page.goto("http://localhost:3000/businesses/dedicated-offers")
    page.wait_for_load_state("networkidle")
    page.screenshot(path="jules-scratch/verification/dedicated-offers-list.png")

    # Navigate to the brand page
    page.goto("http://localhost:3000/businesses/brands/1287")
    page.wait_for_load_state("networkidle")
    # Click on the "Dedicated Offers" tab
    page.get_by_role("button", name="Dedicated Offers").click()
    page.wait_for_load_state("networkidle")
    page.screenshot(path="jules-scratch/verification/brand-dedicated-offers.png")

    context.close()
    browser.close()

with sync_playwright() as playwright:
    run(playwright)