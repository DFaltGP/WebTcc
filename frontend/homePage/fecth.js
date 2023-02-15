
const getData = async () => {
  const response = await fetch("http://localhost:3333/users/allUsers");
  const data = await response.json();
  console.log(data);
};

const teste = (getData) => {

    console.log("hello word");
  };

teste(getData)

//function exibir(num) {
//    console.log( "A operação resultou em:" + num);
//}
//
//function soma (a,b, cb) {
//    var op = a + b
//    cb(op);
//}
//
//function multiplicacao(a,b, cb) {
//    var op = a * b
//    cb(op)
//}
//
//soma(2,2, exibir)
//
//multiplicacao(3,5, exibir)