import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="my-4 pb-4 text-lg text-gray-600">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          onClick={() => navigate("/")}
          className="border border-[#9538E2] text-[#9538E2] font-bold px-8 py-3 rounded-3xl hover:bg-[#9538E2] hover:text-white cursor-pointer duration-300 transition-all"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
