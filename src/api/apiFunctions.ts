const PURCHASE_HISTORY_API =
  "https://storage.googleapis.com/marketplace-prod-7728-shop-cdn-e5e2/interview/data.json";

async function fetchPurchases() {
  try {
    const result = await fetch(PURCHASE_HISTORY_API);
    const data = await result.json();
    return data;
  } catch (e) {
    return [];
  }
}

export { fetchPurchases };
