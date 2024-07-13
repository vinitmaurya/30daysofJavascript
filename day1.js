function logTypeValue(value){
    console.log(typeof(value)," : ", value);   
}
var var_number = 34;
logTypeValue(var_number);
let let_string = 'One Day Javascript';
logTypeValue(let_string);
const const_bool = false;
logTypeValue(const_bool);
const const_object = {
    name: 'Vinit',
    day: 1,
    completed: false
};
logTypeValue(const_object);
var var_array = ['dummy','dummy2','dummy3',false,343];
logTypeValue(var_array);
//trying to change a const value
//throwing error
//TypeError: Assignment to constant variable.
const_bool = true;
logTypeValue(const_bool);
let_string = 'Welcome to Javascript Day One';
logTypeValue(let_string);