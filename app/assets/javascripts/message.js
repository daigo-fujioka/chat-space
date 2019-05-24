$(function(){
    function buildHTML(message){
        var img = message.image?  `<img src= ${ message.image }>` : "" ;
        var html = `<div class="message">
                    <div class="upper-info">
                    <div class="upper-info__user">
                        ${ message.name }
                    </div>
                    <div class="upper-info__date">
                        ${ message.time }
                    </div>
                    </div>
                    <div class="lower-message">
                        <p class="lower-message__content">
                        ${ message.content }
                        </p>
                    ${ img }
                    </div>
                </div>`
            return html
    }
    $('.new_message').on('submit', function(e){
        e.preventDefault();
        var formData = new FormData(this); 
        var url = $(this).attr('action') 
        $.ajax({
            url: url,
            type: "POST",
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false
        })
        .done(function(data){
            var html = buildHTML(data);
            $('.messages').append(html)
            $('.input-box__text').val('')
            $('.new-message__submit-btn').attr('disabled',false)
        })
        .fail(function(){
            alert('error')
        })
    });
});

$(function(){
    $('.new_message').on('submit', function(e){
        $('.messages').animate({scrollTop: $('.messages') [0].scrollHeight}, 500, 'swing');
    });
});