const axios = require('axios');
const cheerio = require('cheerio');
const prompt  = require('prompt-sync')({sigint: true});
url = [];
url[0] = prompt('please enter the zipcode of your item or q to quit ');
var count = 1;
var orig = "https://api.census.gov/data/2016/zbp?get=ESTAB,EMPSZES,PAYANN&for=zipcode:";
while (url[count] != 'q'){
    
    url[count] = prompt('please enter the zipcode of your next item or q to quit ');
    if(url[count] != "q"){
        count++;
    }
}
Scrape();

function Scrape(){
url.forEach(element => {
    if(element != 'q'){
        axios.get(orig.concat(element)).then(response=>{
            // console.log(response.data);
            let getData = html =>{
                data = [];
                const $ = cheerio.load(html);
                title = $('body').html();
                console.log(orig.concat(element));
                // title = $.html();
                    data.push({
                        title : title,
                });
                console.log(data);
            }
            getData(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }
});
}
