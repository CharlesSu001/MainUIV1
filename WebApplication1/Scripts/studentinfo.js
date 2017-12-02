$(function () {
    $.ajax({
        type: "post",
        url: "/mainui/sendstudentdata",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success: function (data) {
            console.log(data);//将返回的值打印出来看看，然后你就知道怎么用了，可能如data.username
            var name = data.username;
            var stuid = data.stuid;
            var course1 = data.course1;
            var course2 = data.course2;
            var course3 = data.course3;
            var course4 = data.course4;
            var teacher1 = data.teacher1;
            var teacher2 = data.teacher2;
            var teacher3 = data.teacher3;
            var teacher4 = data.teacher4;
            var phone = data.phone;
            var school = data.school;
            $("#username").text(name);
            $("#stuid").text(stuid);
            $("#course1").text(course1);
            $("#course2").text(course2);
            $("#course3").text(course3);
            $("#course4").text(course4);
            $("#teacher1").text(teacher1);
            $("#teacher2").text(teacher2);
            $("#teacher3").text(teacher3);
            $("#teacher4").text(teacher4);
            $("#phone").text(phone);
            $("#school").text(school);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert('系统错误，联系管理员');
        }
    });
});