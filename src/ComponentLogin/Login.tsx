import { FcGoogle } from "react-icons/fc";
import { FaUserCircle } from "react-icons/fa";

export const LoginForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-[#eaf0ed] border border-gray-300 shadow-lg rounded-2xl p-8 w-full max-w-sm text-center">
        {/* Ícono de usuario */}
        <FaUserCircle className="text-6xl text-[#292826] mx-auto mb-4" />

        <h2 className="text-2xl font-semibold text-[#292826] mb-6">
          Iniciar Sesión
        </h2>

        {/* formulario */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full p-2 bg-[#292826] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />

          <input
            type="email"
            placeholder="Correo"
            className="w-full p-2 bg-[#292826] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="w-full p-2 bg-[#292826] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />

          {/* Botón Google */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-[#292826] font-medium py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition"
          >
            <FcGoogle className="text-xl" />
            <span>Continuar con Google</span>
          </button>

          {/* Botón iniciar sesión */}
          <button
            type="submit"
            className="w-full p-2 bg-[#292826] text-white font-semibold rounded-lg hover:bg-[#1f1f1f] focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          >
            Iniciar Sesión
          </button>
        </form>

        {/* Enlaces abajo */}
        <div className="flex justify-between text-sm text-indigo-600 mt-4 font-medium italic">
          <a href="#" className="hover:underline">
            ¿Olvidaste tu contraseña?
          </a>
          <a href="#" className="hover:underline">
            Registrarse
          </a>
        </div>
      </div>
    </div>
  );
};
