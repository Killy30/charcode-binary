const $inputText = document.querySelector('#text')
const $result = document.querySelector('#result')
const $btn_reset = document.querySelector('#btn_reset')

function convertCodeBinary(code){
    let table_num = [128, 64, 32, 16, 8, 4, 2, 1]
    let output = []

    for(let i = 0; i <= 7; i++){
        let num = table_num[i]

        if(num > code){
            output.push(0)
        }else{
            output.push(1)
            code = code - num
        }
    }
    result(output.join(''))
}

function result(binaryCode){
    $result.value += binaryCode
}

$inputText.addEventListener('keypress', e =>{
    convertCodeBinary(e.charCode)
})

$btn_reset.addEventListener('click', e =>{
    $result.value = ''
    $inputText.value = ''
})