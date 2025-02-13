$(document).ready(function () {
    // 답안 제출 검증
    $('#submitAnswer').click(function () {
        const answerInput = $('#answerInput').val().toLowerCase().trim();
        if (answerInput === 'deepblue') {
            $('#Answer').show();
            $('#correctSound')[0].play();
        } else {
            $('#wrongAnswer').show();
            $('#wrongSound')[0].play();
            return;
        }
    });

    //div 클릭
    $('.click1').click(function () {
        $('#clickSound')[0].play();
        $('#c1').show();
    });
    $('.click2').click(function () {
        $('#clickSound')[0].play();
        $('#c2').show();
    });
    $('.click3').click(function () {
        $('#clickSound')[0].play();
        $('#c3').show();
    });
    $('.click4').click(function () {
        $('#clickSound')[0].play();
        $('#c4').show();
    });
    $('.click5').click(function () {
        $('#clickSound')[0].play();
        $('#c5').show();
    });
    $('.click6').click(function () {
        $('#clickSound')[0].play();
        $('#c6').show();
    });
    $('.click7').click(function () {
        $('#clickSound')[0].play();
        $('#c7').show();
    });

    //info 기능
    $('.info').click(function () {
        $('#clickSound')[0].play();
        $('#modalinfo').show();
    });
    $('.info').hover(function () {
       $('#hoverSound')[0].play();
    });

    //modal 닫기 버튼 기능
    $('[id^=closeClick], #closeinfo, #closewrongAnswer').click(function () {
        $(this).closest('.section2Modal').hide();
    });

    //검증 성공 전개
    $('#nextAnswer').click(function () {
        $(this).closest('.section2Modal').hide();
        $('#goSection3').show();
    });

    //다음 섹션 이동
    $('#goSection3Button').click(function(){
        window.location.href='index3.html';
    })

});