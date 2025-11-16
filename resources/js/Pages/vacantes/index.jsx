import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import Swal from "sweetalert2";
import { showToast } from '@/utils/toast';

export default function Dashboard({ vacantes }) {
    const { delete: eliminarVacante } = useForm();

    const mostrarAlerta = (id) => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: `Estás a punto de eliminar el ítem con ID: ${id}. ¿Deseas continuar?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarVacante(route("vacantes_delete", id), {
                    onSuccess: () => {
                        showToast(`El ítem con ID: ${id} ha sido eliminado.`);
                    },
                    onError: () => {
                        showToast("Hubo un problema al intentar eliminar el ítem.","error",'#f27474');
                    },
                });
            }
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Mis Vacantes
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg">
                        <div className="p-6">
                            {vacantes?.data && vacantes.data.length > 0 ? (
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                                        Vacantes de Trabajo en TI
                                    </h2>
                                    <div className="space-y-4">
                                        {vacantes.data.map((item) => (
                                            <div
                                                key={item.id}
                                                className="p-5 border rounded-lg hover:shadow-md transition duration-300 bg-gray-50"
                                            >
                                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-blue-700">
                                                            {item.titulo}
                                                        </h3>
                                                        <p className="text-sm text-gray-500">
                                                            {item.empresa}
                                                        </p>
                                                    </div>

                                                    <div className="flex flex-wrap sm:flex-nowrap gap-2">
                                                        <a
                                                            href="#"
                                                            className="px-3 py-1.5 text-xs bg-blue-600 text-white rounded-md hover:bg-blue-700 w-full sm:w-auto"
                                                        >
                                                            Ver candidatos
                                                        </a>

                                                        <a
                                                            href={route(
                                                                "vacantes_edit",
                                                                item.id
                                                            )}
                                                            className="px-3 py-1.5 text-xs bg-indigo-500 text-white rounded-md hover:bg-indigo-600 w-full sm:w-auto"
                                                        >
                                                            Editar
                                                        </a>

                                                        <a
                                                            href="#"
                                                            onClick={() =>
                                                                mostrarAlerta(
                                                                    item.id
                                                                )
                                                            }
                                                            className="px-3 py-1.5 text-xs bg-red-500 text-white rounded-md hover:bg-red-600 w-full sm:w-auto"
                                                        >
                                                            Eliminar
                                                        </a>
                                                    </div>
                                                </div>

                                                <p className="mt-3 text-sm text-gray-700">
                                                    {item.descripcion}
                                                </p>

                                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-4 pt-3 border-t">
                                                    <span className="text-sm text-gray-500">
                                                        Último día:{" "}
                                                        {item.ultimo_dia}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center py-10 bg-gray-50 border border-dashed border-gray-300 rounded-md">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mx-auto h-12 w-12 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 17v-6h6v6m2 0a2 2 0 01-2 2H9a2 2 0 01-2-2v-6a2 2 0 012-2h6a2 2 0 012 2v6z"
                                        />
                                    </svg>
                                    <h3 className="mt-4 text-lg font-medium text-gray-700">
                                        No hay vacantes registradas
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Agrega nuevas vacantes para que los
                                        usuarios puedan postularse.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        {vacantes.data.length > 0 && (
                            <Pagination links={vacantes.links} />
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
