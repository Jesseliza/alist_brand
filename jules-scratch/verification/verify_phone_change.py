from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Verify Creator Profile Page
    page.goto("http://localhost:3000/creators/profiles/1")
    page.get_by_role("tab", name="Change Phone Number").click()
    expect(page.get_by_text("Current Phone Number")).to_be_visible()
    page.screenshot(path="jules-scratch/verification/creator_phone_change.png")

    # Verify Account Edit Page
    page.goto("http://localhost:3000/businesses/accounts/0")
    page.get_by_role("tab", name="Change Phone Number").click()
    expect(page.get_by_text("Current Phone Number")).to_be_visible()
    page.screenshot(path="jules-scratch/verification/account_phone_change.png")

    context.close()
    browser.close()

with sync_playwright() as playwright:
    run(playwright)