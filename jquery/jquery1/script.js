$(document).ready(function(){
    // $('button').click(function(){
    //     $('p').hide()
    //     $(this).hide()
    // })

    // $('p').hide()
    // $('button').click(function(){
    //     $('p').fadeIn(750)
    // })

    $('.menu-toggle').hide()
    $('.fechar').hide()
    $('.menu').click(function(){
        $(this).hide(850)
        $('.fechar').show(768)
        $('.menu-toggle').fadeIn(750)
    })
    $('.fechar').click(function(){
        $(this).hide(850)
        $('.menu').show(768)
        $('.menu-toggle').fadeOut(750)
    })
})