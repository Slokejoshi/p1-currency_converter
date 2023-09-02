const populate = async (value,currency)=>{

    let mystr = ""
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_dlBuWQaEJbBK8W29O9yYczabstvMA8vl8HVmU7vj&base_currency=" + currency;
    let resopnse = await fetch(url)
    let rJson = await resopnse.json()
    console.log(rJson);
    for(let key of Object.keys(rJson["data"])){
        // key,rJson["data"][key]["code"], rJson["data"][key]["value"]
        mystr +=  `
                    <tr>
                        <td>${key}</td>
                        <td>${rJson["data"][key]["code"]}</td>
                        <td>${parseFloat(rJson["data"][key]["value"] * value).toFixed(2)}</td>
                    </tr>
                         `
    }
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = mystr
}

const btn = document.querySelector('.btn');
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("button is clicked");

    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value;
    populate(value, currency);
})
  
  
  