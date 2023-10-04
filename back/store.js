export const tables = {};

function getTable(table) {
  if (!tables[table]) {
    tables[table] = [];
  }
  return tables[table];
}

function createId(data) {
  if (!data.length) return 1;
  const dataSort = data.sort((a, b) => b.id - a.id);
  return dataSort[0].id + 1;
}

export function getList(table) {
  return getTable(table);
}

export function getQuery(table, queries) {
  return getTable(table).filter((item) =>
    Object.keys(queries).reduce(
      (acc, cur) =>
        acc &&
        ((!Number.isInteger(+queries[cur]) &&
          item[cur].includes(queries[cur])) ||
          (Number.isInteger(+queries[cur]) && +queries[cur] === item[cur])),
      true
    )
  );
}

export function get(table, id) {
  const data = getTable(table);
  const item = data.find(({ id: idItem }) => idItem === id);
  if (!item) throw new Error(`${table} not found`);
  return item;
}

export function create(table, body) {
  const data = getTable(table);
  const item = { id: createId([...data]), ...body };
  tables[table] = [...data, item];
  return item;
}

export function update(table, id, body) {
  tables[table] = tables[table].map((data) => {
    if (data.id === id) {
      return { ...data, ...body };
    }
    return data;
  });
  return get(table, id);
}

export function deleted(table, id) {
  get(table, id);
  tables[table] = tables[table].filter(({ id: idItem }) => idItem !== id);
}
