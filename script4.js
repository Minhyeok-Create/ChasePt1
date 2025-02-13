$(document).ready(function () {
    let shakeInterval;
    let isCorrectSet = false;

    const messages = [
        '시간이 없어',
        '안이 엄청 조용한 거 같다',
        '이미 도망친건 아니겠지',
        '열려라 어서 열려라',
        '분명 단서가 있을거야',
        '이 문만 열리면 끝이야',

    ]

    function showRandomMessage() {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    $('#randomMessage').text(randomMessage);  // 랜덤 메시지를 #randomMessage에 출력
    $('#randomMessage').fadeIn();  // 메시지를 서서히 표시
}

    $('.Toggle').click(function () {
        $(this).toggleClass('active');
        answerCheck();
    });

    $('#clickHandle').click(function () {
        if (isCorrectSet) {
            $('#handleSound')[0].play();
            $('#randomMessage').fadeOut();
            $('#clickHandle').css('transform', 'rotate(70deg)');

            setTimeout(function () {
                $('#clickHandle').css('transform', 'rotate(0deg)');
                $('#unLockModal').css('display', 'block');
            }, 1000);
        } else {
            disCorrect();
            showRandomMessage();
        }
    });
    
    $('#goToEndingCredit').click(function () {
        $('#unLockModal').css('display', 'none'); // unlock modal 숨기기
        $('#endingModal').css('display', 'block').addClass('show'); // ending modal 보이기

        // ending modal의 텍스트 애니메이션 시작
        setTimeout(() => {
            $('.modalContent').addClass('show'); // modal 콘텐츠 애니메이션 시작
            $('#endingSound')[0].play();
        }, 100);
    });

    $('#goToFirst').click(function () {
        window.location.href = 'index.html';
    });

    function answerCheck() {
        const correctAnswer1 = [
            $('#T2').hasClass('active'),
            $('#T4').hasClass('active'),
            $('#T7').hasClass('active'),
            $('#T9').hasClass('active')
        ];
        const correctAnswer2 = [
            !$('#T1').hasClass('active'),
            !$('#T3').hasClass('active'),
            !$('#T5').hasClass('active'),
            !$('#T6').hasClass('active'),
            !$('#T8').hasClass('active')
        ]

        isCorrectSet = correctAnswer1.every(Boolean) && correctAnswer2.every(Boolean);
    }

    function disCorrect() {
        let angle = 0;
        clearInterval(shakeInterval);
        $('#handleFail')[0].play();
        $('#clickHandle').css('transform', 'rotate(0deg)');
        shakeInterval = setInterval(
            function () {
                angle += 20;
                $('#clickHandle').css('transform', `rotate(${angle}deg)`);
                if (angle >= 35) {
                    clearInterval(shakeInterval);
                    $('#clickHandle').css('transform', 'rotate(0deg)');
                }
            }, 100);
    }
});