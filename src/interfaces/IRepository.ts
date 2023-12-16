export interface IRepository<T> {
  getAll(): T[];

  add(item: T): void;
  addMany(items: T[]): void;
}
