/**
* @Method: Returns the plural form of any noun.
* @Param {string}
* @Return {string}
*/
export function getPlural(str: any): string {
  return "from getPlural";
}

export class Quote {

  public name: string = '';
  public symbolName: string = '';
  public dataTime: Date = new Date();
  public previousClose: number = 0;

  public change: number = 0;
  public open: number = 0;
  public low: number = 0;
  public high: number = 0;
  public last: number = 0;
  public bid: number = 0;
  public ask: number = 0;
}

export class Greeks {
  public implied_volatility: number = 0;
  public delta: number = 0;
  public gamma: number = 0;
  public vega: number = 0;
  public theta: number = 0;
  public time: number = 0;
  public interest: number = 0;
  public dividend_rate: number = 0;
}

export class Option {
  public stocks_per_contract: number = 0;
  public DEFAULT_STOCKS_PER_CONTRACT: number = 0;
  public type: string = '';
  public stock: string = '';
  public symbol: string = '';
  public strike: number = 0;
  public expiration: Date = new Date();

  public last: number = 0;
  public change: number = 0;
  public bid: number = 0;
  public ask: number = 0;
  public timevalue: number = 0;


  public volume: number = 0;
  public open_int: number = 0;
  public update_timestamp: Date = new Date();
  public greeks: Greeks = new Greeks();
}

export class Mainhelp {
  public getQuote(ticker: string): void {

  }

  public CorrectSymbol(ticker: string): string {
    //ticker = ticker.ToUpper().Trim().Replace(".NS", "");
    switch (ticker) {
      case "NIFTY":
        return "^NIFTY";
      case "BANKNIFTY":
        return "^BANKNIFTY";
      case "NIFTYBANK":
        return "^BANKNIFTY";
      case "MINIFTY":
      case "JUNIOR":
      case "^JUNIOR":
        return "^MINIFTY";
      case "NIFTYINFRA":
        return "^NIFTYINFRA";
      case "NIFTYIT":
        return "^NIFTYIT";
      case "NIFTYPSE":
        return "^NIFTYPSE";
      case "NIFTYMCAP50":
        return "^NIFTYMCAP50";
      case "NIFTYCPSE":
        return "^NIFTYCPSE";
      default:
        return ticker;
    }
  }
}