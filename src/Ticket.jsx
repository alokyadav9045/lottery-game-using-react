import TicketNum from "./TicketNum"
import "./Ticket.css"

export default function Ticket({ticket}){
    return (
      <div className="ticket">
        <h3 className="heading">Ticket</h3>
        {ticket.map((num, idx) => (
            <TicketNum key={idx} num={num} />
        ))} 
      </div>
    );
}