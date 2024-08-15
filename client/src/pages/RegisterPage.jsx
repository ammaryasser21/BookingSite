import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function RegisterUser(e) {
    e.preventDefault();
    try {
      await axios.post("/register", {
        name,
        email,
        password,
      });
      alert('Successfully registered');
    } catch (e) {
      alert("register failed");
      console.log(e);
    }

  }
  //TODO: 1:12:13
  return (
    <div className="flex items-center justify-around mt-4 grow">
      <div className="mt-64">
        <h1 className="mb-4 text-4xl text-center">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={RegisterUser}>
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="primary">Register</button>
          <div className="py-2 text-center text-gray-500">
            Already a member?{" "}
            <Link to="/login" className="text-black underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
