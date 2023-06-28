$(document).ready(function(){
    $('nav').hide()
    $('.menu').on('click', function(){
        $('nav').animate({
           'width':'toggle'
        })
    })

    $('.img2').hide()
    $('.img3').hide()
    $('.img4').hide()

    $('.mini1').on('click', function(){
        // console.log('abc')
        $('.img1').fadeIn()
        $('.img2').hide()
        $('.img3').hide()
        $('.img4').hide()

        $('.mini1').addClass('clicada')
        $('.mini2').removeClass('clicada')
        $('.mini3').removeClass('clicada')
        $('.mini4').removeClass('clicada')
    })
    $('mini2').on('click', function(){
        $('.img1').hide()
        $('.img2').fadeIn()
        $('.img3').hide()
        $('.img4').hide()

        $('.mini1').removeClass('clicada')
        $('.mini2').addClass('clicada')
        $('.mini3').removeClass('clicada')
        $('.mini4').removeClass('clicada')
    })
    $('mini3').on('click', function(){
        $('.img1').hide()
        $('.img2').hide()
        $('.img3').fadeIn()
        $('.img4').hide()
    })
    $('mini4').on('click', function(){
        $('.img1').hide()
        $('.img2').hide()
        $('.img3').hide()
        $('.img4').fadeIn()
    })

    $('.card span').on('click', function(){
        $('.card').fadeOut('slow')
    })
    $('.card').on('click', function(){}
        window.open('https://google.com')
    )


})
