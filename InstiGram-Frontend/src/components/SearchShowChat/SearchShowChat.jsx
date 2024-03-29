import React from 'react';
import './SeachShowChat.css';
import { Link, useLocation } from "react-router-dom";

export default function SearchShowChat(props) {
  const location = useLocation();

  return (
    <div className="below-search-chat">      
      <ul className="search-res-chat">
        {props.result.map(result => (
            <Link key={result.userId} to={`/chat/${result.userId}`} state={{background: location}}>
              <li  className='res-chat' >{result.data}  </li>
            </Link>
        ))}
      </ul>        
    </div>
  );
}
