const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.newegg.com/crucial-p1-1tb/p/N82E16820156199';
axios.get(url).then(response=>{
    // console.log(response.data);
    let getData = html =>{
        data = [];
        const $ = cheerio.load(html);
        title = $('h1.product-title').text();
        price =  $('div.product-buy-box li.price-current').text();
        // .each((i,elem) =>{
            data.push({
                title : title,
                price : price
            // });
        });
        console.log(data);
    }
    getData(response.data);
}).catch(error=>{
    console.log(error);
})

