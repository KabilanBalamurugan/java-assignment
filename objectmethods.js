// Create an Object:
const person = {
    firstName: "Balamurugan",
    lastName: "R",
    age:54,
  };
  console.log(person);

  // Assign values that are already defined 
 Object.assign(person,{firstName:"Kabilan",lastName:"B",age:24});
  
  //Add a Property
  Object.defineProperty(person,"City",{value:"Madurai"});

  //Change of Property

  // Add Multiple Properties
  Object.defineProperties(person, {"DOB":{value:"2000"},"Job":{value:"Software Engineer"}});
  console.log(person);

  // Get all Properties
 Object.getOwnPropertyNames(person);

    console.log(person);


 //setPrototypeOf method
const car = {type:"Sedan", model:"Ford Fiesta", color:"white"}; //Source Object
const brand= {};  //Object that inherits the value

//syntax Object.setPrototypeOf(obj,source)
Object.setPrototypeOf(brand,car);

console.log(brand.model); //Result=> Ford Fiesta

// Prevents re-assignment
    let car1=Object.isExtensible(car);
    console.log(car1)
    
    // Prevents adding object properties
    Object.preventExtensions(car1)


    //Returns true if properties are muttable
    let car0=Object.isExtensible(car1)
    console.log(car0)

    // Prevents adding and deleting object properties
    Object.seal(car)

    // Returns true if object is sealed
    let car2=Object.isSealed(car)
    console.log(car2)
 
    // Prevents any changes to an object
    Object.freeze(car)

    // Returns true if object is frozen
    let car3=Object.isFrozen(car)
    console.log(car3);
