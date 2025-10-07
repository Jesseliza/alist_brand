import re
from playwright.sync_api import Page, expect

def test_campaign_details_page_changes(page: Page):
    """
    This test verifies the changes made to the campaign details page.
    1. Checks for the new header.
    2. Checks for the voucher code popup.
    3. Checks for the new reviews format.
    """
    # 1. Navigate to the campaign details page.
    page.goto("http://localhost:3000/businesses/campaigns/0")

    # 2. Verify the new header and take a screenshot.
    expect(page.locator("text=Business Details")).to_be_visible()
    expect(page.locator("text=Campaigns")).to_be_visible()
    page.screenshot(path="jules-scratch/verification/header.png")

    # 3. Click the "Availabilites" tab.
    page.get_by_role("tab", name="Availabilites").click()

    # Wait for the calendar to load
    expect(page.locator(".h-\\[55px\\]")).to_be_visible()

    # Find an available date and click it
    available_day = page.locator("div[style*='background-color: rgba(0, 164, 182, 0.1)']").first
    available_day.click()

    # 4. Verify the voucher code popup and take a screenshot.
    expect(page.locator("text=Voucher Code")).to_be_visible()
    page.screenshot(path="jules-scratch/verification/voucher_popup.png")

    # 5. Close the popup.
    page.get_by_role("button", name="Close").click()

    # 6. Click the "Reviews" tab.
    page.get_by_role("tab", name="Reviews").click()

    # 7. Verify the new review format and take a screenshot.
    expect(page.locator("text=Unknown Creator").first).to_be_visible()
    page.screenshot(path="jules-scratch/verification/reviews_tab.png")