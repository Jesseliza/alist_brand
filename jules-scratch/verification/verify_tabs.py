from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Mobile viewport
    page.set_viewport_size({"width": 375, "height": 812})

    page.goto("http://localhost:3000/businesses/brands")
    page.wait_for_load_state("networkidle")

    # Click on the first brand card
    page.locator(".BrandMobileCard_card__3xzmV").first.click()
    page.wait_for_load_state("networkidle")

    page.screenshot(path="jules-scratch/verification/brand_details_mobile.png")

    # Desktop viewport
    page.set_viewport_size({"width": 1280, "height": 720})
    page.goto("http://localhost:3000/businesses/brands")
    page.wait_for_load_state("networkidle")

    # Click on the first brand card
    page.locator(".BrandCard_card__3xzmV").first.click()
    page.wait_for_load_state("networkidle")

    page.screenshot(path="jules-scratch/verification/brand_details_desktop.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)