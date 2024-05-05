$(function nextcard() {
    let divWidth = $('#sliderBoard').width()
    let imgCount = $('#content li').length
    // alert(imgCount)

    for(let i = 0; i < imgCount; i++){
        $('#contentButton').append('<li></li>')
    }
    $('#contentButton li:first').addClass('clicked')

    $('#content li').width(divWidth)            // li 的寬
    $('#content').width(divWidth * imgCount)    // ul 的寬

    let index = 0

    let timer = setInterval(moveToNext, 5000)

    $('#contentButton li').click(function(){
        clearInterval(timer)

        index = $(this).index()

        $('#content').animate({
            left: divWidth * index * -1,
        })

        $(this).addClass('clicked')
        $('#contentButton li').not(this).removeClass('clicked')

        timer = setInterval(moveToNext, 5000)
    })

    function moveToNext(){
        // 控制 index 值只能介於 0 ~ 7 之間
        if(index < imgCount - 1){
            index++
        }else{
            index = 0
        }

        $('#content').animate({
            left: divWidth * index * -1,
        })

        $(`#contentButton li:eq(${index})`).addClass('clicked')
        $('#contentButton li').not(`:eq(${index})`).removeClass('clicked')
    }
});
