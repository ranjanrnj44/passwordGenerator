//define buttons
// let GenBtn = document.getElementById("GenBtn");
//     GenBtn.addEventListener("click", GeneratePWD(10));


//getting range
let slider = document.getElementById("myRange");
let rangeValue = document.getElementById("password_len");
    rangeValue.innerHTML = `PWD Length : ${slider.value}`;
slider.oninput = function () {
    rangeValue.innerHTML = `PWD Length  :${this.value}`;
    let that = this.value; //since the function loos it's scope we referening in this way
    GeneratePWD(that);
}

function GeneratePWD(n) { //by default it takes 9, look html file
    console.log(n);
    let password = '';
    let secret = '874956123' + 'QWERTYUKJHGVB' + 'zxcvbasdfgh' + '*&^%$#$,./?(';
    for (let i = 1; i <= n; i++) {
      let result = Math.floor(Math.random() * secret.length + 1);
      password += secret.charAt(result);
    }
    let password_element = document.getElementById("password_gen");
    password_element.innerHTML = password;

    //return password;
}

// copy function
let cpyBtn = document.getElementById("CpyBtn");
    cpyBtn.addEventListener("click", () => {
    let get_element = document.getElementById("password_gen");
    let temp_element = document.createElement("textarea");
        temp_element.value = get_element.innerHTML;
    
    document.body.appendChild(temp_element);
    temp_element.select();
    document.execCommand("copy");
    temp_element.remove();
});