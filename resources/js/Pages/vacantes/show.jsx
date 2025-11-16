import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

export default function Dashboard({ vacante }) {
    console.log(vacante);
    const user = usePage().props.auth.user;
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    {vacante.titulo}
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12 bg-gray-50">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-8">
                            <div className="space-y-6">
                                <h2 className="text-4xl font-bold text-gray-800">
                                    {vacante.titulo}
                                </h2>

                                <p className="text-gray-600">
                                    {vacante.descripcion}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="flex items-center">
                                        <span className="font-semibold text-gray-700">
                                            Empresa:{" "}
                                        </span>
                                        <span className="ml-2 text-gray-600">
                                            {vacante.empresa}
                                        </span>
                                    </div>

                                    <div className="flex items-center">
                                        <span className="font-semibold text-gray-700">
                                            Último Día para Aplicar:{" "}
                                        </span>
                                        <span className="ml-2 text-gray-600">
                                            {vacante.ultimo_dia}
                                        </span>
                                    </div>

                                    <div className="flex items-center">
                                        <span className="font-semibold text-gray-700">
                                            Categoría:{" "}
                                        </span>
                                        <span className="ml-2 text-gray-600">
                                            {vacante.categoria.categoria}
                                        </span>
                                    </div>

                                    <div className="flex items-center">
                                        <span className="font-semibold text-gray-700">
                                            Salario:{" "}
                                        </span>
                                        <span className="ml-2 text-gray-600">
                                            {vacante.salario.salario}
                                        </span>
                                    </div>
                                </div>

                                {user ? (
                                    <div>
                                        <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200">
                                            Postúlate Ahora
                                        </button>
                                    </div>
                                ) : (
                                    <div className="mt-6 text-center">
                                        <p className="text-gray-700 text-lg">
                                            ¿Deseas postularte a esta vacante?{" "}
                                            <a
                                                href={route("register")}
                                                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                                            >
                                                Regístrate
                                            </a>
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div className="flex justify-center items-center">
                                <img
                                    src={`/storage/vacantes/${vacante.imagen}`}
                                    alt="Imagen de vacante"
                                    className="w-full h-auto rounded-md shadow-sm max-w-md"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
