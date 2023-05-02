$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();

        const nomeTarefa = $('#tarefa').val();
        const novaTarefa = $('<li></li>');
        $(`<p>${nomeTarefa}</p>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        
        $('#tarefa').val("");

        $('li').click(function(){
            $(this).addClass('riscado');
        })
})
})