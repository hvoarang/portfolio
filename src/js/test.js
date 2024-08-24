// Изменить значение переменной isSuccess для вызова разрешения или отклонения
const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve('Успех! Значение передано в функцию resolve');
    } else {
      reject('Ошибка! Ошибка передана в функцию reject');
    }
  }, 2000);
});
