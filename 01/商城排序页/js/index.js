let productRender = (function() {
    let aList = document.querySelectorAll('.headBox a'),
        oBox = document.querySelector('.obox'),
        data = null;

    let getdata = function() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', '../json/product.json', false);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                data = JSON.parse(xhr.responseText);
            }
        }
        xhr.send(null);
    }
    let bindData = function() {
        let str = ``;
        data.forEach(item => {
            let { hot, img, price, time, title } = item;
            str += `<li data-price="${price}" data-time="${time}" data-hot="${hot}">
                        <a href="javascript:;" >
                            <img src="../${img}" alt="">
                            <p class="title">${title}</p>
                            <p class="price">
                                <span>￥</span>
                                <span>${price}</span>
                            </p>
                            <p class="time">
                                <span>时间：</span>
                                <span>${time}</span>
                            </p>
                            <p class="hot">
                                <span>热度：</span>
                                <span>${hot}</span>
                            </p>
                        </a>
                    </li>`
        });
        oBox.innerHTML = str;
    }
    let bindClick = function() {
        let oLis = document.querySelectorAll('ul>li'),
            frg = document.createDocumentFragment(),
            ary = ['data-time', 'data-price', 'data-hot'];
        aList = [].slice.call(aList);
        aList.forEach(function(item, index) {
            item.frag = -1;
            oLis = [].slice.call(oLis);
            item.onclick = function() {
                let _this = this;
                for (var i = 0; i < aList.length; i++) {
                    let cur = aList[i];
                    if (cur !== this) {
                        cur.frag = -1;
                    }
                }
                this.frag *= -1;
                oLis.sort(function(a, b) {
                    let aInner = a.getAttribute(ary[index]),
                        bInner = b.getAttribute(ary[index]);
                    if (!aInner || bInner) {
                        aInner = aInner.replace(/-/g, '');
                        bInner = bInner.replace(/-/g, '');
                    }
                    return (aInner - bInner) * _this.frag;
                });
                // if (_this.frag === -1) {
                //     $('.headBox em span:eq(0)').addClass('curent');
                //     $('.headBox em span:eq(1)').removeClass('curent');
                // } else {
                //     $('.headBox em span:eq(1)').addClass('curent');
                //     $('.headBox em span:eq(0)').removeClass('curent');
                // }
                oLis.forEach(item => {
                    frg.appendChild(item);
                });
                oBox.appendChild(frg);
                // frg = null;
            }
        })
    }

    return {
        init: function() {
            getdata();
            bindData();
            bindClick();

        }
    }
})();

productRender.init();