import React, { useState, useContext } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import './Sidebar.css';
import { dataContext } from '../../context/UserContex';

function Sidebar() {
  const [extend, setExtend] = useState(false);
  const { sent, prevPromt = [], newChat } = useContext(dataContext);

  async function loadPrevPrompt(prompt) {
    sent(prompt);
  }

  return (
    <div className="sidebar">
      <GiHamburgerMenu 
        id='ham' 
        onClick={() => setExtend(prev => !prev)} 
      />
      <div className="newchat" onClick={() => newChat()}>
        <FaPlus />
        {extend ? <p>New Chat</p> : null}
      </div>
      {prevPromt.length > 0 ? (
        prevPromt.map((item, index) => (
          <div 
            className="recent" 
            key={index}
            onClick={() => loadPrevPrompt(item)}
          >
            <FaRegMessage />
            {extend ? <p>{item.slice(0, 10) + '...'}</p> : null}
          </div>
        ))
      ) : (
        <div className="no-recent">No recent chats</div>
      )}
    </div>
  );
}

export default Sidebar;
