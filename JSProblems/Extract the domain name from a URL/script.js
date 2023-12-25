let result = document.querySelector('#result');

function domainName(url){
    domen = url.match(/(?:(?:\/\/)?(?:www.)?)([\w-]+)\./)[1];
    console.log(domen);
    return domen;
}

result.innerHTML = domainName("http://google.co.jp");