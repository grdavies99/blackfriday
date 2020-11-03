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

setInterval(Scrape, 100*10);

function Scrape(){
url.forEach(element => {
    if(element != "q"){
        axios.get(element).then(Response =>{
            let getData = html=>{
                data = [];
                const $ = cheerio.load(html);
                title = $('h1#title span#productTitle').text().replace(/(\r\n|\n|\r)/gm,"");
                price = $('span#price_inside_buybox').text().replace(/(\r\n|\n|\r)/gm,"");
                data.push({
                    title : title,
                    price : price
                });
                console.log(data);
            }
            getData(Response.data);
        }).catch(error=>{
            console.log(error);
        })
    }
});
}