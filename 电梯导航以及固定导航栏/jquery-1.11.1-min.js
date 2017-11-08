/**
 * 功能：兼容性封装被卷去的头部
 * @returns {{top: (Number|number), left: (Number|number)}}
 */
function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop,
        left: window.pageXOffset || document.documentElement.scrollLeft
    }
}
/**
 * 功能：兼容性获取屏幕可视区域的大小
 * @returns {{width: (Number|number), height: (Number|number)}}
 */
function client() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight
    };

}
/**
 * 功能：模拟响应式布局
 */
function changeBodyBackgroundColor() {
    if (client().width > 960) {
        document.body.style.backgroundColor = "red";
    } else if (client().width > 640) {
        document.body.style.backgroundColor = "green";
    } else {
        document.body.style.backgroundColor = "blue";
    }

}
/**
 * 功能：缓动动画封装（水平）
 * @param ele
 * @param target
 */
function animate(ele, target) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var step = (target - ele.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        ele.style.left = ele.offsetLeft + step + "px";
        if (Math.abs(target - ele.offsetLeft) <= Math.abs(step)) {
            ele.style.left = target + "px";
            clearInterval(ele.timer);
        }
    }, 20)

}

/**
 * 缓动动画封装（回到顶部）
 * @param ele
 * @param target
 */
function animates(ele,target) {
    clearInterval(ele.timer);
    ele.timer=setInterval(function () {
        var step=(target-scroll().top)/10;
        step=step>0?Math.ceil(step):Math.floor(step);
        window.scrollTo(0,scroll().top+step);
        if(Math.abs(target-scroll().top)<=Math.abs(step)){
            window.scrollTo(0,target);
            clearInterval(ele.timer);
        }
        
    },20)
}
