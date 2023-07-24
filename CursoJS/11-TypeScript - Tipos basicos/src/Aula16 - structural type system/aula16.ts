type VerifyUserFn = (userBd: User, sentUser: User) => boolean;
type User = { userName: string; password: string };

const isEqualUser: VerifyUserFn = (userBd, sentUser) => {
  return (
    userBd.userName === sentUser.userName &&
    userBd.password === sentUser.password
  );
};

/*
  A estrutura de typagem do typescript permite os objetos "userDB" e "myUser"
  serem usado como parametro mesmo não sendo do tipo "User" que é o que a typagem pede.

  type VerifyUserFn = (userBd: User, sentUser: User) => boolean;
  nesse caso estou especificando que o parametros devem conter as chaves
  que meu tipo alias User tem e não que ele deve ser do mesmo tipo
*/

const userBd = { userName: 'Apolo', password: '123456' };
const myUser = { userName: 'Apolo', password: '123456', sla: true };

const isEqual = isEqualUser(userBd, myUser);

console.log(isEqual);
