function* say() {
  let a = yield '1';
  console.log(2, a);

  let b = yield '2';
  console.log(4, b);
}

const g = say();

console.log(1, g.next());
console.log(3, g.next('aaaa'));
console.log(5, g.next('bbbb'));