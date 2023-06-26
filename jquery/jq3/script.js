$(document).ready(function(){
    $('.div1').click(function(){
        // $(this).text('clicado').css({'backgroundColor': 'pink', 'color': 'white', 'fontSize': '16px'}).addClass('newClass').removeClass('.div1')
    })
    $('.div2').dblclick(function(){
        $(this).text('clicado 2x').css({'backgroundColor': 'pink', 'color': 'white', 'fontSize': '16px'})
    })
    $('.div3').hover(function(){
        $(this).text('hover').css({'backgroundColor': 'pink', 'color': 'white', 'fontSize': '16px'}).addClass('hover')
    }, function(){
        $(this).text('hover').css({'backgroundColor': 'white', 'color': 'white', 'fontSize': '16px'}).removeClass('hover')
    })
    

})