
import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'




const Reservation = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(0);
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const navigate = useNavigate();

    const today = new Date().toISOString().split('T')[0];


    const handleReservation = async (e) => {
        e.preventDefault();
       // console.log("button clicked");
        
      
        // Basic validation for empty fields
        if (!firstName.trim()) {
          toast.error("First name is required");
          return;
        }
      
        if (!lastName.trim()) {
          toast.error("Last name is required");
          return;
        }
      
        if (!email.trim()) {
          toast.error("Email is required");
          return;
        }
      
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          toast.error("Invalid email format");
          return;
        }
      
        if (!phone.trim()) {
          toast.error("Phone number is required");
          return;
        }
      
        // Phone number validation (e.g., length check)
        if (phone.length < 10 || phone.length > 15) {
          toast.error("Invalid phone number");
          return;
        }
      
        if (!date.trim()) {
        
          toast.error("Date is required")
          
          return;
        }
      
        if (!time.trim()) {
          toast.error("Time is required");
          return;
        }
      
        try {
          const { data } = await axios.post(
            "http://localhost:3000/api/v1/reservation/send",
            { firstName, lastName, email, phone, date, time },
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          );
      
          toast.success(data.message);
          setFirstName("");
          setLastName("");
          setPhone(0);
          setEmail("");
          setTime("");
          setDate("");
          navigate("/success");
        } catch (error) {
          toast.error(error.response?.data?.message || "An error occurred");
          console.log(error);
          
        }
      };
      

  return (
   <section className="reservation" id='reservation'>
    <div className="container">
        <div className="banner">
            <img src="/reservation.png" alt="reservation" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>FOR FURTHER QUESTIONS, PLEASE CALL</p>
            <form>
                <div>
                    <input type="text"
                    placeholder='First Name'
                    value={firstName}
                    onChange={(e)=> setFirstName(e.target.value)}
                     />
                    <input type="text"
                    placeholder='Last Name'
                    value={lastName}
                    onChange={(e)=> setLastName(e.target.value)}
                     />
                </div>
                <div>
                    <input type="date" 
                    placeholder='Date'
                    value={date}
                    onChange={(e)=> setDate(e.target.value)}
                    min={today}
                    required
                    />
                    <input type="time" 
                    placeholder='time'
                    value={time}
                    onChange={(e)=> setTime(e.target.value)}
                    />
                </div>
                <div>
                    <input type="email"
                    placeholder='Email'
                    className='email_tag'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                     />
                    <input type="number"
                    placeholder='Phone Number'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                     />
                </div>
                <button type="submit" onClick={handleReservation} >RESERVE NOW
                        <span><HiOutlineArrowNarrowRight/></span>
                     </button>
            </form>
          </div>
        </div>
    </div>
   </section>
  )
}

export default Reservation





































// import React from 'react'
// import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
// import axios from 'axios'
// import { useState } from 'react'
// import toast from 'react-hot-toast'
// import { useNavigate } from 'react-router-dom'




// const Reservation = () => {
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState(0);
//     const [time, setTime] = useState("");
//     const [date, setDate] = useState("");
//     const navigate = useNavigate();

//     const handleReservation = async (e) =>{
//         e.preventDefault();
//         try {
//             const {data} = await axios.post("http://localhost:3000/api/v1/reservation/send",
//             { firstName, lastName, email, phone, date, time},
//             {
//                 headers:{
//                     "Content-Type":"application/json",
//                 },
//                 withCredentials: true
//             }
//         );
//         toast.success(data.message);
//         setFirstName("");
//         setLastName("");
//         setEmail("");
//         setPhone(0);
//         setDate("");
//         setTime("");
//         navigate("/success")
//         } catch (error) {
//             toast.error(error.response.data.message)
//         }
//     }

//   return (
//    <section className="reservation" id='reservation'>
//     <div className="container">
//         <div className="banner">
//             <img src="/reservation.png" alt="reservation" />
//         </div>
//         <div className="banner">
//           <div className="reservation_form_box">
//             <h1>MAKE A RESERVATION</h1>
//             <p>FOR FURTHER QUESTIONS, PLEASE CALL</p>
//             <form>
//                 <div>
//                     <input type="text"
//                     placeholder='First Name'
//                     value={firstName}
//                     onChange={(e)=> setFirstName(e.target.value)}
//                      />
//                     <input type="text"
//                     placeholder='Last Name'
//                     value={lastName}
//                     onChange={(e)=> setLastName(e.target.value)}
//                      />
//                 </div>
//                 <div>
//                     <input type="date" 
//                     placeholder='Date'
//                     value={date}
//                     onChange={(e)=> setDate(e.target.value)}
//                     />
//                     <input type="time" 
//                     placeholder='time'
//                     value={time}
//                     onChange={(e)=> setTime(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <input type="email"
//                     placeholder='Email'
//                     className='email_tag'
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                      />
//                     <input type="number"
//                     placeholder='Phone Number'
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                      />
//                 </div>
//                 <button type='submit' onClick={handleReservation} >RESERVE NOW
//                         <span><HiOutlineArrowNarrowRight/></span>
//                      </button>
//             </form>
//           </div>
//         </div>
//     </div>
//    </section>
//   )
// }

// export default Reservation










// import React from "react";
// import { HiOutlineArrowNarrowRight } from "react-icons/hi";
// import axios from "axios";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// const Reservation = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [phone, setPhone] = useState(0);
//   const navigate = useNavigate();

//   const handleReservation = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         " http://localhost:3000/api/v1/reservation/send",
//         { firstName, lastName, email, phone, date, time },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );
//       toast.success(data.message);
//       setFirstName("");
//       setLastName("");
//       setPhone(0);
//       setEmail("");
//       setTime("");
//       setDate("");
//       navigate("/success");
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   return (
//     <section className="reservation" id="reservation">
//       <div className="container">
//         <div className="banner">
//           <img src="/reservation.png" alt="res" />
//         </div>
//         <div className="banner">
//           <div className="reservation_form_box">
//             <h1>MAKE A RESERVATION</h1>
//             <p>For Further Questions, Please Call</p>
//             <form>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="First Name"
//                   value={firstName}
//                   onChange={(e) => setFirstName(e.target.value)}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Last Name"
//                   value={lastName}
//                   onChange={(e) => setLastName(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <input
//                   type="date"
//                   placeholder="Date"
//                   value={date}
//                   onChange={(e) => setDate(e.target.value)}
//                 />
//                 <input
//                   type="time"
//                   placeholder="Time"
//                   value={time}
//                   onChange={(e) => setTime(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="email_tag"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <input
//                   type="number"
//                   placeholder="Phone"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                 />
//               </div>
//               <button type="submit" onClick={handleReservation}>
//                 RESERVE NOW{" "}
//                 <span>
//                   <HiOutlineArrowNarrowRight />
//                 </span>
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Reservation;