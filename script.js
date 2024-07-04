function hideInitialScreen() {
    document.querySelector('.initial-screen').classList.add('hidden');
    document.querySelector('.container').classList.remove('hidden');
    document.getElementById('introVideo').play();
}

function skipIntro() {
    document.getElementById('choiceButtons').classList.remove('hidden');
}

function showCheckChoice() {
    document.getElementById('introVideo').pause();
    document.getElementById('introVideo').classList.add('hidden');
    const videoElement = document.createElement('video');
    videoElement.id = 'checkChoiceVideo';
    videoElement.className = 'video';
    videoElement.autoplay = true;
    videoElement.src = 'checkchoice.mp4';
    videoElement.type = 'video/mp4';
    videoElement.onended = function () {
        document.querySelector('.container').removeChild(videoElement);
        document.getElementById('popup').classList.remove('hidden');
    };
    document.querySelector('.container').appendChild(videoElement);
}

function showWithdrawChoice() {
    document.getElementById('introVideo').pause();
    document.getElementById('introVideo').classList.add('hidden');
    const videoElement = document.createElement('video');
    videoElement.id = 'withdrawVideo';
    videoElement.className = 'video';
    videoElement.autoplay = true;
    videoElement.src = 'withdraw.mp4';
    videoElement.type = 'video/mp4';
    videoElement.onended = function () {
        document.querySelector('.container').removeChild(videoElement);
        document.getElementById('popup').classList.remove('hidden');
    };
    document.querySelector('.container').appendChild(videoElement);
}

function showOtherChoice() {
    document.getElementById('introVideo').pause();
    document.getElementById('introVideo').classList.add('hidden');
    const videoElement = document.createElement('video');
    videoElement.id = 'otherChoiceVideo';
    videoElement.className = 'video';
    videoElement.autoplay = true;
    videoElement.src = 'otherchoice.mp4';
    videoElement.type = 'video/mp4';
    videoElement.onended = function () {
        document.querySelector('.container').removeChild(videoElement);
        document.getElementById('popup').classList.remove('hidden');
    };
    document.querySelector('.container').appendChild(videoElement);
}

function clearPassword() {
    document.getElementById('password').value = '';
}

document.getElementById('phone').addEventListener('input', function (e) {
    if (e.target.value.length === 11) {
        document.getElementById('password').focus();
    }
});

document.getElementById('phone').addEventListener('input', function (e) {
    document.getElementById('loginButton').disabled = !e.target.value || !document.getElementById('password').value;
});

document.getElementById('password').addEventListener('input', function (e) {
    document.getElementById('loginButton').disabled = !e.target.value || !document.getElementById('phone').value;
});

document.getElementById('tutorialButton').addEventListener('click', function () {
    document.getElementById('popup').classList.add('hidden');
    document.getElementById('tutorialPopup').classList.remove('hidden');
});

function gotoPage(page) {
    window.location.href = page;
}

// 동영상이 끝날 때 선택 버튼 표시
document.getElementById('introVideo').addEventListener('ended', function () {
    document.getElementById('choiceButtons').classList.remove('hidden');
});
