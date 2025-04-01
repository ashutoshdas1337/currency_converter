const getRate=async function(){
  const baseCurrency="USD"
  const convertCurrency="INR"
  const api_key="e26f25ecd4af7ce7c434b954"
  const url=`https://v6.exchangerate-api.com/v6/${api_key}/latest/${baseCurrency}`
  const response= await fetch(url);
  const data=await response.json();
  console.log(data);
  console.log(100*(data.conversion_rates[convertCurrency]
    ))
}
getRate()