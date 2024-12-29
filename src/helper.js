 function genticket(numElements = 6) {
    const ticket = [];
    for (let i = 0; i < numElements; i++) {
        ticket.push(Math.floor(Math.random() * 10));
    }
    return ticket;
}

function sum(arr){
    return arr.reduce((sum ,curr) => sum + curr, 0);

}

export {genticket, sum};