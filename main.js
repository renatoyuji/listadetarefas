$(document).ready(function(){

    $('.botao').on('submit', function(e){
        e.preventDefault();

        const tarefa = $('#tarefa').val();
        const linha = document.createElement('li')
        li.innerHTML = `${tarefa}`;
        $('ul').append(linha)
        
        $('#tarefa').val("");

    })
})