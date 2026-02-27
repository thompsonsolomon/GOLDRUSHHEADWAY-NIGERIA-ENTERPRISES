import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../Helpers/firebase";

function Auth() {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const navigate = useNavigate();

 const handleLogin = async (e) => {
  e.preventDefault();
  try {
   await signInWithEmailAndPassword(auth, email, password);
   navigate("/admin");
  } catch (error) {
   alert(error.message);
  }
 };

 return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
   <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">

    <h2 className="text-2xl font-bold text-center mb-2">
     Admin Login
    </h2>
    <p className="text-sm text-gray-500 text-center mb-6">
     Sign in to access the dashboard
    </p>

    <form onSubmit={handleLogin} className="space-y-4">

     {/* Email */}
     <div>
      <label className="block text-sm font-medium mb-1">
       Email Address
      </label>
      <input
       type="email"
       placeholder="admin@example.com"
       className="w-full border border-gray-300 rounded-lg px-4 py-2 
                     focus:outline-none focus:ring-2 focus:ring-black 
                     focus:border-transparent transition"
       onChange={(e) => setEmail(e.target.value)}
       required
      />
     </div>

     {/* Password */}
     <div>
      <label className="block text-sm font-medium mb-1">
       Password
      </label>
      <input
       type="password"
       placeholder="••••••••"
       className="w-full border border-gray-300 rounded-lg px-4 py-2 
                     focus:outline-none focus:ring-2 focus:ring-black 
                     focus:border-transparent transition"
       onChange={(e) => setPassword(e.target.value)}
       required
      />
     </div>

     {/* Button */}
     <button
      type="submit"
      className="w-full bg-[#D4AF37] text-white py-2.5 rounded-lg 
                   hover:bg-[#D4AF37]-800 transition font-medium"
     >
      Login
     </button>

    </form>
   </div>
  </div>
 );
}

export default Auth;