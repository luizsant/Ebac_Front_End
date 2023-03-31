$(document).ready(function(){
    
  $('#headerButton').click(function(){
      $('form').slideDown();
  })
  
  $('#botao-cancelar').click(function(){
    $('form').slideUp();
  })

  $('form').on('submit', function(e){
      e.preventDefault();
      const novaTarefa = $('#nova-tarefa').val();
      const novoItem = $('<li></li>');
      $(`<span>${novaTarefa}</span>`).appendTo(novoItem);
      $(novoItem).appendTo('ul');
      $(novoItem).click(function(){
          $(this).toggleClass('tarefa-realizada');
      })
      $('#nova-tarefa').val('');
  })

  $('li').click(function(){
      $(this).toggleClass('tarefa-realizada');
  });
})
