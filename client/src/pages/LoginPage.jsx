import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-around mt-4 grow">
      <div className="mt-64">
        <h1 className="mb-4 text-4xl text-center">Login</h1>
        <form action="" className="max-w-md mx-auto">
          <input type="email" placeholder="your@email.com" />
          <input type="password" placeholder="password" />
          <button className="primary">Login</button>
          <div className="py-2 text-center text-gray-500">
            Don&apos;t have an account yet?{" "}
            <Link to="/register" className="text-black underline">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
