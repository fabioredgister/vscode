$(document).ready(function(){
    $('input').keyup(function(){
        $(this).css({
            'background':'red'
        })
        $('div').text($('input').val())
    })
})

$(document).keydown(function(e){
    // console.log(e.key)
    if(e.key === 's'){
        $('div').animate({
            'top':'+=25'
        })
    }
    else if(e.key == 'w'){
        $('div').animate({
            'top':'-=25'
        })
    }
    else if(e.key == 'a'){
        $('div').animate({
            'left':'-=25'
        })
    }
    else if(e.key == 'd'){
        $('div').animate({
            'left':'+=25'
        })
    }
})

$(document).keyup(function(){
    var r, g, b
    r = Math.floor(Math.random()*255)
    g = Math.floor(Math.random()*255)
    b = Math.floor(Math.random()*255)
    $('div').css({'background-color':'rgb('+r+','+g+','+b+')'})
})