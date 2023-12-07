const chaveDaApi =
"3b70f37ac2484883831200619232311";

const botãoDeBusca = document.querySelector("btn-busca");

botaoDeBusca.addEventListener("click", async ()=>{
    const cidade = document.getElementById("input-busca").value;

    const dados = await buscarDadosDaCidade(cidade);

    console.log(dados);
});

 async function buscarDadosDaCidade(cidade) {
    const apiUrl = 'https://api.wheatherapi.com/v1/current.json?key=${chaveDaAPi}&q=${cidade}&aqi=no&lang=pt';

    const resposta= await fetch(apiUrl);

    const dados =  resposta.json();

    return dados;
}
