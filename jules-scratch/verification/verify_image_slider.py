from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Navigate to the campaign details page
    page.goto("http://localhost:3000/businesses/campaigns/campaign_1?tab=Posts")

    # Wait for the posts to load
    page.wait_for_selector("article")

    # Find the post with more than 3 images. I added a post for creator "4"
    # The last post on the page should be the one I added.
    post_with_slider = page.locator("article").last

    # Click on the third image, which should have the "+2" overlay
    third_image = post_with_slider.locator("img").nth(2)
    third_image.click()

    # Wait for the modal to appear
    page.wait_for_selector(".swiper")

    # Take a screenshot of the modal
    page.screenshot(path="jules-scratch/verification/image_slider_modal.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)