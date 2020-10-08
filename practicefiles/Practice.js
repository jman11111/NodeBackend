const concat = require("../util/concat");
const logger = require("../util/simplelogger");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting ID:", id);
      resolve({ id: id, name: "JOHN CENA" });
      reject(new Error("promise broken"));
    }, 2000);
  });
}

function getUserName(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getting name");
      resolve(user.name);
      reject(new Error("username promise broken"));
    }, 1000);
  });
}

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
    reject(new Error("bad promise"));
  }, 1000);
});

getUser(9, (user) => {
  console.log(user);
});

async function a() {
  const user = await getUser(3);
  const username = await getUserName(user);
  console.log(username);
}

a();

getUser(4)
  .then((result) => getUserName(result))
  .then()
  .catch((err) => console.log("Error", err.message));
