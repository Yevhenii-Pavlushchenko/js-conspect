function foo() {
  console.log("foo->", this);
}
foo();

const user = {
  tag: "Mango",
  showTag() {
    console.log("show this tag", this.tag);
  },
};
console.log(user.tag);

const user2 = {
  tag: "Poly",
};
user2.outerShowTag = user.showTag;

console.log(user2.outerShowTag);
