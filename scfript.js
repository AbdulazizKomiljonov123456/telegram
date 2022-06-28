
let loginContainer = document.querySelector('.login-container');
let qrcodeContainer = document.querySelector('.qrcode-container');
let codeContainer = document.querySelector('.code-container');
let phoneCode = document.querySelector('.login-part_country');
let loginLabel = document.querySelector('.login-part_label');
let otherInput = document.getElementById('other-input');
let otherInput1 = document.getElementById('other-input1');
let otherLabel = document.getElementById('other-label');
let otherLabel1 = document.getElementById('other-label1');
let nextBtn = document.querySelector('.next-btn');
let countryIcon = document.getElementById('login-part_icon');
let qrcode = document.querySelector('.qr-code');
let phoneNumber = document.querySelector('.phone-number');
let verifyNumber = document.querySelector('.verifyNumber');
let editIcon = document.getElementById('edit-icon');
let chatList = document.querySelector('.chat-list');

phoneCode.onmouseover = function () {
    loginLabel.style.color = 'rgb(51,144,236)';
    loginLabel.style.transition = 'all 0.2s';
}

phoneCode.onmouseout = function () {
    loginLabel.style.color = 'gray';
    loginLabel.style.transition = 'all 0.2s';
}

otherInput.onmouseover = function () {
    otherLabel.style.color = 'rgb(51,144,236)';
    otherLabel.style.transition = 'all 0.2s';
}

otherInput.onmouseout = function () {
    otherLabel.style.color = 'gray';
    otherLabel.style.transition = 'all 0.2s';
}

otherInput.onkeyup = function () {
    if (otherInput.value.length >= 7) {
        nextBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'none';
    }
}

countryIcon.onclick = function () {
    this.setAttribute('class', 'fa-solid fa-angle-up');
}

countryIcon.ondblclick = function () {
    this.setAttribute('class', 'fa-solid fa-angle-down');
}

// QR Code Part

qrcode.onclick = function () {
    loaded(qrcode);
    setTimeout(() => {
        loginContainer.style.display = 'none';
        qrcodeContainer.style.display = 'flex';
    }, 500);
}

phoneNumber.onclick = function () {
    loginContainer.style.display = 'flex';
    qrcodeContainer.style.display = 'none';
}

function loaded(content) {
    let oldName = content.innerText;
    content.innerText = 'Please Wait...';
    setTimeout(() => {
        content.innerHTML = oldName;
    }, 1000);
}

// Code Part

nextBtn.onclick = function () {
    loaded(nextBtn);
    setTimeout(() => {
        verifyNumber.innerText = otherInput.value;
        loginContainer.style.display = 'none';
        codeContainer.style.display = 'flex';
    }, 500);
}

editIcon.onclick = function () {
    loginContainer.style.display = 'flex';
    codeContainer.style.display = 'none';
}


otherInput1.onmouseover = function () {
    otherLabel1.style.color = 'rgb(51,144,236)';
    otherLabel1.style.transition = 'all 0.2s';
}

otherInput1.onmouseout = function () {
    otherLabel1.style.color = 'gray';
    otherLabel1.style.transition = 'all 0.2s';
}

otherInput1.oninput = function () {
    if (this.value.length === 5) {
        if (this.value === '12345') {
            location.href = './telegram.html';
        } else {
            this.style.borderColor = 'red';
            otherLabel1.style.color = 'red';
        }
    } else {
        this.style.borderColor = 'rgba(0 0 0 / 0.2)';
    }

    if (this.value.length >= 5) {
        this.value = '';
    }
}

otherInput.oninput = function () {
    if (this.value.length >= 15) {
        this.value = '';
    }
}











