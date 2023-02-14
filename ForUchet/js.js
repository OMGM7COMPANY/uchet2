document.querySelectorAll('.snipet_button').forEach(el => {
    el.onclick = open_snipet;
})
let out = document.querySelector('.input_snippets p');
let snipetInformation = {};


function open_snipet(){
    let mainId,
        currency,
        flag;
    let radio_currency = document.querySelectorAll('.i-7');

    for (let item of radio_currency){
        if (item.checked){
            currency = item.value;
            break;
        }
    }
    if (this.classList.contains('main_items')){
                mainId = this.dataset.main;
            } else if(this.classList.contains('dolg')){
                mainId = this.dataset.dolg;
            } else{
                mainId = this.dataset.crypto;
                flag = true
            }
            let quanity = prompt('Пожалуйста введите сумму в указанной валюте', '');
            quanity = quanity.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,');
            if (flag) {
                coins = prompt('Пожалуйста введите точное колл. монет в указанной криптовалюте', '');
                price = prompt('Пожалуйста введите точную Цену монет указанной криптовалюты в Долларах в момент заполнения формы ', '');
                snipetInformation[mainId] = `${quanity} $ | Колл. Монет: ${coins} | Цена в моменте: ${price} $`;
            } else{
                snipetInformation[mainId] = `${quanity} ${currency}`;
            }
    
    let outText = '';
    
    for (let key in snipetInformation){
        outText += `${key} - ${snipetInformation[key]}<br>`
    }
    
    out.innerHTML = outText;
}

function copySnipet(){
    navigator.clipboard.writeText(out.innerText);
    if (confirm('Скопированно, очистить ?')){
     snipetInformation = {};
     out.innerHTML = '';
    }
}
