let text = '{"employees":['+
'{"firstName": "John", "lastName": "Doie", "city":"Chennai"},'+
'{"firstName": "Billy", "lastName": "Mayes", "city":"Dallas"},'+
'{"firstName": "Bobby", "lastName": "Brown", "city":"Atlanta"}]}';

const obj = JSON.parse(text);
console.log(obj.employees[2].firstName + " "+obj.employees[2].lastName)