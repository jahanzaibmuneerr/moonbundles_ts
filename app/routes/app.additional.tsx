import { Page, Layout, Card, Text, BlockStack, List } from "@shopify/polaris";

export default function AdditionalPage() {
  return (
    <Page
      title="Additional page"
      backAction={{ url: "/app" }}
    >
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="400">
              <Text as="h2" variant="headingMd">
                Multiple pages
              </Text>
              <Text as="p" variant="bodyMd">
                The app template comes with an additional page which demonstrates how
                to create multiple pages within app navigation using{" "}
                <a 
                  href="https://shopify.dev/docs/apps/tools/app-bridge"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#2c6ecb", textDecoration: "underline" }}
                >
                  App Bridge
                </a>
                .
              </Text>
              <Text as="p" variant="bodyMd">
                To create your own page and have it show up in the app navigation, add
                a page inside <code>app/routes</code>, and a link to it in the{" "}
                <code>&lt;s-app-nav&gt;</code> component found in{" "}
                <code>app/routes/app.tsx</code>.
              </Text>
            </BlockStack>
          </Card>
        </Layout.Section>

        <Layout.Section variant="oneThird">
          <Card>
            <BlockStack gap="300">
              <Text as="h2" variant="headingMd">
                Resources
              </Text>
              <List>
                <List.Item>
                  <a 
                    href="https://shopify.dev/docs/apps/design-guidelines/navigation#app-nav"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#2c6ecb", textDecoration: "underline" }}
                  >
                    App nav best practices
                  </a>
                </List.Item>
              </List>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
