let teste = [
  { item_id: 3, amount: 2 },
  { item_id: 4, amount: 1 }
];

const items = teste.map(
  (t, index, array) => (array[index] = { ...array[index], points: 4 })
);
console.log(items);
