let $ = document.querySelector.bind(document);
let divErro = $(".erro");
class Projeto {
  constructor() {
    this.valorJogador1 = $("#jogador1");
    this.valorJogador2 = $("#jogador2");
    this.divProblema = $(".problema");
    this.testeJogador1 = $(".testeJogador1");
    this.testeJogador2 = $(".testeJogador2");
    this.valorTesteJogador1 = $("#testeJog1");
    this.valorTesteJogador2 = $("#testeJog2");
    this.botaoTesteJog1 = $("#botaoTesteJog1");
    this.botaoTesteJog2 = $("#botaoTesteJog2");
    this.primeirosInputs = $(".priInput");
    this.resultado = $(".resultado");
    this.mensagem = $(".mensagem");
    this.paragrafoErroTeste1 = $(".paragrafoErroTeste1");
    this.paragrafoErroTeste2 = $(".paragrafoErroTeste2");
    this.quantLetraDesco = $(".quantLetradesc");
    this.palavraSecretaJog1 = $("#seraQueSabesJog1");
    this.palavraSecretaJog2 = $("#seraQueSabesJog2");
    this.nomeVecendor = "";
    this.nomeJogador = "";
    this.nomePerdedor = "";
    this.letrasDescobertas = $("#letrasDescobertas");
    this.letrasDescobertas2 = $("#letrasDescobertas2");
    this.espacoNomeVencedor = $(".nomeVencedor");
    this.contaPalavraExistentes = 0;
  }
  desabilitar(...array) {
    array.forEach((item) => (item.disabled = true));
  }
  habilitar(...array) {
    array.forEach((item) => (item.disabled = false));
  }
  escondeBorda(botao) {
    botao.style.border = "none";
  }
  valorVazio(...elem) {
    elem.forEach((item) => (item.value = ""));
  }
  addFundoPreto(...array) {
    array.forEach((item) => item.classList.add("fundoPreto"));
  }
  addBordaAqua(...array) {
    array.forEach((item) => item.classList.add("bordaaqua"));
  }
  addBordaPreta(...array) {
    array.forEach((item) => item.classList.add("bordaPreta"));
  }
  addPalavraSecretaErrada(...array) {
    array.forEach((item) => item.classList.add("palavraSecretaErrada"));
  }
  removePalavraSecretaErrada(...array) {
    array.forEach((item) => item.classList.remove("palavraSecretaErrada"));
  }
  removeFundoPreto(...array) {
    array.forEach((item) => item.classList.remove("fundoPreto"));
  }
  removeBordaAqua(...array) {
    array.forEach((item) => item.classList.remove("bordaaqua"));
  }
  removeBordaPreta(...array) {
    array.forEach((item) => item.classList.remove("bordaPreta"));
  }
  mostrar(...array) {
    array.forEach((item) => (item.style.display = "block"));
  }
  ocultar(...array) {
    array.forEach((item) => (item.style.display = "none"));
  }
  limpaTodosCampos() {
    this.letrasDescobertas.value = "";
    this.letrasDescobertas2.value = "";
    window.localStorage.setItem("letraDescJog1", "");
    window.localStorage.setItem("letraDescJog2", "");
    this.removePalavraSecretaErrada(
      this.palavraSecretaJog1,
      this.palavraSecretaJog2
    );
  }
  validarDados() {
    if (this.valorJogador1.value == "" || this.valorJogador2.value == "") {
      this.mostrar(divErro);
      divErro.innerText =
        "Nenhum dos campos pode estar vazios. POR FAVOR PREENCHA TODOS OS DADOS";
    } else if (
      this.valorJogador1.value.length < 5 ||
      this.valorJogador2.value.length < 5
    ) {
      this.mostrar(divErro);
      divErro.innerText =
        "O texto digitado nos campos tem de ter no minimo e no maximo 5 caracteres!";
    } else {
      this.mudarLayout();
    }
  }
  contaPalavraJog1() {
    if (this.validaCampoDosTestes(this.valorTesteJogador1)) {
      this.letrasDescobertas.value =
        window.localStorage.getItem("letraDescJog1");
      window.localStorage.setItem(
        "letraDescJog2",
        this.letrasDescobertas2.value
      );
      this.ocultar(this.paragrafoErroTeste1);
      this.nomeVecendor = "Jogador1";
      this.nomePerdedor = "Jogador2";

      this.nomeJogador = this.valorTesteJogador1.value;
      this.contaPalavraExistentes = 0;
      this.verificandoPalavra(
        this.valorJogador2.value,
        this.valorTesteJogador1.value
      );
      this.mostrar(this.palavraSecretaJog1);
      this.ocultar(this.palavraSecretaJog2);
      this.habilitar(this.valorTesteJogador2, this.botaoTesteJog2);
      this.desabilitar(this.valorTesteJogador1, this.botaoTesteJog1);
      this.valorVazio(this.valorTesteJogador1, this.palavraSecretaJog1);
      this.removeBordaAqua(this.testeJogador1);
      this.addBordaPreta(this.testeJogador1);
      this.removeBordaPreta(this.testeJogador2);
      this.addBordaAqua(this.testeJogador2);
      this.addFundoPreto(this.valorTesteJogador1, this.botaoTesteJog1);
      this.removeFundoPreto(this.valorTesteJogador2, this.botaoTesteJog2);
      this.escondeBorda(this.botaoTesteJog1);
      this.mostrar(this.resultado, this.letrasDescobertas);
      this.ocultar(this.letrasDescobertas2);
      this.removePalavraSecretaErrada(
        this.palavraSecretaJog1,
        this.palavraSecretaJog2
      );
    } else {
      this.mostrar(this.paragrafoErroTeste1);
    }
  }
  validaCampoDosTestes(campoTeste) {
    if (campoTeste.value == "" || campoTeste.value.length < 5) {
      return false;
    } else {
      return true;
    }
  }
  contaPalavraJog2() {
    if (this.validaCampoDosTestes(this.valorTesteJogador2)) {
      this.letrasDescobertas2.value =
        window.localStorage.getItem("letraDescJog2");
      window.localStorage.setItem(
        "letraDescJog1",
        this.letrasDescobertas.value
      );
      this.ocultar(this.paragrafoErroTeste2);
      this.nomeVecendor = "Jogador2";
      this.nomePerdedor = "Jogador1";
      this.nomeJogador = this.valorTesteJogador2.value;
      this.contaPalavraExistentes = 0;
      this.verificandoPalavra(
        this.valorJogador1.value,
        this.valorTesteJogador2.value
      );
      this.mostrar(this.palavraSecretaJog2);
      this.ocultar(this.palavraSecretaJog1);
      this.habilitar(this.valorTesteJogador1, this.botaoTesteJog1);
      this.desabilitar(this.valorTesteJogador2, this.botaoTesteJog2);
      this.valorVazio(this.valorTesteJogador2, this.palavraSecretaJog2);
      this.removeBordaAqua(this.testeJogador2);
      this.addBordaPreta(this.testeJogador2);
      this.removeBordaPreta(this.testeJogador1);
      this.addBordaAqua(this.testeJogador1);
      this.addFundoPreto(this.valorTesteJogador2, this.botaoTesteJog2);
      this.removeFundoPreto(this.valorTesteJogador1, this.botaoTesteJog1);
      this.ocultar(this.letrasDescobertas);
      this.mostrar(this.resultado, this.letrasDescobertas2);
      this.mostraResultado();
      this.removePalavraSecretaErrada(
        this.palavraSecretaJog1,
        this.palavraSecretaJog2
      );
    } else {
      this.mostrar(this.paragrafoErroTeste2);
    }
  }
  quandoAsPalavrasForemDiferentes(palavraSecreta, palavraJogador) {
    if (palavraSecreta.length == 5 && palavraSecreta != palavraJogador) {
      this.addPalavraSecretaErrada(this.palavraSecretaJog1);
    }
  }
  quandoAsPalavrasForemDiferentesJog2(palavraSecreta, palavraJogador) {
    if (palavraSecreta.length == 5 && palavraSecreta != palavraJogador) {
      this.addPalavraSecretaErrada(this.palavraSecretaJog2);
    }
  }
  achaPalavraJog1() {
    this.palavraIguais(this.palavraSecretaJog1.value, this.valorJogador2.value);
  }
  achaPalavraJog2() {
    this.palavraIguais(this.palavraSecretaJog2.value, this.valorJogador1.value);
  }
  mostraResultado() {
    this.espacoNomeVencedor.innerHTML = this.nomeVecendor;
    this.mensagem.innerHTML = "";
    this.quantLetraDesco.innerHTML = "";
    this.mensagem.innerHTML += `Menagem: <strong class='corPreta'>${this.nomeJogador} tem ${this.contaPalavraExistentes} letra/s da palavra secreta </strong>`;
    this.quantLetraDesco.innerHTML = `Quantidades de letras descobertas <strong class='corPreta'>${this.contaPalavraExistentes}</strong>`;
  }
  palavraIguais(palavraProcurada, palavraEncontrada) {
    if (palavraProcurada == palavraEncontrada) {
      alert(
        `O ${this.nomeVecendor} foi vencedor! parace que ele descobriu a sua palavra secreta ${this.nomePerdedor}.\n Pela proxima inventa uma palavra mais dificil.\n '${palavraEncontrada}' não é tão dificil.😊`
      );
      this.reiniciarAplicacao();
    } else {
      this.quandoAsPalavrasForemDiferentes(
        this.palavraSecretaJog1.value,
        this.valorJogador2.value
      );
      this.quandoAsPalavrasForemDiferentesJog2(
        this.palavraSecretaJog2.value,
        this.valorJogador1.value
      );
    }
  }

