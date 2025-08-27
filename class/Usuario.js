const prompt = require("prompt-sync")()

class Usuario {
  static totalUsuarios = 0

  #ativo
  constructor(nome, idade, email, ativo) {
    this.nome = nome
    this.idade = idade
    this.email = email
    this.#ativo = ativo
    Usuario.totalUsuarios++
  }

 
  get ativo() {
    return this.#ativo
  }

  set ativo(valor) {
    if (typeof valor === "boolean") {
      this.#ativo = valor
    } else {
      console.log("Valor inválido! O ativo deve ser true ou false.")
    }
  }

  get boasVindas() {
    return `Bem-vindo, ${this.nome}!`
  }

 
  mostrarDados() {
    console.log(this.boasVindas)
    console.log(`Nome: ${this.nome}`)
    console.log(`Idade: ${this.idade}`)
    console.log(`Email: ${this.email}`)
    console.log(`Ativo: ${this.ativo}`)
    console.log("==========================")
  }

  
  static contarUsuarios() {
    console.log(`Total de usuários criados: ${Usuario.totalUsuarios}`)
  }
}


module.exports = Usuario;
