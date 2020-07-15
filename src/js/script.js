function gerar() {
    let titulo = document.querySelector("#titulo").value;
    let nomeSite = document.querySelector("#nomeSite").value;
    let ano = document.querySelector("#ano").value;
    let url = document.querySelector("#url").value;
    let acessoEm = document.querySelector("#acessoEm").value.split("-");

    let mes = "";

    if (acessoEm[1] == "01") {
        mes = "Jan.";
    } else if (acessoEm[1] == "02") {
        mes = "Fev.";
    } else if (acessoEm[1] == "03") {
        mes = "Mar.";
    } else if (acessoEm[1] == "04") {
        mes = "Abr.";
    } else if (acessoEm[1] == "05") {
        mes = "Maio";
    } else if (acessoEm[1] == "06") {
        mes = "Jun.";
    } else if (acessoEm[1] == "07") {
        mes = "Jul.";
    } else if (acessoEm[1] == "08") {
        mes = "Ago.";
    } else if (acessoEm[1] == "09") {
        mes = "Set.";
    } else if (acessoEm[1] == "10") {
        mes = "Out.";
    } else if (acessoEm[1] == "11") {
        mes = "Nov.";
    } else if (acessoEm[1] == "12") {
        mes = "Dez.";
    }

    let novoTitulo = titulo.split(" ");
    novoTitulo[0] = novoTitulo[0].toUpperCase();
    novoTitulo = novoTitulo.join(" ");

    let resultado = `${novoTitulo}. ${nomeSite}, ${ano}. Disponível em: <${url}>. Acesso em: ${acessoEm[2]} de ${mes} de ${acessoEm[0]}.`
    document.querySelector("#resultado").value =  resultado;
    event.preventDefault();
}