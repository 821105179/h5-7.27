


$(function(){

    // $("#title").load("../page/title/title-chat.html")
    // $("#dynamic").load("../page/dynamic/dynamic-chat.html")



    //切换
    $(".menu").click(function() {

        $("#container").load($(this).data("page"))

    })
    $(".dynamic").click(function() {

        $("#container").load($(this).data("page1"))

    })

    $(".dynamic-three-second").click(function() {

        $("#container").load($(this).data("page2"))

    })

    $(".title-left").click(function() {

        $("#container").load($(this).data("page3"))

    })
    $(".title-left").click(function() {

        $("#container").load($(this).data("page4"))

    })

    $(".dynamic").click(function() {

        $("#container").load($(this).data("page5"))

    })




})