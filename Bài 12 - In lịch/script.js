const weekends = ["Chủ nhật","Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy"];
document.getElementById('calender-form').addEventListener('submit',function (event) {
    event.preventDefault();

    const day = Number(document.getElementById('input-day').value);
    const month = Number(document.getElementById('input-month').value);
    const year = Number(document.getElementById('input-year').value);
    const date = new Date(year,month - 1,day);

    document.getElementById('calender-year').textContent = date.getFullYear();
    document.getElementById('calender-month').textContent = 'Tháng ' + (date.getMonth + 1);
    document.getElementById('calender-day').textContent = date.getDate();
    document.getElementById('calender-weekday').textContent = weekends[date.getDay()];

    const hour = new Date().getHours();
    let greeting = 'Chào buổi tối';
    if(hour < 11) greeting = 'Chào buổi sáng!';
    else if (hour < 13) greeting = 'Chào buổi trưa!';
    else if (hour < 18) greeting = 'Chào buổi chiều!';
    document.getElementById('greeting').textContent = greeting;
});