$(function(){
    function buildHTML(message){
        var img = message.image?  `<img src= ${ message.image }>` : "" ;
        var html = `<div class="message" data-message-id="${message.id}">
                    <div class="upper-info">
                    <div class="upper-info__user">
                        ${ message.name }
                    </div>
                    <div class="upper-info__date">
                        ${ message.created_at }
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
    };
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
            $('.messages').append(html);
            $('.new_message')[0].reset();
            $('.new-message__submit-btn').attr('disabled',false);
            $('.messages').animate({scrollTop: $('.messages') [0].scrollHeight}, 500, 'swing');
        })
        .fail(function(){
            alert('error')
        })
    });

    var buildMessageHTML = function(message) {
      var content = message.content? `<p class="lower-message__content">${message.content}</p>` : "" ;
      var img = message.image?  `<img src= ${ message.image }>` : "" ;
            var html = `<div class= "message" data-message-id= "${message.id}"> 
               <div class="upper-info">
                  <div class="upper-info__user">
                    ${message.name}
                  </div>
                  <div class="upper-info__date">
                    ${message.created_at}
                  </div>
               </div>
               <div class="lower-message">
                 ${content}
                 ${img}
               </div>
            </div>`
        return html;
    };

    var reloadMessages = function(){
       var path = location.pathname
       var pathinfo = path.split('/')
       var pathtrue = pathinfo[pathinfo.length-2];
       var last_message_id = $('.message').last().data('message-id');
       console.log(last_message_id)
       $.ajax({
           url:`/groups/${pathtrue}/api/messages`,
           type: 'get',
           dataType: 'json',
           data: {id: last_message_id}
       })
       .done(function(messages){
           console.log(messages)
           var insertHTML = '';
           messages.forEach (function(message){
             if (last_message_id < message.id){
              insertHTML += buildMessageHTML(message);
              $('.messages').append(insertHTML);
              $('.messages').animate({scrollTop: $('.messages') [0].scrollHeight}, 500, 'swing');
             }
          });
      })
      .fail(function(){
          alert('error');
      })
    
    }; 
   
    if (document.URL.match("/messages")){
      setInterval(reloadMessages, 5000); 
     } 
  });


    
