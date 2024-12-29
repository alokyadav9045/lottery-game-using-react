import { useState } from "react";
import {genticket ,sum} from "./helper.js";
import "./lottery.css";
import Ticket from "./Ticket.jsx";

export default function Lottery({n=3, winningSum=15}) {
  const [ticket, setTicket] = useState(genticket(n));
  let isWinning =sum(ticket) === winningSum;

  let buyTicket = () => {
    setTicket(genticket(n));
  };

  return (
    <div className="lottery">
      <h1>Lottery Game Tickets!!</h1>
      <Ticket ticket={ticket}/>
      <br />
      <button onClick={buyTicket}>Buy Ticket</button>
      <br /><br />
      <h4>{isWinning && "Congratulation, You won lottery!"}</h4>
    </div>
  );
}