const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".select-currency")
const convertFrom = document.querySelector(".select-currency-main")
const moeda = document.querySelector(".currency")
const flagReal = document.querySelector(".img-real")



const convertValues = async () => {
    const currencyValueToconvert = document.querySelector(".currency-value-to-convert") // valor em real
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValue = document.querySelector(".currency-value") // outras moedas

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    
    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const libraToday = 6.22
    const bitcoinToday = data.BTCBRL.high


    console.log(data)

    if (currencySelect.value == "dolar") // se o select estiver selecionado o valor de dolar, entre aqui 
    {
        currencyValue.innerHTML = new Intl.NumberFormat
            ('en-US', { style: 'currency', currency: 'USD' }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") // se o select estiver selecionado o valor de euro, entre aqui 
    {
        currencyValue.innerHTML = new Intl.NumberFormat
            ('de-DE', { style: 'currency', currency: 'EUR' }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra")// se o select estiver selecionado o valor de libra, entre aqui 
    {
        currencyValue.innerHTML = new Intl.NumberFormat
            ('en-UK', { style: 'currency', currency: 'GBP' }).format(inputCurrencyValue / libraToday)

    }
    if (currencySelect.value == "bitcoin") {
        currencyValue.innerHTML = new Intl.NumberFormat
            ('de-DE', { style: 'currency', currency: 'BTC' }).format(inputCurrencyValue / bitcoinToday)

    }


    currencyValueToconvert.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputCurrencyValue)

}



function changeCurrency() {

const currencyName = document.getElementById("currency-name")
const flagName = document.querySelector(".img-dolar")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        flagName.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        flagName.src = "./assets/euro.png"

    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        flagName.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        flagName.src = "./assets/bitcoin.png"

    }

    convertValues()
}



currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)