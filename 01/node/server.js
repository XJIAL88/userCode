let http = require('http'),
    url = require('url');


let port = `9999`;
http.createServer((req, res) => {
    //=> 把请求的url地址中：路径 & 问号传参 分别解析出来
    let { pathname, query } = url.parse(req.url, true);
    console.log(pathname, query);
    res.writeHead(200, {
        'content-type': 'text/plain;charset=utf-8'
    })
    res.write(
        JSON.stringify(pathname, query)
    );

    res.end();

}).listen(port, () => {
    console.log('服务器开启')
});