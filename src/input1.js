$(document).ready(function(){
    $('#carousel-images').slick({
        
        
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        infinite: true            
    });
    
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    });
    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            
            telefone: {
                required: true,
            },                
            veiculoDeInteresse: {
                required: true
            },
            mensagem: {
                required: false,
            },
            
        },
        messages: {
            nome: 'por favor, insira seu nome',
            email: 'por favor, insira seu e-mail',
            telefone: 'por favor, insira seu telefone',
            veiculoDeInteresse: 'por favor, insira o veículo de interesse'
        },
        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos`);
            
            }
        }
    })
    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })



})