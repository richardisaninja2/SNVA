let present_dt = new Date();
console.log(present_dt);
console.log(present_dt.getDate())
console.log(present_dt.getDay())
console.log(present_dt.getFullYear());
console.log(present_dt.getMonth());
console.log(present_dt.getHours());
console.log(present_dt.getMinutes());


let custom_dt = new Date("1990/05/25");
console.log(custom_dt);
console.log(present_dt.setDate(2))
console.log("date changed:", present_dt.getDate());
console.log(present_dt.setMonth(6))
console.log("date changed:", present_dt.getMonth());
console.log(present_dt.setFullYear(2025))
console.log("date changed",present_dt.getFullYear())