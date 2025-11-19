import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({ notificaciones, readNotifications }) {
    console.log(notificaciones);
    const handleClick = (notificacion) => {
        console.log("Notificación clickeada:", notificacion);
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Mis Notificaciones
                </h2>
            }
        >
            <Head title="Notificaciones" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg">
                        <div className="p-6">
                            <div className="max-w-xl mx-auto">
                                {notificaciones.length === 0 &&
                                readNotifications.length === 0 ? (
                                    <div className="text-center py-12">
                                        <svg
                                            className="mx-auto mb-4 h-12 w-12 text-gray-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 16h-1v-4h-1m1-4h.01M12 6a9 9 0 100 18 9 9 0 000-18z"
                                            />
                                        </svg>
                                        <h2 className="text-gray-500 text-lg font-medium">
                                            No hay notificaciones
                                        </h2>
                                        <p className="text-gray-400 mt-2">
                                            Cuando recibas nuevas notificaciones
                                            aparecerán aquí.
                                        </p>
                                    </div>
                                ) : (
                                    <>
                                        {notificaciones.map((notificacion) => (
                                            <Link
                                                key={notificacion.id}
                                                href={route(
                                                    "candidatos_index",
                                                    notificacion.data.id_vacante
                                                )}
                                                as="div"
                                                className="bg-blue-50 shadow-md rounded-lg p-4 mb-4 border-l-4 border-blue-500 cursor-pointer transition-all duration-300 ease-in-out"
                                            >
                                                <p className="text-gray-700 font-semibold mb-2">
                                                    Tienes un nuevo candidato
                                                </p>
                                                <p className="text-gray-600">
                                                    <strong>
                                                        Nombre Vacante:
                                                    </strong>{" "}
                                                    {
                                                        notificacion.data
                                                            .nombre_vacante
                                                    }
                                                </p>
                                                <p className="text-gray-500 text-sm mt-2">
                                                    <strong>Fecha:</strong>{" "}
                                                    {new Date(
                                                        notificacion.created_at
                                                    ).toLocaleString()}
                                                </p>
                                            </Link>
                                        ))}

                                        {readNotifications.map(
                                            (notificacion) => (
                                                <Link
                                                    key={notificacion.id}
                                                    href={route(
                                                        "candidatos_index",
                                                        notificacion.data
                                                            .id_vacante
                                                    )}
                                                    as="div"
                                                    className="bg-white shadow-md rounded-lg p-4 mb-4 border-l-4 border-gray-300 cursor-pointer transition-all duration-300 ease-in-out opacity-70"
                                                >
                                                    <p className="text-gray-700 font-semibold mb-2">
                                                        Tienes un nuevo
                                                        candidato
                                                    </p>
                                                    <p className="text-gray-600">
                                                        <strong>
                                                            Nombre Vacante:
                                                        </strong>{" "}
                                                        {
                                                            notificacion.data
                                                                .nombre_vacante
                                                        }
                                                    </p>
                                                    <p className="text-gray-500 text-sm mt-2">
                                                        <strong>Fecha:</strong>{" "}
                                                        {new Date(
                                                            notificacion.created_at
                                                        ).toLocaleString()}
                                                    </p>
                                                </Link>
                                            )
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
