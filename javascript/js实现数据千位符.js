js 实现数字千位符

function numberFormat(str) {
    if (str.toString().indexOf('.') > -1) {
        return str.toString().split('.')[0].replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') + '.' + str.toString().split('.')[1];
    }
    return str.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}
