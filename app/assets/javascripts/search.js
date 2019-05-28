$(function(){
    var result = $("#user-search-result")
    function appendUser(user){
        
        var html = `<div class="chat-group-user clearfix">
                    <p class="chat-group-user__name">${user.name}</p>
                    <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                </div>`
        result.append(html)
    }

    function appendErrMsgToHTML(){
        var html = `<p>一致するユーザーはいません</p>`
        result.append(html)
    }
    $("#user-search-field").on("keyup", function(){
       var input = $("#user-search-field").val();
       $.ajax({
           type: 'GET',
           url: '/users',
           data: { keyword: input },
           dataType: 'json'
       })

       .done(function(users){
        $("#user-search-result").empty();
         if (users.length !== 0){
             users.forEach(function(user){
              appendUser(user);
             });
         }
         else {
             appendErrMsgToHTML();
         }
        if (input.length == 0){
            $("#user-search-result").empty();
        }
       })
        .fail(function(){
            alert('検索に失敗しました');
        })
        
    });
    var member = $('#chat-group-users')
    function addUser(user_name,user_id){
        var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-'>
        <input name='group[user_ids][]' type='hidden' value='${user_id}'>
        <p class='chat-group-user__name'>${user_name}</p>
        <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
      </div>`
      member.append(html)
    }
    $(document).on("click", ".user-search-add", function(){
        var name = $(this).attr("data-user-name");
        var id = $(this).attr("data-user-id");
        addUser(name,id);
        $(this).parent().remove();
    });
    $(document).on("click",".user-search-remove", function(){
        $(this).parent().remove();
    })

    
});

    