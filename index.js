const getRate=async function(){
  const baseCurrency=document.getElementById("baseCurrency").value
  const convertCurrency=document.getElementById("targetCurrency").value
  const api_key="e26f25ecd4af7ce7c434b954"
  const url=`https://v6.exchangerate-api.com/v6/${api_key}/latest/${baseCurrency}`
  const response= await fetch(url);
  const data=await response.json();
  console.log(data);
  console.log(document.getElementById("amount").value*(data.conversion_rates[convertCurrency]
    ))
    document.getElementById("showAmount").innerText=`${document.getElementById("amount").value*(data.conversion_rates[convertCurrency]
    )}`
}
const getCodes=async function(){
  // const baseCode;
  // const targetCode;
  const api_key="e26f25ecd4af7ce7c434b954"
  const url=`https://v6.exchangerate-api.com/v6/${api_key}/codes`
  const response=await fetch(url);
 console.log(response)
  const data=await response.json();
  console.log(data);
  data.supported_codes.forEach(([code,name]) => {
    const option=`<option value="${code}">${code} - ${name}</option>`;
    baseCurrency.innerHTML += option;
    targetCurrency.innerHTML += option;
  });
}
getCodes();
getRate()