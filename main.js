$('#telefone').mask('(00) 00000-0000');
$('#cep').mask('00.000-000');
$('#cpf').mask('000.000.000-00');

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
            cpf: {
                required: true
            },
            endereco: {
                required: true,
            },
            cep:{
                required: true
            },
            
        },
        messages: {
            nome: 'por favor, insira seu nome',
            email: 'por favor, insira seu e-mail',
            telefone: 'por favor, insira seu telefone',
            cpf: 'por favor, insira o CPF',
            endereco: 'por favor, insira seu endereço',
            cep: 'por favor, insira seu CEP'
        },
        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos, por favor, insira todos`);
            
            }
        }
    })
