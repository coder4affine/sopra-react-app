const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const calculator = (type, a, b) => {
  if (type === 'add') {
    return add(a, b);
  }
  return subtract(a, b);
};
