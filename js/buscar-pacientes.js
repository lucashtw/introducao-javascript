var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click",function(){
    console.log("buscando pacientes...");
    https://api-pacientes.herokuapp.com/pacientes

    var xhr = new XMLHttpRequest();

    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load",function(){
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);
        
        pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
            
        });

    });

    xhr.send();

});
