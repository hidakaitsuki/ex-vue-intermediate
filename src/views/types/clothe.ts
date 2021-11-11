/**
 * 衣服を表す部品用のクラス.
 */
export class Clothe {
  constructor(
    // id
    private _id: number,
    // カテゴリ
    private _category: string,
    // ジャンル
    private _genre: string,
    // 性別
    private _gender: number,
    // 色
    private _color: string,
    // 価格
    private _price: number,
    // サイズ
    private _size: string
  ) {}
  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get category(): string {
    return this._category;
  }

  public set category(category: string) {
    this._category = category;
  }

  public get genre(): string {
    return this._genre;
  }

  public set genre(genre: string) {
    this._genre = genre;
  }

  public get gender(): number {
    return this._gender;
  }

  public set gender(gender: number) {
    this._gender = gender;
  }

  public get color(): string {
    return this._color;
  }

  public set color(color: string) {
    this._color = color;
  }

  public get price(): number {
    return this._price;
  }

  public set price(price: number) {
    this._price = price;
  }

  public get size(): string {
    return this._size;
  }

  public set size(size: string) {
    this._size = size;
  }
}
