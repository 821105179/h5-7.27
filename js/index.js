$(function(){


    $(".title-left").click(function() {

        $("#container").load($(this).data("page4"))

    })

    $(".dynamic").click(function() {

        $("#container").load($(this).data("page5"))

    })



})