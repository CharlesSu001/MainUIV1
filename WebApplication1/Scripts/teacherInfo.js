/*
var xhr = new XMLHttpRequest();
xhr.open("get", "http://rap2api.taobao.org/app/mock/933/GET/me", true);
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        document.getElementById("name").value = "姓名:" + data.name;
        document.getElementById("id").value = "教工号:" + data.id;
    }
}*/

$.get("http://rap2api.taobao.org/app/mock/933/GET/me ",function(result){
        var data=JSON.parse(result);
    $("#name").val("姓名:"+data.name);
    $("#id").val("教工号:"+data.id);
    })

/*
$(function () {
        $.ajax({
            'url': '/home/senddata', 'type': 'post',
            success: function (data) {
                $('#message').html('用户名：' + data.username + "<br/>年龄：" + data.teacherid);
            },
            error: function (message) {
                alert('error:' + message.statusText);
            }
        });
});*/
