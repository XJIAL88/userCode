let CascadeFlow = (function() {
    let imgData = null,
        codeRUn = false,
        page = 0;

    let getdata = function() {
        if (page > 20) {
            alert('没有更多数据了');
            page = false;
            window.onscroll = null;
            return;
        }

        page++;
        let xhr = new XMLHttpRequest;
        xhr.open('get', './json/data.json', false);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                imgData = JSON.parse(xhr.responseText);
                innerHTML(imgData);
            };
        };
        xhr.send(null);
    };

    let bindHTML = function({ link, pic, title }) {
        let str = null;
        str = `<a href="${link}">
                <img src="${pic}" alt="">
                <p>${title}</p>
               </a>`;
        return str;
    };

    let sortLi = function() {
        let oList = document.querySelectorAll('.main li');
        let oListAry = [].slice.call(oList);
        if (oListAry[0].offsetHeight === 0) {
            //=>第一次：还没有加入任何内容，此时的顺序就是默认顺序
            return oListAry;
        }
        return oListAry.sort(function(a, b) {
            return a.offsetHeight - b.offsetHeight;
        });
    };

    let innerHTML = function(result) {
        for (let i = 0; i < result.length; i += 5) {
            let item1 = result[i],
                item2 = result[i + 1],
                item3 = result[i + 2],
                item4 = result[i + 3],
                item5 = result[i + 4];
            let oListAry = sortLi();
            console.log(oListAry);
            item1 ? oListAry[0].innerHTML += bindHTML(item1) : null;
            item2 ? oListAry[1].innerHTML += bindHTML(item2) : null;
            item3 ? oListAry[2].innerHTML += bindHTML(item3) : null;
            item4 ? oListAry[3].innerHTML += bindHTML(item4) : null;
            item5 ? oListAry[4].innerHTML += bindHTML(item5) : null;
        }
    };

    let loadMore = function() {
        window.onscroll = function() {
            let clientH = document.documentElement.clientHeight || document.body.clientHeight,
                scrollH = document.documentElement.scrollHeight || document.body.scrollHeight,
                scrollT = document.documentElement.scrollTop;
            if ((scrollT + 100) >= (scrollH - clientH)) {
                console.log("ok")
                codeRUn = true;
                getdata();
            }
        }
    };

    return {
        init: function() {
            getdata();
            loadMore();
        }
    }
})();
CascadeFlow.init();