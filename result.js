document.addEventListener('DOMContentLoaded', function () {
    const currentDate = document.getElementById('current-date');
    const usdtAmount = document.getElementById('usdt-amount');
    const referralCode = document.getElementById('referral-code');
    const withdrawalAmount = document.getElementById('withdrawal-amount');
    const withdrawInput = document.getElementById('withdraw-input');
    const finalWithdrawButton = document.getElementById('final-withdraw-button');
    const withdrawalWarning = document.getElementById('withdrawal-warning');
  
    const randomUSDT = () => (Math.random() * 100).toFixed(2);
  
    // 임의의 레퍼럴 코드 생성
    const generateReferralCode = () => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let code = '';
      for (let i = 0; i < 10; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return code;
    };
  
    // 현재 날짜 표시
    const setCurrentDate = () => {
      const now = new Date();
      currentDate.textContent = now.toLocaleDateString();
    };
  
    setCurrentDate();
    const randomUsdtValue = randomUSDT();
    usdtAmount.textContent = `${randomUsdtValue} USDT`;
    referralCode.textContent = generateReferralCode();
    if (withdrawalAmount) {
      withdrawalAmount.textContent = `${randomUsdtValue} USDT`;
    }
  
    // 최종 출금하기 버튼 클릭 시 출금 처리
    if (finalWithdrawButton) {
      finalWithdrawButton.addEventListener('click', function () {
        const inputAmount = parseFloat(withdrawInput.value);
        const availableAmount = parseFloat(usdtAmount.textContent.split(' ')[0]);
        if (inputAmount > availableAmount) {
          withdrawalWarning.classList.remove('hidden');
        } else {
          alert(`${inputAmount} USDT가 출금되었습니다.`);
          withdrawalWarning.classList.add('hidden');
        }
      });
    }
  });
  