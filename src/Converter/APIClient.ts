import { api } from "./types";

export class APIClient implements api.Client {
  pricesUSD(currency: string): Promise<api.PricesUSD> {
    console.log(`APIClient.pricesUSD(${currency})`);
    if (currency === "bitcoin") {
      return Promise.resolve({
        ath: 10,
        current: 24,
      });
    } else {
      return Promise.resolve({
        ath: 20,
        current: 12,
      });
    }
  }
}
