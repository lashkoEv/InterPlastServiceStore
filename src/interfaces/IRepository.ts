export interface IRepository<T> {
  getAll(): T[];

  add(item: T): void;
  addMany(items: T[]): void;

  save(items: T[] | null): void;
  load(): void;
}
