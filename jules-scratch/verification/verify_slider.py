import logging
from playwright.sync_api import Page, expect

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def test_slider_feature(page: Page):
    """
    This test verifies that the image slider is present for posts with more than 3 images.
    """
    try:
        logger.info("Navigating to the campaign details page...")
        # 1. Arrange: Go to the campaign details page.
        page.goto("http://localhost:3000/businesses/campaigns/campaign_1")
        logger.info("Navigation successful.")

        logger.info("Clicking on the 'Posts' tab...")
        # 2. Act: Click on the "Posts" tab.
        posts_tab = page.get_by_role("tab", name="Posts")
        posts_tab.click()
        logger.info("'Posts' tab clicked.")

        logger.info("Looking for the swiper container...")
        # 3. Assert: Check for the swiper container.
        # The first post in the dummy data has 5 images.
        swiper_container = page.locator(".swiper").first
        expect(swiper_container).to_be_visible()
        logger.info("Swiper container is visible.")

        logger.info("Taking a screenshot...")
        # 4. Screenshot: Capture the final result for visual verification.
        page.screenshot(path="jules-scratch/verification/verification.png")
        logger.info("Screenshot taken successfully.")

    except Exception as e:
        logger.error(f"An error occurred: {e}")
        # Re-raise the exception to ensure the test fails
        raise