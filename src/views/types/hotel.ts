/**
 * ホテルを表す部品用のクラス.
 */
export class Hotel {
  constructor(
    // id
    private _id: number,
    //  エリア名
    private _areaName: string,
    //  ホテル名
    private _hotelName: string,
    // 住所
    private _address: string,
    //   最寄駅
    private _nearestStation: string,
    // 価格
    private _price: number,
    // 駐車場の有無
    private _parking: boolean
  ) {}
  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get areaName(): string {
    return this._areaName;
  }

  public set areaName(areaName: string) {
    this._areaName = areaName;
  }

  public get hotelName(): string {
    return this._hotelName;
  }

  public set hotelName(hotelName: string) {
    this._hotelName = hotelName;
  }

  public get address(): string {
    return this._address;
  }

  public set address(address: string) {
    this._address = address;
  }

  public get nearestStation(): string {
    return this._nearestStation;
  }

  public set nearestStation(nearestStation: string) {
    this._nearestStation = nearestStation;
  }

  public get price(): number {
    return this._price;
  }

  public set price(price: number) {
    this._price = price;
  }

  public get parking(): boolean {
    return this._parking;
  }

  public set parking(parking: boolean) {
    this._parking = parking;
  }
}
