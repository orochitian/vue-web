export default function (index) {
    var timmer = null;
    //  滚动速度
    var scrollSpeed = 20;
    //  当前滚动条距离顶部的高度
    var scrollTop = document.documentElement.scrollTop;
    //  获取要滚动的到第几个section的位置
    var toTop = document.getElementsByClassName('section')[index].offsetTop;
    //  需要修正的位置（向上或向下偏离的位置）
    var offset = 10;

    timmer = setInterval(function () {
        //  如果当前位置小于要滚动的位置，则向下滚动
        if( scrollTop < toTop ) {
            scrollTop += scrollSpeed;
            if( scrollTop >= toTop ) {
                clearInterval(timmer);
                scrollTop = scrollTop - offset;
            }
            window.scrollTo(0, scrollTop - offset);
        } else {    //  如果当前位置大于要滚动的位置，则向上滚动
            scrollTop -= scrollSpeed;
            if( scrollTop <= toTop ) {
                clearInterval(timmer);
                scrollTop = scrollTop - offset;
            }
            window.scrollTo(0, scrollTop - offset);
        }

    }, 10);
}
