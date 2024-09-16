let a = 1220;
console.log(a);

const fetchFriends = () => {
  return fetch('my-api.com/me').then(token => {
    console.log(token);
  });
};
