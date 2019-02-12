window.onload = function () {
    isShowSidebar();
};

window.onresize = function () { // 当浏览器窗口大小改变时
    isShowSidebar();
};

/**
 * 是否显示侧边栏
 */
function isShowSidebar() {
    let sidebar = getElementById('sidebar');
    let menuSwitch = getElementById('menuSwitch');
    let w = document.documentElement.clientWidth; // 获取页面可见宽度
    let limitWidth = 1500; // 小于 1500 宽度的小屏电脑触发
    let flag = true;
    if (w < limitWidth) {
        menuSwitch.style.display = 'block';
        flag = false;
    } else {
        menuSwitch.style.display = 'none';
    }
    setElementStyle(sidebar, flag);
}

/**
 * 处理点击菜单开关
 */
function handleClickMenuSwitch() {
    let sidebar = getElementById('sidebar');
    let sidebarDisplay = sidebar.style.display;
    if (sidebarDisplay === 'none') {
        sidebar.style.display = 'block';
        setTimeout(() => {
            sidebar.style.opacity = 1;
        });
    } else {
        sidebar.style.opacity = 0;
        setTimeout(() => {
            sidebar.style.display = 'none';
        }, 200); // 此处的 200 为延迟触发 否则过渡效果不明显
    }
}

/**
 * 通过id获取元素
 * @param {String} id 元素的id
 */
function getElementById(id) {
    return document.getElementById(id);
}

/**
 * 设置元素样式
 * @param {Object} ele 元素对象
 * @param {Boolean} cont 控制显示隐藏的状态
 */
function setElementStyle(ele, cont) {
    let display = 'none';
    let opacity = 0;
    if (cont) {
        display = 'block';
        opacity = 1;
    }
    ele.style.display = display;
    ele.style.opacity = opacity;
}