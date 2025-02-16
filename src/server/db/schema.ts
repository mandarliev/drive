import {
  int,
  text,
  singlestoreTable,
  index,
  singlestoreTableCreator,
} from "drizzle-orm/singlestore-core";

export const createTable = singlestoreTableCreator((name) => `drive_${name}`);

export const files = createTable(
  "files_table",
  {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    size: int("size").notNull(),
    url: text("url").notNull(),
    parent: int("parent").notNull(),
  },
  (t) => {
    return [index("parent_index").on(t.parent)];
  },
);

export const folders = createTable(
  "folders_table",
  {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    parent: int("parent"),
  },
  (t) => {
    return [index("parent_index").on(t.parent)];
  },
);
