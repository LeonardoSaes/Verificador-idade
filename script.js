function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if(fano.value.length === 0 || Number(fano.value) > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente")
    } 
    else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")// criei uma tag img
        img.setAttribute("id", "foto")// criei o id do img
        if(fsex[0].checked){
            genero = "Homem"
            if(idade > 0 && idade < 10 ){
                // Criança
                img.setAttribute("src","img/bebe-menino.jpg")
            }
            else if(idade < 21){
                // Jovem
                img.setAttribute("src","img/jovem-homem2.jpg")
            }
            else if(idade < 50){
                // Adulto
                img.setAttribute("src","img/adulto-homem1.jpg")
            }
            else{
                //Idoso
                img.setAttribute("src","img/idoso.jpg")
            }
        }
        else if(fsex[1].checked){
            genero = "Muher"
            if(idade > 0 && idade < 10 ){
                // Criança
                img.setAttribute("src","img/bebe-menina.jpg")
            }
            else if(idade < 21){
                // Jovem
                img.setAttribute("src","img/jovem-mulher.jpg")
            }
            else if(idade < 50){
                // Adulto
                img.setAttribute("src","img/adulto-mulher.jpg")
            }
            else{
                //Idoso
                img.setAttribute("src","img/idosa.jpg")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}