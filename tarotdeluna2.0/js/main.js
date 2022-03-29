let Checked = null;

for (let CheckBox of document.getElementsByClassName('only-one')){
	CheckBox.onclick = function(){
  	if(Checked!=null){
      Checked.checked = false;
      Checked = CheckBox;
    }
    Checked = CheckBox;
  }
}
$(document).ready(function(){
    $('.item').click(function(){
     if($(this).is(':checked')){
      $('.tarotist-agend').css('display', 'block');
     }else{
      $('.tarotist-agend').css('display', 'none');
     }
    });
});
// Toggle Collapse
$('.faq li .question').click(function () {
    $(this).find('.plus-minus-toggle').toggleClass('collapsed');
    $(this).parent().toggleClass('active');
});