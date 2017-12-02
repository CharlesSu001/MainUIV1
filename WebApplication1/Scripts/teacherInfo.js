﻿$(function () {
    $.ajax({
        type: "post",
        url: "/mainui/sendteacherdata",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success: function (data) {
            console.log(data);
            var name = data.username;
            var teacherid = data.teacherid;
            var course1 = data.course1;
            var course2 = data.course2;
            var course3 = data.course3;
            var course4 = data.course4;
            var phone = data.phone;
            var school = data.school;

            $("#username").text(name);
            $("#teacherid").text(teacherid);
            $("#course1").text(course1);
            $("#course2").text(course2);
            $("#course3").text(course3);
            $("#course4").text(course4);
            $("#phone").text(phone);
            $("#school").text(school);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert('系统错误，联系管理员');
        }
    });
});