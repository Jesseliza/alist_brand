from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Verify login page
    page.goto("http://localhost:3000/login")
    expect(page.get_by_placeholder("Phone Number")).to_be_visible()
    page.screenshot(path="jules-scratch/verification/login_page.png")

    # Verify add account page
    # To get to the add account page, we need to log in first.
    # For now, I will just navigate to the page directly.
    # I will assume that the user is already logged in.
    page.goto("http://localhost:3000/businesses/accounts/create")
    expect(page.get_by_label("First name")).to_be_visible()
    page.screenshot(path="jules-scratch/verification/add_account_page.png")

    context.close()
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
