$('#emotion input:radio').addClass('input_hidden');
$('#emotion label').click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');
});