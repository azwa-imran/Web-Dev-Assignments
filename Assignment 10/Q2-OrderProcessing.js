// ---------- Version 1:- nested callbacks ----------
function prepareOrder(callback) {
    console.log("Preparing order..");
    setTimeout(() => {
        console.log("Order prepared");
        callback();
    }, 1000);
}
function packOrder(callback) {
    console.log("Packing order..");
    setTimeout(() => {
        console.log("Order packed");
        callback();
    }, 1000);
}
function notifyCustomer(callback) {
    console.log("Notifying customer..");
    setTimeout(() => {
        console.log("Customer notified");
        callback();
    }, 1000);
}
// ---------- Version 2:- Promises + async/await ----------
function prepareOrder2() {
    return new Promise((resolve) => {
        console.log("Preparing order..");
        setTimeout(() => {
            console.log("Order prepared");
            resolve();
        }, 1000);
    });
}
function packOrder2() {
    return new Promise((resolve) => {
        console.log("Packing order...");
        setTimeout(() => {
            console.log("Order packed");
            resolve();
        }, 1000);
    });
}
function notifyCustomer2() {
    return new Promise((resolve) => {
        console.log("Notifying customer...");
        setTimeout(() => {
            console.log("Customer notified");
            resolve();
        }, 1000);
    });
}
async function processOrder() {
    await prepareOrder2();
    await packOrder2();
    await notifyCustomer2();
    console.log("Version 2 finished");
}
// ---------- Version 1 then Version 2 ----------
console.log(" Version 1= callbacks");
prepareOrder(() => {
    packOrder(() => {
        notifyCustomer(() => {
            console.log("Version 1 finished");
            console.log(" Version 2= async/await");
            processOrder();
        });
    });
});
