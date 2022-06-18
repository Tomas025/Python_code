var div = document.getElementsByClassName("botaoArquivo")[0];
var input = document.getElementById("inputArquivo");

div.addEventListener("click", function(){
    input.click();
});

input.addEventListener("change", function(){
    var nome = "Não há arquivo selecionado. Selecionar arquivo...";
    if(input.files.length > 0) nome = input.files[0].name;
    div.innerHTML = nome;
    document.getElementById("setinha").style.transform = 'rotate(270deg)';
});