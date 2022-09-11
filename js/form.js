var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    
    var erros = validaPaciente(paciente);
    console.log(erros);
    if(erros.length>0){
       exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros){
    var ul = docucument.querySelector("mensagens-erro");
    ul.innerHTML = "";


    erros.forEach(function(erro){
        var li = docucument.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })

    /*for(var i=0; i<erros.length;i++){
        var erro = erros[i];
    }*/
}

function obtemPacienteDoFormulario(form){
    
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

    return pacienteTr
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add("classe");
    return td;

}

function validaPaciente(paciente){

    var erros = [];
    if(paciente.nome.length== 0){
        erros.push("O nome não pode ser vazio");

    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    } 
    if(!validaAltura(paciente.altura)){
        erros.push("Altura é inválida!");
    } 
    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ser vazia");
    }
    if(paciente.peso.length == 0){
        erros.push("o peso não pode ser vazio");
    }
    if(paciente.altura.length == 0){
        erros.push("altura não pode ser vazia");
    }

    return erros;
    


}







//