  reiniciarAplicacao() {
    this.ocultar(
      this.resultado,
      this.testeJogador1,
      this.testeJogador2,
      divErro
    );
    this.removePalavraSecretaErrada(
      this.palavraSecretaJog1,
      this.palavraSecretaJog2
    );
    this.mostrar(this.primeirosInputs);
    this.valorVazio(
      this.valorJogador1,
      this.valorJogador2,
      this.palavraSecretaJog1,
      this.palavraSecretaJog2
    );
    this.habilitar(this.valorTesteJogador1, this.botaoTesteJog1);
    this.removeFundoPreto(this.valorTesteJogador1, this.botaoTesteJog1);
    this.removeBordaPreta(this.testeJogador1);
    this.addBordaAqua(this.testeJogador1);
    this.limpaTodosCampos();
  }

  mudarLayout() {
    this.addBordaAqua(this.testeJogador1);
    this.addBordaPreta(this.testeJogador2);
    this.ocultar(this.divProblema, this.primeirosInputs);
    this.mostrar(this.testeJogador1, this.testeJogador2);
    this.desabilitar(this.valorTesteJogador2, this.botaoTesteJog2);
    this.addFundoPreto(this.valorTesteJogador2, this.botaoTesteJog2);
    this.escondeBorda(this.botaoTesteJog2);
  }
  verificandoPalavra(palavraJogador, palavraTeste) {
    for (let cont = 0; cont <= palavraJogador.length; cont++) {
      if (palavraJogador.includes(palavraTeste[cont])) {
        this.contaPalavraExistentes++;
      }
    }

    this.mostraResultado();
  }
}
const projeto = new Projeto();
