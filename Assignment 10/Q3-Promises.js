function registerStudent(Name, seat) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (seat) {
                resolve(`${Name} is registered successfully.`);
            } else {
                reject(`${Name} the class is full.`);
            }
        }, 1000);
    });
}
//  seat is available 
registerStudent("Saira", true)
    .then((message) => {
        console.log("Success=", message);
        return "Confirmation sent to Saira";   
    })
    .then((nextMessage) => {
        console.log(nextMessage);
    })
    .catch((error) => {
        console.log("Error=", error);
    });

//  seat is not available
registerStudent("Ali", false)
    .then((message) => {
        console.log("Success=", message);
    })
    .catch((error) => {
        console.log("Error=", error);
    });