$(document).ready(() => {
  $('#makibutton').on('click', () => {
    $('#makicardholder').show();
    $('#noodlescardholder').hide();
    $('#grillcardholder').hide();
  });

  $('#noodlesbutton').on('click', () => {
    $('#noodlescardholder').show();
    $('#makicardholder').hide();
    $('#grillcardholder').hide();
  });

  $('#grillbutton').on('click', () => {
    $('#grillcardholder').show();
    $('#makicardholder').hide();
    $('#noodlescardholder').hide();
  });

});
