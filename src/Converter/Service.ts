import { IService, StatsATH, api } from "./types";

export class Service implements IService {
  constructor(private apiClient: api.Client) {}

  async rate(currencyA: string, currencyB: string): Promise<number> {
    const { ath, current } = await this.apiClient.pricesUSD(currencyA);

    throw new Error("Method not implemented.");
  }
  statsATH(currency: string): Promise<StatsATH> {
    throw new Error("Method not implemented.");
  }
}
