const Usuario = require("./class/Usuario")


let usuarios = [];

while (true) {
  let nome = prompt("Digite o nome do usuário: ")
  let idade = prompt("Digite a idade do usuário: ")
  let email = prompt("Digite o email do usuário: ")

  let ativoPergunta = prompt("Usuário ativo? [S/N]: ").toLowerCase()
  let ativo;

  if (ativoPergunta === "s") {
    ativo = true;
  } else if (ativoPergunta === "n") {
    ativo = false;
  } else {
    console.log("Dado incorreto!")
    process.exit()
  }

  let user = new Usuario(nome, idade, email, ativo)
  usuarios.push(user);

  let continuar = prompt("Deseja adicionar outro usuário? [S/N]: ").toLowerCase()
  if (continuar === "s") {
    continue
  } else if (continuar === "n") {
    break
  } else {
    console.log("Dado incorreto!")
    process.exit();
  }
}


for (let u of usuarios) {
  u.mostrarDados()
}


Usuario.contarUsuarios()