import type { HeadersFunction, LoaderFunctionArgs } from "react-router";
import { useLoaderData } from "react-router";
import { boundary } from "@shopify/shopify-app-react-router/server";
import { authenticate } from "../shopify.server";
import { 
  Page, 
  Card, 
  Text, 
  BlockStack,
  InlineStack,
  Button,
  Badge,
  Divider,
  Box,
  Thumbnail
} from "@shopify/polaris";
import styles from "../styles/dashboard.module.css";

interface LoaderData {
  shopName: string;
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { session } = await authenticate.admin(request);
  const shopName = session.shop.replace('.myshopify.com', '');
  
  return { shopName };
};

export default function Dashboard() {
  const { shopName } = useLoaderData<LoaderData>();

  return (
    <Page fullWidth>
      <BlockStack gap="500">
        {/* Header Row: Greeting + Hero */}
        <InlineStack gap="400" wrap={false}>
          <Card>
            <BlockStack gap="200">
              <Text as="h2" variant="headingLg">
                Hi, <span className={styles.shopName}>{shopName}</span>! 👋
              </Text>
              <Text as="p" variant="bodyMd" tone="subdued">
                Here's your performance overview for today
              </Text>
            </BlockStack>
          </Card>

          <div className={styles.hero}>
            <BlockStack gap="200">
              <Text as="h1" variant="heading2xl" alignment="center">
                Maximize Your Revenue Across the Customer Journey
              </Text>
              <Text as="p" variant="bodyLg" alignment="center" tone="subdued">
                Drive conversions at every stage: Before Add to Cart, During Cart, and After Purchase
              </Text>
            </BlockStack>
          </div>
        </InlineStack>

        {/* Performance Overview Section */}
        <Card>
          <BlockStack gap="400">
            <Text as="h2" variant="headingLg" alignment="center">
              Performance Statistics
            </Text>
            
            <InlineStack gap="400" wrap={false}>
              <Box width="100%">
                <Card background="bg-surface-secondary">
                  <BlockStack gap="200" align="center">
                    <Text as="p" variant="heading2xl" fontWeight="bold">
                      <span className={styles.metricValue}>$10,840</span>
                    </Text>
                    <Text as="p" variant="bodyMd" tone="subdued">
                      Total Revenue Generated
                    </Text>
                    <span className={styles.metricTrend}>↑ 24% vs last month</span>
                  </BlockStack>
                </Card>
              </Box>

              <Box width="100%">
                <Card background="bg-surface-secondary">
                  <BlockStack gap="200" align="center">
                    <Text as="p" variant="heading2xl" fontWeight="bold">
                      <span className={styles.metricValue}>30.2%</span>
                    </Text>
                    <Text as="p" variant="bodyMd" tone="subdued">
                      Average AOV Increase
                    </Text>
                    <span className={styles.metricTrend}>↑ 5.3% vs last month</span>
                  </BlockStack>
                </Card>
              </Box>

              <Box width="100%">
                <Card background="bg-surface-secondary">
                  <BlockStack gap="200" align="center">
                    <Text as="p" variant="heading2xl" fontWeight="bold">
                      <span className={styles.metricValue}>2,847</span>
                    </Text>
                    <Text as="p" variant="bodyMd" tone="subdued">
                      Customers Converted
                    </Text>
                    <span className={styles.metricTrend}>↑ 18% vs last month</span>
                  </BlockStack>
                </Card>
              </Box>

              <Box width="100%">
                <Card background="bg-surface-secondary">
                  <BlockStack gap="200" align="center">
                    <Text as="p" variant="heading2xl" fontWeight="bold">
                      <span className={styles.metricValue}>68%</span>
                    </Text>
                    <Text as="p" variant="bodyMd" tone="subdued">
                      Offer Acceptance Rate
                    </Text>
                    <span className={styles.metricTrend}>↑ 3% vs last month</span>
                  </BlockStack>
                </Card>
              </Box>
            </InlineStack>
          </BlockStack>
        </Card>

        {/* Funnel Stages Section */}
        <BlockStack gap="400">
          <Text as="h2" variant="headingLg" alignment="center">
            Revenue Optimization Stages
          </Text>

          <InlineStack gap="400" wrap={false}>
            {/* Stage 1: Before Add to Cart */}
            <Box width="100%">
            <Card>
              <BlockStack gap="400">
                <Card background="bg-surface-secondary">
                  <BlockStack gap="300">
                    <InlineStack align="space-between" blockAlign="start">
                      <BlockStack gap="200">
                        <Badge tone="info">Stage 1</Badge>
                        <Text as="h3" variant="headingMd">
                          Before Add to Cart
                        </Text>
                      </BlockStack>
                      <div className={styles.aovMetric}>
                        <BlockStack gap="050">
                          <Text as="p" variant="headingLg" fontWeight="bold">
                            +28.5%
                          </Text>
                          <Text as="p" variant="bodySm">
                            AOV Increase
                          </Text>
                        </BlockStack>
                      </div>
                    </InlineStack>
                    <Text as="p" variant="bodyMd" tone="subdued">
                      Capture customer interest with compelling bundles and offers on product pages
                    </Text>
                  </BlockStack>
                </Card>

                <BlockStack gap="300">
                  {/* Bundles */}
                  <Card background="bg-surface-secondary">
                    <InlineStack gap="300" align="start">
                      <div className={styles.offerIcon}>📦</div>
                      <BlockStack gap="200">
                        <Text as="h4" variant="bodyLg" fontWeight="semibold">
                          Bundles
                        </Text>
                        <InlineStack gap="200" align="start">
                          <Badge>5 active</Badge>
                          <Text as="span" variant="bodyLg" fontWeight="bold" tone="success">
                            $2,450
                          </Text>
                        </InlineStack>
                      </BlockStack>
                    </InlineStack>
                  </Card>

                  {/* Free Gifts */}
                  <Card background="bg-surface-secondary">
                    <InlineStack gap="300" align="start">
                      <div className={styles.offerIcon}>🎁</div>
                      <BlockStack gap="200">
                        <Text as="h4" variant="bodyLg" fontWeight="semibold">
                          Free Gifts
                        </Text>
                        <InlineStack gap="200" align="start">
                          <Badge>3 active</Badge>
                          <Text as="span" variant="bodyLg" fontWeight="bold" tone="success">
                            $890
                          </Text>
                        </InlineStack>
                      </BlockStack>
                    </InlineStack>
                  </Card>

                  {/* Add-ons */}
                  <Card background="bg-surface-secondary">
                    <InlineStack gap="300" align="start">
                      <div className={styles.offerIcon}>➕</div>
                      <BlockStack gap="200">
                        <Text as="h4" variant="bodyLg" fontWeight="semibold">
                          Add-ons
                        </Text>
                        <InlineStack gap="200" align="start">
                          <Badge>2 active</Badge>
                          <Text as="span" variant="bodyLg" fontWeight="bold" tone="success">
                            $650
                          </Text>
                        </InlineStack>
                      </BlockStack>
                    </InlineStack>
                  </Card>

                  {/* Quantity Breaks */}
                  <Card background="bg-surface-secondary">
                    <InlineStack gap="300" align="start">
                      <div className={styles.offerIcon}>📊</div>
                      <BlockStack gap="200">
                        <Text as="h4" variant="bodyLg" fontWeight="semibold">
                          Quantity Breaks
                        </Text>
                        <InlineStack gap="200" align="start">
                          <Badge>2 active</Badge>
                          <Text as="span" variant="bodyLg" fontWeight="bold" tone="success">
                            $1,200
                          </Text>
                        </InlineStack>
                      </BlockStack>
                    </InlineStack>
                  </Card>
                </BlockStack>

                <InlineStack gap="200">
                  <Button variant="primary">+ New Bundle</Button>
                  <Button>View All</Button>
                </InlineStack>
              </BlockStack>
            </Card>
            </Box>

            {/* Stage 2: Cart - COMING SOON */}
            <Box width="100%">
            <div className={styles.comingSoonCard}>
              <div className={styles.comingSoonBadge}>
                <span className={styles.sparkle}>✨</span>
                Coming Soon
                <span className={styles.sparkle}>✨</span>
              </div>
              
              <Card>
                <BlockStack gap="400">
                  <Card background="bg-surface-secondary">
                    <BlockStack gap="300">
                      <InlineStack align="space-between" blockAlign="start">
                        <BlockStack gap="200">
                          <Badge>Stage 2</Badge>
                          <Text as="h3" variant="headingMd">
                            Cart Page
                          </Text>
                        </BlockStack>
                        <div className={`${styles.aovMetric} ${styles.aovMetricDisabled}`}>
                          <BlockStack gap="050">
                            <Text as="p" variant="headingLg" fontWeight="bold">
                              --
                            </Text>
                            <Text as="p" variant="bodySm">
                              AOV Increase
                            </Text>
                          </BlockStack>
                        </div>
                      </InlineStack>
                      <Text as="p" variant="bodyMd" tone="subdued">
                        Increase cart value with strategic upsells and cross-sells in the cart drawer
                      </Text>
                    </BlockStack>
                  </Card>

                  <div className={styles.teaserContent}>
                    <div className={styles.teaserIcon}>🛒</div>
                    <BlockStack gap="300">
                      <Text as="h3" variant="bodyLg" fontWeight="semibold" alignment="center">
                        Powerful Cart Optimization Features
                      </Text>
                      <BlockStack gap="200">
                        <InlineStack gap="200" align="start">
                          <span className={styles.checkmark}>✓</span>
                          <Text as="p" variant="bodyMd">Cart Drawer Upsells</Text>
                        </InlineStack>
                        <InlineStack gap="200" align="start">
                          <span className={styles.checkmark}>✓</span>
                          <Text as="p" variant="bodyMd">Smart Cross-Sells</Text>
                        </InlineStack>
                        <InlineStack gap="200" align="start">
                          <span className={styles.checkmark}>✓</span>
                          <Text as="p" variant="bodyMd">Order Bumps</Text>
                        </InlineStack>
                        <InlineStack gap="200" align="start">
                          <span className={styles.checkmark}>✓</span>
                          <Text as="p" variant="bodyMd">Progressive Discounts</Text>
                        </InlineStack>
                      </BlockStack>
                    </BlockStack>
                  </div>

                  <InlineStack gap="200">
                    <Button variant="primary" disabled>+ New Cart Offer</Button>
                    <Button disabled>View All</Button>
                  </InlineStack>
                </BlockStack>
              </Card>
            </div>
            </Box>

            {/* Stage 3: After Add to Cart */}
            <Box width="100%">
            <Card>
              <BlockStack gap="400">
                <Card background="bg-surface-secondary">
                  <BlockStack gap="300">
                    <InlineStack align="space-between" blockAlign="start">
                      <BlockStack gap="200">
                        <Badge tone="success">Stage 3</Badge>
                        <Text as="h3" variant="headingMd">
                          After Add to Cart
                        </Text>
                      </BlockStack>
                      <div className={styles.aovMetric}>
                        <BlockStack gap="050">
                          <Text as="p" variant="headingLg" fontWeight="bold">
                            +32.8%
                          </Text>
                          <Text as="p" variant="bodySm">
                            AOV Increase
                          </Text>
                        </BlockStack>
                      </div>
                    </InlineStack>
                    <Text as="p" variant="bodyMd" tone="subdued">
                      Maximize revenue with post-purchase upsells and thank you page offers
                    </Text>
                  </BlockStack>
                </Card>

                <BlockStack gap="300">
                  {/* One-Click Upsells */}
                  <Card background="bg-surface-secondary">
                    <InlineStack gap="300" align="start">
                      <div className={styles.offerIcon}>⚡</div>
                      <BlockStack gap="200">
                        <Text as="h4" variant="bodyLg" fontWeight="semibold">
                          One-Click Upsells
                        </Text>
                        <InlineStack gap="200" align="start">
                          <Badge>5 active</Badge>
                          <Text as="span" variant="bodyLg" fontWeight="bold" tone="success">
                            $3,200
                          </Text>
                        </InlineStack>
                      </BlockStack>
                    </InlineStack>
                  </Card>

                  {/* Thank You Page Offers */}
                  <Card background="bg-surface-secondary">
                    <InlineStack gap="300" align="start">
                      <div className={styles.offerIcon}>🎉</div>
                      <BlockStack gap="200">
                        <Text as="h4" variant="bodyLg" fontWeight="semibold">
                          Thank You Page Offers
                        </Text>
                        <InlineStack gap="200" align="start">
                          <Badge>3 active</Badge>
                          <Text as="span" variant="bodyLg" fontWeight="bold" tone="success">
                            $1,450
                          </Text>
                        </InlineStack>
                      </BlockStack>
                    </InlineStack>
                  </Card>
                </BlockStack>

                <InlineStack gap="200">
                  <Button variant="primary">+ New Offer</Button>
                  <Button>View All</Button>
                </InlineStack>
              </BlockStack>
            </Card>
            </Box>
          </InlineStack>
        </BlockStack>

        {/* Preferred Partners Section */}
        <Divider />
        
        <BlockStack gap="400">
          <Text as="h2" variant="headingLg" alignment="center">
            Preferred Partners
          </Text>

          <InlineStack gap="400" wrap={false}>
            {/* Partner 1: Onially */}
            <Box width="100%">
            <Card>
              <BlockStack gap="400">
                <div className={styles.partnerBanner}>
                  <img 
                    src="https://www.onially.com/cdn/shop/files/Logo_Onially_noir.png" 
                    alt="Onially"
                    className={styles.partnerBannerLogo}
                  />
                </div>
                <BlockStack gap="300">
                  <Text as="h3" variant="headingMd">
                    Onially - After-sales service
                  </Text>
                  <Text as="p" variant="bodyMd" tone="subdued">
                    Professional customer service for e-commerce: brand and dropshipping. Complete management, virtual assistance, AI solutions.
                  </Text>
                  <Button>View App</Button>
                </BlockStack>
              </BlockStack>
            </Card>
            </Box>

            {/* Partner 2: DECO */}
            <Box width="100%">
            <Card>
              <BlockStack gap="400">
                <InlineStack align="space-between">
                  <Thumbnail
                    source="https://cdn.shopify.com/app-store/listing_images/13484bd181d58bce4fa70e4baa708e2f/icon/CJuBqcmj-IYDEAE=.jpeg"
                    alt="DECO Product Labels & Badges"
                    size="large"
                  />
                  <BlockStack gap="100" align="end">
                    <Text as="p" variant="bodyMd" fontWeight="bold">
                      <span style={{ color: '#f77709' }}>★★★★★</span>
                    </Text>
                    <Text as="p" variant="bodySm" tone="subdued">
                      4.9 (781 Reviews)
                    </Text>
                  </BlockStack>
                </InlineStack>
                <BlockStack gap="300">
                  <Text as="h3" variant="headingMd">
                    DECO Product Labels & Badges
                  </Text>
                  <Text as="p" variant="bodyMd" tone="subdued">
                    Boost sales with eye-catching badges, product labels & banner bars.
                  </Text>
                  <Button>View App</Button>
                </BlockStack>
              </BlockStack>
            </Card>
            </Box>

            {/* Partner 3: Chazify */}
            <Box width="100%">
            <Card>
              <BlockStack gap="400">
                <InlineStack align="space-between">
                  <Thumbnail
                    source="https://cdn.shopify.com/app-store/listing_images/503a9dd92c4f92c285315f35dd858797/icon/CJr3ysaQrIQDEAE=.jpeg"
                    alt="Chazify Product Reviews App"
                    size="large"
                  />
                  <BlockStack gap="100" align="end">
                    <Text as="p" variant="bodyMd" fontWeight="bold">
                      <span style={{ color: '#f77709' }}>★★★★★</span>
                    </Text>
                    <Text as="p" variant="bodySm" tone="subdued">
                      5.0 (27 Reviews)
                    </Text>
                  </BlockStack>
                </InlineStack>
                <BlockStack gap="300">
                  <Text as="h3" variant="headingMd">
                    Chazify – Product Reviews App
                  </Text>
                  <Text as="p" variant="bodyMd" tone="subdued">
                    Automate post-purchase reviews with Chazify and display them in fully customizable layouts to build trust and drive repeat sales — Compatible with Hydrogen.
                  </Text>
                  <Button>View App</Button>
                </BlockStack>
              </BlockStack>
            </Card>
            </Box>
          </InlineStack>
        </BlockStack>
      </BlockStack>
    </Page>
  );
}

export const headers: HeadersFunction = (headersArgs) => {
  return boundary.headers(headersArgs);
};
