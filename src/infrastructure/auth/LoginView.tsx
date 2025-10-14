import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Login } from "../../api/AuthAPI";
import { toast } from "react-toastify";

type LoginForm = {
  email: string;
  password: string;
}

export default function LoginView() {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: Login,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      localStorage.setItem('AUTH_TOKEN', data ?? '');
      navigate('/');
    }
  });

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    mutate(data);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-gray-100 px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/10">
        <div className="flex justify-center mb-6">
          <Link to={'/'} className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-600 to-emerald-400 flex items-center justify-center shadow-md">
            <span className="text-white font-semibold text-lg">HJ</span>
          </Link>
        </div>

        <h1 className="text-2xl font-semibold text-center mb-2">Bienvenido</h1>
        <p className="text-gray-400 text-center mb-8 text-sm">
          Inicia sesión para acceder al sistema
        </p>

        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Correo electrónico
            </label>
            <input
              placeholder="tuemail@ejemplo.com"
              className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/20 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
              {...register('email', {
                required: 'El email es requerido'
              })}
            />
            {errors && errors.email ? <p className="text-red-400 text-xs mt-1">{errors.email.message}</p> : null}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Contraseña
            </label>
            <input
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/20 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
              {...register('password', {
                required: 'La contraseña es requerida'
              })}
            />
            {errors && errors.password ? <p className="text-red-400 text-xs mt-1">{errors.password.message}</p> : null}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 transition-all text-white font-semibold py-2.5 rounded-lg shadow-md"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}
