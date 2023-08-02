export namespace api {
  export type Client = {
    pricesUSD(currency: string): Promise<PricesUSD>;
  };

  export type PricesUSD = {
    ath: number;
    current: number;
  };
}

export type IService = {
  rate(currencyA: string, currencyB: string): Promise<number>;
  statsATH(currency: string): Promise<StatsATH>;
};

export type StatsATH = {
  from: number;
  to: number;
};
