let toggleBtn = document.getElementById('toggleBtn');
let pwd1 = document.querySelector('#pwd1');

toggleBtn.addEventListener('click', () => {
	// if(조건1의 내용){
	//     조건1이 참이면 실행하는 코드가 들어갑니다
	// }else if(조건2의 내용){
	//     조건1이 거짓이면서 동시에 조건2가 참이면 실행하는 코드
	// }
	if (pwd1.type === 'password') {
		btnSubmit;

		pwd1.setAttribute('type', 'text');
		toggleBtn.classList.add('hide');
	} else if (pwd1.type === 'text') {
		pwd1.setAttribute('type', 'password');
		toggleBtn.classList.remove('hide');
	}
});

//validation 인증작업
let form = document.querySelector('.user');
let btnSubmit = form.querySelector('input[type=submit]');

btnSubmit.addEventListener('click', (e) => {
	if (!isTxt('userid', 5)) {
		e.preventDefault();
	}
	if (!isCheck('accesspath')) {
		e.preventDefault();
	}
	if (!isCheck('forever')) {
		e.preventDefault();
	}
	if (!isPwd('pwd', 're-pwd', 8)) {
		e.preventDefault();
	}
});
function isTxt(id, len) {
	//사용자가 값을 넣는 대상을 변수로 설정
	let input = form.querySelector(`[name=${id}]`);
	//그 대상의 인풋태그에 넣은 값을 변수에 담습니다
	let txt = input.value;
	//사용자가 작성한 값과 개발자가 설정한 값을 비교합니다
	if (txt.length >= 5) {
		let iserrMsgs = input.closest('td').querySelectorAll('p');
		if (iserrMsgs.length > 0) {
			input.closest('td').querySelector('p').remove();
		}
		//비교값이 참이면 트루를
		return true;
	} else {
		let iserrMsgs = input.closest('td').querySelectorAll('p');
		if (iserrMsgs.length > 0) {
			input.closest('td').querySelector('p').remove();
		}
		//에러메세지 생성하는 코드
		let errMsg = document.createElement('p');
		errMsg.append(`입력항목을 5글자 이상 입력하세요`);
		input.closest('td').append(errMsg);
		//비교값이 거짓이면 폴스를 반환합니다
		return false;
	}
}
function isCheck(el) {
	//변수설정
	let inputs = form.querySelectorAll(`[name=${el}]`);
	console.log(inputs);
	let isCheck = false;
	//취미일때 [input#game, input#sleeping, input#reading]
	//성별일때 [input#male, input#female]
	for (let el of inputs) {
		//el.checked를 확인해서 1개라도 체크가되어있다면 true가
		//하나도 체크가 안되어있다면 false가 됩니다
		//그리고 false면 else코딩이 안되어있으므로 아예if문자체가 무시됨
		//그러면 ture면 안에있는 isCheck = true;이것이 실행됨
		if (el.checked) {
			isCheck = true;
		}
	}

	if (isCheck == true) {
		let iserrMsgs = inputs[0].closest('td').querySelectorAll('p');
		if (iserrMsgs.length > 0) {
			inputs[0].closest('td').querySelector('p').remove();
		}
		return true;
	} else {
		let iserrMsgs = inputs[0].closest('td').querySelectorAll('p');
		if (iserrMsgs.length > 0) {
			inputs[0].closest('td').querySelector('p').remove();
		}
		let errMsg = document.createElement('p');
		errMsg.append(`필수 입력 항목을 체크해주세요`);
		inputs[0].closest('td').append(errMsg);
		return false;
	}
}

function isPwd(name1, name2, len) {
	let pwd1 = form.querySelector(`[name=${name1}]`);
	let pwd2 = form.querySelector(`[name=${name2}]`);
	console.log(pwd1, pwd2, len);

	let pwd1_val = pwd1.value;
	let pwd2_val = pwd2.value;
	console.log(pwd1_val, pwd2_val);

	if (
		pwd1_val === pwd2_val &&
		pwd1_val.length >= len &&
		/[0-9]/.test(pwd1_val) &&
		/[a-zA-Z]/.test(pwd1_val) &&
		/[~!@#$%^&*()_+?<>]/.test(pwd1_val)
	) {
		let iserrMsgs = pwd1.closest('td').querySelectorAll('p');
		if (iserrMsgs.length > 0) {
			pwd1.closest('td').querySelector('p').remove();
		}
		return true;
	} else {
		let iserrMsgs = pwd1.closest('td').querySelectorAll('p');
		if (iserrMsgs.length > 0) {
			pwd1.closest('td').querySelector('p').remove();
		}
		let errMsg = document.createElement('p');
		errMsg.append(
			`비밀번호는 ${len}글자 이상, 영문,숫자,특수문자를 포함하여 동일하게 입력하세요`
		);
		pwd1.closest('td').append(errMsg);
		return false;
	}
}
