import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots, handleClick, handleDelete}) {
  
  const displayCards=bots.map(bot=>{
    return<BotCard className="bot-specs"
    key={bot.id} 
    bot={bot}
    handleClick={handleClick}
    handleDelete={handleDelete}
    />})
  
  return (
    <div className="ui four column grid">
      <div className="row">
    {/* and here */}
        {/* {bots.map((bot) => ( }
					{ <BotCard key={bot.id} bot={bot} /> }
				{/* ))} */}
  
        {displayCards}
      </div>
    </div>
  );
}


export default BotCollection;