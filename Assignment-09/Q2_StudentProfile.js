const profile = {
    name:"Sara Ahmed",
    age:19,
    department:"Software Engineering",
    address: { city:"Karachi", country:"Pakistan" }
};
const { name , age } = profile;
const { department: program } = profile;
const { address: { city, country } } = profile;
const { phone = "Not Provided" } = profile;
console.log(`${name} studies ${program} in ${city}, ${country} Phone= ${phone}`);
console.log(profile);