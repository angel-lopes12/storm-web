window.onload = function(){
    console.warn("SALVE LEK, SUAVE??")

let meuForm = $("#formProduto")

console.log (meuForm)

meuForm.on("submit", function(event){
event.preventDefault()
console.log("clicou")
prepararBotao()

})

    function prepararBotao(){
        let botao = $("button#btnSalvar")
        let ladda = Ladda.create(botao[0])
        ladda.start()
    }

    function clicou(){

            prepararBotao()
    }

} 
