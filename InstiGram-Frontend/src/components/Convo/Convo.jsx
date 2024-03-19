import "bootstrap/dist/css/bootstrap.min.css";
import "./Convo.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {BASE_URL} from "../../App" 


function Convo() {

    const [message, setMessage] = useState([]);
    const { id } = useParams();
    console.log(id)
    const user_id = localStorage.getItem("user_id");
    let [newMessage, setNewMessage] = useState({message: ""})
    console.log("newMessage == ", newMessage.message)

    useEffect(() => {
        
        const fetchData = async () => {
            
            try {
                
                
                const response = await fetch(BASE_URL + '/api-backend/' + user_id + '/' + id + '/',{
                    method: "GET",
                    credentials: "include",
                    headers: {},
                    body: {}
                });
                if(Array.isArray(response.data)){
                console.log(response.data);
                setMessage(response.data);
                }
                else{
                    console.log("messages nhi aa rhe")
                }
            } catch (error) {
                console.log("Errorrrrrrrrrrrr", error); 
            }
        };

        const interval = setInterval(fetchData, 2000);
        return () => clearInterval(interval);
    }, []);


    const handleChange = (event) => {
        setNewMessage({
            ...newMessage,
            message: event.target.value
        });
    };

    const handleSend = () => {
        const formdata = new FormData()
        formdata.append("user", user_id)
        formdata.append("reciever", id)
        formdata.append("sender", user_id)
        formdata.append("message", newMessage.message)

        console.log("Data being sent to backend:", Object.fromEntries(formdata));

        try {
            fetch(baseURL + '/send-message/', {
                method: 'POST',
                body: formdata
            })
            .then(response => {
                console.log(response.json())
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                document.getElementById('chat-box').value = "";
                setNewMessage(newMessage="")
                
            })
            .catch(error => {
                console.error('error in fetch operation:', error);
            });
        } catch (error) {
            console.error('Error outside of fetch operation:', error);
        }
    }


 

     return(
//         <div className="col-12 col-lg-7 col-xl-9">
//         <div className="py-2 px-4 border-bottom d-none d-lg-block">
//           <div className="d-flex align-items-center py-1">
//             <div className="position-relative">
//               {/* <img
//                 src="https://bootdey.com/img/Content/avatar/avatar3.png"
//                 className="rounded-circle mr-1"
//                 alt="pfp"
//                 width={40}
//                 height={40}
//               /> */}
//             </div>
//             <div className="flex-grow-1 pl-3">
//               <strong>{message.reciever_profile.full_name}</strong>
//               <div className="  small">
//                 {/* <em>Online</em> */}
//               </div>
//             </div>
//           <div>
              
              
//               {/* <button className="btn btn-light border btn-lg px-3">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width={24}
//                   height={24}
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="feather feather-more-horizontal feather-lg"
//                 >
//                   <circle cx={12} cy={12} r={1} />
//                   <circle cx={19} cy={12} r={1} />
//                   <circle cx={5} cy={12} r={1} />
//                 </svg>
//               </button> */}
//             </div>
//           </div>
//         </div>
//         <div className="position-relative  ">
//           <div className="chat-messages p-4">
//             {message.map((message, index) => 
//             <>
//                {message.sender.id  === user_id &&
//             <div className="chat-message-right pb-4">
//               <div>
//                 <img
//                   src={message.sender_profile.image}
//                   className="rounded-circle mr-1"
//                   alt="pfp"
//                   width={40}
//                   height={40}
//                 />
//                 {/* <div className="text-time   small text-nowrap mt-2">
//                   2:33 am
//                 </div> */}
//               </div>
//               <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
//                 <div className="font-weight-bold mb-1">You</div>
//               { message.message}
//               </div>
//             </div>
//             }
//             {message.sender !== user_id &&
//             <div className="chat-message-left pb-4">
//               <div>
//                 <img
//                   src={message.sender_profile.image}
//                   className="rounded-circle mr-1"
//                   alt="pfp"
//                   width={40}
//                   height={40}
//                 />
//                 {/* <div className="text-time   small text-nowrap mt-2">
//                   2:34 am
//                 </div> */}
//               </div>
//               <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
//                 <div className="font-weight-bold mb-1">{message.reciever_profile.full_name}</div>
//                {message.message}
//               </div>
//             </div>
// }
//             </>
// )}
//           </div>
//         </div>
//         <div className="flex-grow-0 py-3 px-4 border-top">
          <div className="input-group">
             <input
            type="text"
            className="form-control"
            placeholder="Type your message here"
            id="chat-box"
                        
              value={newMessage.message}
              onChange={handleChange}
            />
            <button className="btn btn-primary" onClick={handleSend} >Send</button>
          
          </div>
//         </div>
//       </div>
     );
}

export default Convo