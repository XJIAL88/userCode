var oBox = document.getElementById('box');
var oLis = oBox.getElementsByTagName('li');
var oPs = oBox.getElementsByTagName('p');

function chageTab (n){
    for(var i = 0;i<oLis.length;i++){
        oLis[i].className =  oPs[i].className = '';
    }
    oLis[n]['className'] = oPs[n]['className'] = 'active';
}

function loop (i){
    oLis[i].onmouseover = function(){
        chageTab(i)
    }
}

for(var i = 0; i < oLis.length; i++ ){
    loop(i);
    console.log(loop);
}