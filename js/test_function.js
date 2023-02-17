function askLocationPermissionOn() {
    noAccidentCall.askLocationPermissionOn();    
}

function openDeviceSetting() {
    noAccidentCall.openDeviceSetting();    
}

function checkLocationPermission() {
    noAccidentCall.checkLocationPermission();    
}

function getUserLatitudeLongitude() {
    alert(noAccidentCall.getUserLatitudeLongitude());
}

function getUserLocation() {
    alert(noAccidentCall.getUserLocation());    
}

function getCurrentTemperature() {
    alert(noAccidentCall.getCurrentTemperature().toString());    
}

function getCurrentDustIndexAndResult() {
    alert(noAccidentCall.getCurrentDustIndexAndResult());    
}

function gerCurrentUVIndexAndResult() {
    alert(noAccidentCall.gerCurrentUVIndexAndResult());    
}

window.onload=function() {
    // 위치 권한이 꺼져있다면 권한 허용 팝업을 띄우고, 켜져있다면 사용자의 위치의 위도 경도 정보 저장
    document.getElementById('askLocationPermissionOn').onclick=function() {    
        askLocationPermissionOn();
    }

    // 디바이스 설정
    document.getElementById('openDeviceSetting').onclick=function() {    
        openDeviceSetting();
    }

    // 위치 권한이 꺼져있다면 false 반환
    // 위치 권한이 켜져있다면 true 반환
    document.getElementById('checkLocationPermission').onclick=function() {    
        checkLocationPermission();
    }

    // String 형태로 반환, 위도 값, 경도 값 형태로 반환 (e.g. 41.40338,2.17403) 위치 권한 또는 GPS 에러일 경우 각각 빈문자열 "," 반환 
    document.getElementById('getUserLatitudeLongitude').onclick=function() {    
        getUserLatitudeLongitude();
    }

    // 주소 반환 (String)
    document.getElementById('getUserLocation').onclick=function() {    
        getUserLocation();
    }

    // 현재 기온 반환 (int) , open API 상에서 문제 발생시 null 반환 
    document.getElementById('getCurrentTemperature').onclick=function() {    
        getCurrentTemperature();
    }

    // 미세먼지 수치와 정도를 반환 (String) e.g. 12,매우 좋음
    document.getElementById('getCurrentDustIndexAndResult').onclick=function() {    
        getCurrentDustIndexAndResult();
    }

    // 자외선 지수와 정도를 반환(String) e.g. 0.0,좋음 open API 상에서 문제 발생시 빈 문자열 "" 반환 
    document.getElementById('gerCurrentUVIndexAndResult').onclick=function() {    
        gerCurrentUVIndexAndResult();
    }
    
}
