import {
  emailValidation,
  nullCheckValidation,
  passwordValidation,
  phoneNumberValidation,
  radioCheckValidation,
  validation
} from './lib/validation.js';
export const signup = () => {
  const formEl = document.querySelector('.form');
  const emailInput = document.querySelector('.input.emailInput');
  const passwordInput = document.querySelector('.input.password');
  const passwordCheckInput = document.querySelector('.input.passwordCheck');
  const postalCode = document.querySelector('.add_button.mt_add_2');
  validation(emailInput, emailValidation);
  // signup 전송 함수
  function handleSubmit(e) {
    e.preventDefault();

    const [
      emailInput,
      passwordInput,
      secondPasswordInput,
      passwordAnswer,
      question,
      phoneNumber1,
      phoneNumber2,
      phoneNumber3,
      addressBtn,
      roadAddress,
      detailsAddress,
      jibunAddress,
      detailAddress,
      extraAddress,
      consent1,
      consent2
    ] = e.target;

    const phoneNumber =
      phoneNumber1.value + phoneNumber2.value + phoneNumber3.value;
    // 패스워드와 패스워드 확인이 다를 경우와 특수기호, 숫자, 영문자 검사
    const isValidPassword = passwordValidation(
      passwordInput.value,
      secondPasswordInput.value
    );

    const isValidEmail = emailValidation(emailInput.value);
    const isValidPhoneNumber = phoneNumberValidation(phoneNumber);
    if (isValidPassword === 'no') {
      alert('입력한 패스워드가 일치하지 않습니다.');
      return; // 폼 제출을 중단합니다.
    }
    if (isValidPassword === 'less') {
      alert(
        '비밀번호는 영문자, 숫자, 특수 기호를 포함하여 8자 이상 24자 이하이어야 합니다.'
      );
      return;
    }
    if (!isValidEmail) {
      alert('Email 형식이 맞지 않습니다.');
      return;
    }
    if (!isValidPhoneNumber) {
      alert('전화번호 형식이 맞지 않습니다.');
      return;
    }

    const nullChecked = nullCheckValidation([
      emailInput.value,
      passwordInput.value,
      secondPasswordInput.value,
      question.value,
      phoneNumber1.value,
      phoneNumber2.value,
      phoneNumber3.value,
      roadAddress.value,
      detailsAddress.value,
      jibunAddress.value,
      detailAddress.value,
      extraAddress.value
    ]);
    if (!nullChecked) {
      alert('빈칸을 작성하세요');
      return;
    }

    if (!radioCheckValidation(consent1) || !radioCheckValidation(consent2)) {
      alert('이용약관에 동의하세요');
      return;
    }

    // 데이터 패칭 후
    // fetch(
    //   {
    //     email: emailInput,
    //     password: passwordInput,
    //     question,
    //     phoneNumber,
    //     ... 각종 정보들
    //   },
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   }
    // );
    // document.cookie = "cookie=res.cookie"
    // window.location.href="/home"
  }

  // form submit
  formEl.addEventListener('submit', handleSubmit);

  // 패스워드 확인 valueCheck 와 유사
  passwordInput.addEventListener('input', (e) => {
    const password = passwordCheckInput.value || '';
    if (passwordValidation(e.target.value, password) === 'ok') {
      passwordInput.classList.remove('faild');
      passwordCheckInput.classList.remove('faild');
    } else {
      passwordInput.classList.add('faild');
      passwordCheckInput.classList.add('faild');
    }
  });

  passwordCheckInput.addEventListener('input', (e) => {
    const password = passwordInput.value || '';
    if (passwordValidation(e.target.value, password) === 'ok') {
      passwordCheckInput.classList.remove('faild');
      passwordInput.classList.remove('faild');
    } else {
      passwordCheckInput.classList.add('faild');
    }
  });

  // 도로명 주소 검색
  postalCode.addEventListener('click', sample4_execDaumPostcode);

  //본 예제에서는 도로명 주소 표기 방식에 대한 법령에 따라, 내려오는 데이터를 조합하여 올바른 주소를 구성하는 방법을 설명합니다.
  function sample4_execDaumPostcode() {
    new daum.Postcode({
      oncomplete: function (data) {
        // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

        // 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
        // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
        var roadAddr = data.roadAddress; // 도로명 주소 변수
        var extraRoadAddr = ''; // 참고 항목 변수

        // 법정동명이 있을 경우 추가한다. (법정리는 제외)
        // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
        if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
          extraRoadAddr += data.bname;
        }
        // 건물명이 있고, 공동주택일 경우 추가한다.
        if (data.buildingName !== '' && data.apartment === 'Y') {
          extraRoadAddr +=
            extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName;
        }
        // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
        if (extraRoadAddr !== '') {
          extraRoadAddr = ' (' + extraRoadAddr + ')';
        }

        // 우편번호와 주소 정보를 해당 필드에 넣는다.
        document.getElementById('sample4_postcode').value = data.zonecode;
        document.getElementById('sample4_roadAddress').value = roadAddr;
        document.getElementById('sample4_jibunAddress').value =
          data.jibunAddress;

        // 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
        if (roadAddr !== '') {
          document.getElementById('sample4_extraAddress').value = extraRoadAddr;
        } else {
          document.getElementById('sample4_extraAddress').value = '';
        }

        var guideTextBox = document.getElementById('guide');
        // 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
        if (data.autoRoadAddress) {
          var expRoadAddr = data.autoRoadAddress + extraRoadAddr;
          guideTextBox.innerHTML = '(예상 도로명 주소 : ' + expRoadAddr + ')';
          guideTextBox.style.display = 'block';
        } else if (data.autoJibunAddress) {
          var expJibunAddr = data.autoJibunAddress;
          guideTextBox.innerHTML = '(예상 지번 주소 : ' + expJibunAddr + ')';
          guideTextBox.style.display = 'block';
        } else {
          guideTextBox.innerHTML = '';
          guideTextBox.style.display = 'none';
        }
      }
    }).open();
  }
};
