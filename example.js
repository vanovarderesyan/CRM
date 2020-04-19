function add_business_days(days) {
    var now = new Date();
    var dayOfTheWeek = now.getDay();
    var calendarDays = days;
    var deliveryDay = dayOfTheWeek + days;
    if (deliveryDay >= 6) {
      //deduct this-week days
      days -= 6 - dayOfTheWeek;
      //count this coming weekend
      calendarDays += 2;
      //how many whole weeks?
      deliveryWeeks = Math.floor(days / 5);
      //two days per weekend per week
      calendarDays += deliveryWeeks * 2;
    }
    now.setTime(now.getTime() + calendarDays * 24 * 60 * 60 * 1000);
    return now;
}

console.log(add_business_days(3));