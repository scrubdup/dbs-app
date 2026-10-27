# PIKK approved Shop and 18+ launch requirements

Status: APPROVED REQUIREMENTS — not implemented or verified. Preserve existing functionality and content. No new bottom navigation tab.

## Shop entry
Shop opens to **Discover**, a combined feed of products, creator posts and inspiration. Keep existing seven bottom navigation entries and persistent music player. Shop header has search, favorites and cart.

## Eight internal Shop destinations
1. Discover — mixed discovery feed; recommendations must be based on real available content.
2. Categories — women's, men's, beauty, electronics, home, fitness and other relevant categories (no kids-focused area).
3. Shop the Look — sellers/creators attach product references to their own photos/videos; tap tag to view listing and checkout.
4. Collections — save/unsave products, images, videos and posts to named boards, public or private; private boards never publicly exposed.
5. Live Shopping — real product-linked livestreams, not simulated broadcasts.
6. Deals — seller-authorized discounts with real prices and expiration rules.
7. Sell — seller registration, verification, listings and inventory management.
8. Orders — actual payment/order status, shipping, returns and refunds.

Include an Inspiration Feed with beauty, fashion, fitness, home decor and lifestyle categories; Following feed, seller ratings, verified badges and disclosed affiliate commissions. The existing Create > Sell Something and Shop > Sell must point to the same seller workflow.

## 18+ policy
Platform-wide 18+ registration; no minors' accounts or children-focused sections. Implement age assurance proportionate to risk, privacy protections, reporting, blocking, moderation and escalation. Adult-only does not mean unrestricted sexual content or real-money gambling. Verify Apple/Google distribution policies and applicable laws before release.

## Non-negotiable acceptance checks
- Do not delete or replace existing features, media, or data with placeholders.
- All eight Shop destinations reachable on mobile without disrupting navigation.
- Collections persist across devices after login; permissions enforced server-side.
- Product tags resolve to actual listings; sold-out/unavailable items handled.
- Checkout uses a payment provider, not fake success screens; order totals, fees and creator splits computed securely server-side.
- Seller verification, inventory, refunds and shipment statuses use authenticated backend.
- Shop search and feeds return actual content, with empty/loading/error states.
- 18+ policy enforced server-side; safety reporting and blocking tested.
- Test on mobile and desktop, build successfully, and pass regression checks before merging or deploying.

## Implementation order
1. Audit current Shop and existing routes; preserve all existing UI.
2. Backend identity, seller listings, media storage and permissions.
3. Shop discovery, categories and collections.
4. Product tagging and shoppable posts/videos.
5. Checkout, orders, shipping, refunds, commissions.
6. Live Shopping, deals, following and recommendations.
7. Security, accessibility, performance, end-to-end QA and launch review.

Do not claim production readiness or completion until code, backend and tests demonstrate it.
