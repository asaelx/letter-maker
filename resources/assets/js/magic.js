 $(function(){
    /* Medium Editor */
    var editable = $('.editable');
    if(editable.length){

        var editor = new MediumEditor('.editable',{
            toolbar: {
                buttons: ['bold', 'italic', 'underline', 'quote']
            },
            placeholder: {
                text: 'Escribe algo...'
            }
        });

        editable.attr('contenteditable', true);
        editable.focus(function(el){
            $(this).addClass('focus');
        });
        editable.blur(function(el){
            $(this).removeClass('focus');
        });
    }
});
