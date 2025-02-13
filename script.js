$(document).ready(function () {
    // intro BGM
    $('#startSound')[0].play();

    // 메인 셀렉터
    $('#mainSelect').hide();
    $('#mainSearch').click(function () {
        $('#clickSound')[0].play();
        $('#mainSelect').slideToggle();
    });
    $('#homeButton').click(function () {
        $('#clickSound')[0].play();
        $('.First').hide();
        $('.Question').hide();
        $('.Main').show();
        $('#title').fadeIn();
        $('#subtitle').fadeIn();
        $('#mainSelect').hide();
    });
    $('#mainSelect li').hover(
    function() {
        $('#hoverSound')[0].play();
    }
);

    // 시작버튼 누르면 진행하게
    $('#start').click(function (e) {
        e.preventDefault();
        $('#clickSound')[0].play();
        $('#title').fadeOut();
        $('#subtitle').fadeOut();
        // $('html, body').animate({
        //     scrollTop: $('.First').offset().top
        // }, 1000);
        $('.Main').hide();
        $('.First').show();
        $('#prologNext').show();
        $('#prolog').show();
    });

    // 프롤로그 넘기기
    $('#prologNext').click(function () {
        let currentContent = $('#prologTextBox').find('p:visible');
        let nextContent = currentContent.next('p');
        if (nextContent.length) {
            currentContent.hide();
            nextContent.show();
            if (nextContent.is('#ThirdContent')) {
                $(this).text('replay');
                $('#goSection2').show();
            } else {
                $(this).text('Next');
                $('#goSection2').hide();
            }
        } else {
            currentContent.hide();
            $('#FirstContent').show();
            $(this).text('Next');
            $('#goSection2').hide();
        }
    });

    // 문의하기 버튼 동작
    $('#goQuestion').click(function (e) {
        e.preventDefault();
        $('#clickSound')[0].play();
        $('#title').fadeOut();
        $('#subtitle').fadeOut();
        $('html', 'body').animate({
            scrollTop: $('.Question').offset().top
        }, 1000);
        $('.Main').hide();
        $('.First').hide();
        $('.Question').show();
        $('#prolog').hide();
    });

    // 문의 폼검증
    $('#questionForm').submit(function (e) {
        e.preventDefault();
        const qna = $('#questionInput').val().trim();
        const password = $('#passwordInput').val().trim();
        if (!qna) {
            alert('문의 내용을 입력해주세요');
            return;
        }
        if (!/^\d{6}$/.test(password)) {
            alert('식별번호는 6자리 숫자로 입력해주세요');
            return;
        }
        if (qna && password.length === 6) {
            // 첫 글자를 제외한 나머지를 *로 변경
            const maskedPassword = password.charAt(0) + password.charAt(1) + '****';
            const previewQna = qna.length > 10 ? qna.substring(0, 10) + '...' : qna;
            $('#questions').append(`<li class="question-item" data-password="${password}" data-qna="${qna}">${previewQna} (작성자: ${maskedPassword})</li>`);
            $('#questionInput').val('');
            $('#passwordInput').val('');
        }
    });

    // 문의목록 조회
    $(document).on('click', '.question-item', function () {
        const questionItem = $(this);
        $('#checkButton').data('question', questionItem); // 클릭한 질문 저장
        $('#passwordCheckModal').show();
    });

    // 비밀번호 확인
    $('#checkButton').click(function () {
        const checkPassword = $('#checkPassword').val().trim();
        const questionItem = $(this).data('question');
        if (String(checkPassword) === String(questionItem.data('password'))) {
            $('#modalQuestionContent').text(questionItem.data('qna'));
            $('#questionContentModal').show(); // 모달 표시
            $('#passwordCheckModal').hide();
        } else {
            alert('식별번호가 올바르지 않습니다.');
        }
    });

    // 취소 버튼으로 조회창 숨기기
    $('#cancelButton').click(function () {
        $('#passwordCheckModal').hide();
    });

    // 도움말 버튼
    $('#help').click(function (e) {
        e.preventDefault();
        $('#clickSound')[0].play();
        $('#helpModal').show();
    });

    // 도움말->닫기
    $('#closeHelp').click(function () {
        $('#helpModal').hide();
    });

    // 프롤로그3->진행하기
    $('#goSection2').click(function () {            
        window.location.href = 'index2.html';
    });
    
    // 모달 닫기
    $('#closeModal').click(function () {
        $('#questionContentModal').hide();
    });

});
