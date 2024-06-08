export default function formatDate(dateString) {
    // 将日期字符串转换成 Date 对象
    const date = new Date(dateString);

    // 月份的英文缩写
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // 星期的英文全称
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // 获取日期、月份、年份、小时和分钟
    const day = date.getDate();
    const monthAbbr = months[date.getMonth()];
    const weekday = weekdays[date.getDay()];
    const hours = ('0' + date.getHours()).slice(-2); // 保证小时格式为两位数
    const minutes = ('0' + date.getMinutes()).slice(-2); // 保证分钟格式为两位数

    // 返回包含所需值的对象
    return {
        day,
        monthAbbr,
        weekday,
        time: `${hours}:${minutes}`
    };
}

