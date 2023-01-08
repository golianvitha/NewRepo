export class teamcore{
    rank: number;
    score:number;
    teamname:string;
    teamscore:teamScore;
}

export class teamScore{
    contestDate: Date;
    selection: any;
    state:string;
    stockinfo: StockInfo[];
    teamname:string;
    totalbuyamount:number;

}

export class StockInfo{
    BAJFINANCE:otherInfo;
    HCLTECH:otherInfo;
    NIFTY50:otherInfo;
    BRITANNIA:otherInfo;

}

export class otherInfo{
    amount:number;
    buyprice:number;
    currentamount:number;
    currentprice:number;
    gain:number;
    quantity:number
}