import { format } from "date-fns";

/**
 * 野球チームを表す部品用のクラス.
 */
export class Team {
  constructor(
    // id
    private _id: number,
    // 球団名
    private _name: string,
    // 本拠地
    private _home: string,
    // 発足日
    private _InaugurationDate: Date,
    // 歴史
    private _history: string
  ) {
  

  }
  
  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get home(): string {
    return this._home;
  }

  public set home(home: string) {
    this._home = home;
  }

  public get InaugurationDate(): Date {
    return this._InaugurationDate;
  }

  public set InaugurationDate(InaugurationDate: Date) {
    this._InaugurationDate = InaugurationDate;
  }

  public get history(): string {
    return this._history;
  }

  public set history(history: string) {
    this._history = history;
  }
  public get formatInaugurationDate():string{
    return format(this.InaugurationDate,"yyyy年MM月dd日")
  }
}
