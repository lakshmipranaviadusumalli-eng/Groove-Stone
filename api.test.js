const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');

test('seed catalog uses integer paise and has the three catalog lines', () => {
  const db = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data.json')));
  assert.deepEqual([...new Set(db.products.map(p => p.category))].sort(), ['dry_fruit', 'exotic', 'mango']);
  assert.ok(db.products.every(p => p.variants.every(v => Number.isInteger(v.price))));
});
