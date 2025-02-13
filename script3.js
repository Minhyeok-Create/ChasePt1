function myMap() {
    let lat, lng;
    [lat, lng] = [37.499553, 127.035888];  // 기본 지도 중심: 역삼역

    // 구글맵의 property
    const mapProp = {
        center: new google.maps.LatLng(lat, lng),
        zoom: 17,
    };

    const map = new google.maps.Map(document.getElementById('googleMap'), mapProp);

    // AJAX로 마커 위치 정보 받아오기
    $.ajax({
        url: 'markers.json',  // 서버에서 마커 정보 JSON을 받아옴 (서버에서 제공하는 JSON URL)
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // 마커 위치 정보로 지도에 마커 추가
            data.forEach(function(markerData) {
                let marker = new google.maps.Marker({
                    position: new google.maps.LatLng(markerData.lat, markerData.lng),
                    map: map,
                    icon: {
                        url: "https://i.ibb.co/Cv2KGv2/trace.jpg",
                        scaledSize: new google.maps.Size(30, 30),
                    }
                });

                const infowindow = new google.maps.InfoWindow({
                    content: markerData.content,  // 각 마커에 대한 설명
                });

                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.open(map, marker);  // 마커 클릭 시 정보 창 열기
                });
            });
        },
        error: function(xhr, status, error) {
            console.error('마커 정보를 가져오는 데 실패했습니다:', error);
        }
    });
}

$(document).ready(function(){
    $('.infoS3').click(function () {
            $('#modalinfoS3').show(); // 모달 열기
            $('#clickSound')[0].play();
        });
    $('.infoS3').hover(function () {
       $('#hoverSound')[0].play();
        });

        $('#closeinfoS3').click(function () {
            $('#modalinfoS3').hide(); // 모달 닫기
        });

        $('#submitAnswerS3').click(function () {
            const answerInput = $('#answerInputS3').val().toLowerCase().trim();
            if (answerInput === '문지상') {
                $('#AnswerS3').show();
                $('#correctSound')[0].play();
            } else {
                $('#wrongAnswerS3').show();
                $('#wrongSound')[0].play();
                return;
            }
        });
        $('#closewrongAnswerS3').click(function () {
           $('#wrongAnswerS3').hide();
        });
        $('#goSection4').click(function(){
            window.location.href='index4.html';
        })

    });
