function handleClickMenuSwitch() {
    var sidebar = document.getElementById('sidebar');
    var rightContent = document.getElementById('rightContent');
    if (sidebar.className === 'fixed-col') {
        sidebar.className = 'fixed-col-show';
        rightContent.className = 'col-hide';
    } else {
        sidebar.className = 'fix ed-col';
        rightContent.className = 'col';
    }
}