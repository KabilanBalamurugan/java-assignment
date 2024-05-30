function multiplication(x,y)
{
    return (x*y)
}
console.log(multiplication(2,3));
console.log(multiplication(2,4));
console.log(multiplication(2,5));
console.log(multiplication(2,6));

let multipartial=multiplication.bind(null,3);
console.log(multipartial(3));
console.log(multipartial(5));
console.log(multipartial(8));
