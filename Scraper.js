const axios = require('axios');
const cheerio = require('cheerio');
const prompt  = require('prompt-sync')({sigint: true});
url = [];
url[0] = prompt('please enter the url of your item or q to quit ');
var count = 1;
while (url[count] != 'q'){
    
    url[count] = prompt('please enter the url of your next item or q to quit ');
    if(url[count] != "q"){
        count++;
    }
}
url.forEach(element => {
    if(element != 'q'){
        axios.get(element).then(response=>{
            // console.log(response.data);
            let getData = html =>{
                data = [];
                const $ = cheerio.load(html);
                title = $('h1.product-title').text();
                price =  $('div.product-buy-box li.price-current').text();
                    data.push({
                        title : title,
                        price : price
                });
                console.log(data);
            }
            getData(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }
});



