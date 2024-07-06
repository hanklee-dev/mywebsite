import requests

# GitHub API URL 및 인증 정보 설정
GIST_ID = '10ef136b2f3ddfaf0221f57b0425fe17'  # 여기에 너의 Gist ID를 입력해
GITHUB_TOKEN = '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'  # 여기에 너의 GitHub Personal Access Token을 입력해

# Gist 업데이트 함수
def update_gist(file_name, content):
    url = f'https://api.github.com/gists/{GIST_ID}'
    headers = {
        'Authorization': f'token {GITHUB_TOKEN}',
        'Accept': 'application/vnd.github.v3+json'
    }
    payload = {
        'files': {
            file_name: {
                'content': content
            }
        }
    }
    response = requests.patch(url, headers=headers, json=payload)
    if response.status_code == 200:
        print(f'{file_name}이(가) 성공적으로 업데이트되었습니다.')
    else:
        print(f'업데이트 실패: {response.status_code}')
        print(response.json())

# index.html 파일 내용 업데이트
new_content = """
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">
    <title>레퍼럴 페이백 서비스 Backbit</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <div class="initial-screen">
        <div class="logo-container">
            <img src="Logo-main.png" alt="Logo" class="logo" onclick="hideInitialScreen()">
            <p class="tagline">가장 신뢰받는 레퍼럴 페이백 서비스</p>
        </div>
    </div>
    <div class="container hidden">
        <video id="introVideo" class="video" autoplay muted>
            <source src="intro.mp4" type="video/mp4">
        </video>
        <a id="skipButton" class="skip-button button glow-button" onclick="skipIntro()">건너뛰기</a>
        <div id="choiceButtons" class="choices hidden">
            <a class="action-button button glow-button" onclick="showCheckChoice()"><i class="fas fa-search"></i> 조회하기</a>
            <a class="action-button button glow-button" onclick="showWithdrawChoice()"><i class="fas fa-money-bill-wave"></i> 출금하기</a>
            <a class="action-button button glow-button" onclick="showOtherChoice()"><i class="fas fa-cogs"></i> 다른 메뉴</a>
        </div>
    </div>
    <div id="popup" class="popup hidden">
        <div class="popup-content">
            <img src="login-image.png" alt="Login Image" class="popup-image">
            <h2 class="tagline-popup">가장 신뢰받는 레퍼럴 페이백 서비스</h2>
            <p class="sub-tagline-popup">백비트로 거래수수료를 돌려받으세요</p>
            <button id="tutorialButton" class="popup-button glow-button">백비트 이용이 처음이신가요?</button>
            <div class="input-container">
                <label for="phone" class="input-label">휴대폰 번호</label>
                <input type="tel" id="phone" class="popup-input" placeholder="01012345678" pattern="[0-9]{11}">
            </div>
            <div class="input-container">
                <label for="password" class="input-label">비밀번호</label>
                <input type="password" id="password" class="popup-input" placeholder="비밀번호 입력">
                <button class="clear-button" onclick="clearPassword()">×</button>
            </div>
            <button id="loginButton" class="login-button glow-button" disabled>로그인</button>
        </div>
    </div>
    <div id="tutorialPopup" class="popup hidden">
        <div class="popup-content">
            <img src="popup-1.png" alt="Tutorial Image" class="popup-image centered-element">
            <h2 class="tagline-popup centered-element">백비트에 오신걸 환영합니다</h2>
            <p class="sub-tagline-popup centered-element">페이백의 모든 것</p>
            <img src="Logo-01.png" alt="Logo" class="popup-logo centered-element">
            <div class="button-container">
                <img src="popup-2.png" alt="Icon" class="button-icon">
                <button class="popup-button glow-button full-width centered-element small-text" onclick="gotoPage('check.html')">가입한 거래소가 없어요</button>
            </div>
            <div class="button-container">
                <img src="popup-3.png" alt="Icon" class="button-icon">
                <button class="popup-button glow-button full-width centered-element small-text" onclick="gotoPage('withdraw.html')">트레이딩하는 거래소가 있어요</button>
            </div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
"""

update_gist('index.html', new_content)
