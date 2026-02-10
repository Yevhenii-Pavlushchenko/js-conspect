// console.log("hello");

const promise = new Promise((resolve, reject) => {
  const isSuccess = true;

  if (isSuccess) {
    resolve("Проміс виконався успішно з результатом fulfilled");
  } else {
    reject(" проміс не виконано, результата rejected");
  }
});
// console.log("🚀 ~ promise:", promise);
promise.then();
