$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })
    $('#botao_cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
    e.preventDefault();
    const enderecoNovaImagem = $('#endereco_nova_imagem').val();
    const novoItem = $('<li style="display:none;"></li>');
    $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem);
    $(`<div class="overlay_image_link">
            <a href="${enderecoNovaImagem}" target="_blank">
            Ver imagem em tamanho real
            </a>
        </div>
    `).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(1500);
    $('#endereco_nova_imagem').val('')


    })
})