const tickets = [
    { id:101, customer:"zimal", status:"Open" },
    { id:102, customer:"Ali", status:"In Progress" },
    { id:103, customer:"saira", status:"Resolved" }
];
const ticketInput = document.getElementById("ticketInput");
const checkBtn = document.getElementById("check");
const result = document.getElementById("result");
function getTicket(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const ticket = tickets.find(t => t.id === id);
            if (ticket) {
                resolve(ticket);
            } else {
                reject(`Ticket ${id} was not found please check the ID and try again.`);
            }
        }, 2000);
    });
}
async function showTicket(id) {
    result.textContent = "Loading ticket..";
    console.log("Loading ticket..");

    try {
        const ticket = await getTicket(id);
        const message = `Ticket ${ticket.id} | Customer=${ticket.customer} | Status=${ticket.status}`;
        result.textContent = message;
        console.log(message);
    } catch (error) {
        result.textContent = error;
        console.log("Error", error);
    }
}
checkBtn.addEventListener("click", () => {
    const id = Number(ticketInput.value); 
    showTicket(id);
});