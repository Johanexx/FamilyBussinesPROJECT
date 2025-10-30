import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate(); // Hook de navegación

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    navigate("/inicio");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

      <div className="bg-[#eaf0ed] border border-gray-300 shadow-lg rounded-2xl p-8 w-full max-w-sm text-center">
        {/* Ícono de usuario */}
        <i className="fa-solid fa-user-circle text-6xl text-gray-800 mb-4"></i>

        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Iniciar Sesión
        </h2>

        {/* Formulario */}
        <form className="space-y-4" onSubmit={handleLogin}>
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
            className="w-full flex items-center justify-center gap-2 bg-[#292826] text-white font-medium py-2 rounded-lg hover:bg-[#3a3937] cursor-pointer transition"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Continuar con Google</span>
          </button>

          {/* Botón iniciar sesión */}
          <button
            type="submit"
            className="w-full p-2 bg-[#292826] text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:bg-[#3a3937] transition"
          >
            Iniciar Sesión
          </button>
        </form>

        {/* Enlaces abajo */}
        <div className="flex justify-between text-sm mt-4 font-medium italic">
          <a href="#" className="text-[#4e342e] hover:underline">¿Olvidaste tu contraseña?</a>
          <a href="#" className="text-[#4e342e] hover:underline">Registrarse</a>
        </div>
      </div>
    </div>
  );
}
