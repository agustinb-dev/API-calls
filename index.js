const API_URL_BTC = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin";
const API_URL_ETH = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum";
const API_URL_POLKADOT = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=polkadot";



function apiResponse(response) {
    let apiData = response.json();
    return apiData
  }

function getPrices() {
    const apiBtcPriceResponse = fetch(API_URL_BTC);
    const apiEthPriceResponse = fetch(API_URL_ETH);
    const apiDotPriceResponse = fetch(API_URL_POLKADOT);
    
     apiBtcPriceResponse.then(apiResponse)
          .then(data => {
              let btcPrice = data[0].current_price;
              console.log(btcPrice);
              document.getElementById('btc-price').innerHTML = btcPrice;
        });
      
     apiEthPriceResponse.then(apiResponse)
          .then(data => {
              let ethPrice = data[0].current_price;
              console.log(ethPrice);
              document.getElementById('eth-price').innerHTML = ethPrice;
        });
      
      
     apiDotPriceResponse.then(apiResponse)
          .then(data => {
              let dotPrice = data[0].current_price;
              console.log(dotPrice);
              document.getElementById('dot-price').innerHTML = dotPrice;
          })
}

getPrices();

const refreshBtn = document.getElementById("refresh-btn");
refreshBtn.addEventListener("click", function (event){
    getPrices();  
})

let seconds = 4000;
let intervalId = setInterval(getPrices, seconds);

const setBtn = document.getElementById("set-seconds");
setBtn.addEventListener("click", function getSeconds(event){
    event.preventDefault();
    seconds = Number(document.getElementById('seconds').value);
    clearInterval(intervalId);
    intervalId = setInterval(getPrices, seconds);
})


