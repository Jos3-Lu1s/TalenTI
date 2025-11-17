import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Dashboard({ vacante }) {
    const [showmodal, setShowmodal] = useState(false);
      const [cvSeleccionado, setCvSeleccionado] = useState("");
    const toggleModal = (cv) => {
        setCvSeleccionado(cv);
        setShowmodal(!showmodal);
    };
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Candidatos
                </h2>
            }
        >
            <Head title={`Candidatos - ${vacante.titulo}`} />

            {/* <Modal show={showmodal}></Modal> */}
            <Modal
                show={showmodal}
                onClose={() => setShowmodal(false)}
                maxWidth="7xl"
            >
                <div className="p-4">
                    <h3 className="text-xl font-semibold mb-4">
                        CV del candidato
                    </h3>
                    <iframe
                        src={`/storage/cv/${cvSeleccionado}`}
                        className="w-full h-[80vh] border rounded"
                        title="CV"
                    />
                </div>
            </Modal>

            <div className="py-12 bg-gray-50">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg rounded-xl overflow-hidden mb-8 p-6">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="md:w-1/3 space-y-6">
                                <img
                                    src={`/storage/vacantes/${vacante.imagen}`}
                                    alt={vacante.titulo}
                                    className="w-full object-contain rounded-md shadow-sm"
                                />
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bold text-gray-800">
                                        {vacante.titulo}
                                    </h3>
                                    <p className="text-gray-600">
                                        {vacante.descripcion}
                                    </p>
                                    <div className="grid grid-cols-2 gap-4 text-gray-700 font-medium">
                                        <p>Empresa: {vacante.empresa}</p>
                                        <p>Último día: {vacante.ultimo_dia}</p>
                                        {/* <p>
                                            Categoría:{" "}
                                            {vacante.categoria?.categoria}
                                        </p>
                                        <p>
                                            Salario: {vacante.salario?.salario}
                                        </p> */}
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-2/3 bg-white shadow-lg rounded-xl p-6">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Candidatos ({vacante.candidatos.length})
                                </h3>

                                {vacante.candidatos.length === 0 ? (
                                    <p className="text-gray-500">
                                        Aún no hay candidatos para esta vacante.
                                    </p>
                                ) : (
                                    <div className="space-y-4">
                                        {vacante.candidatos.map((candidato) => (
                                            <div
                                                key={candidato.id}
                                                className="border rounded-lg p-4 flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4"
                                            >
                                                <div>
                                                    <p className="font-semibold text-gray-700">
                                                        {candidato.usuario.name}
                                                    </p>
                                                    <p className="text-gray-500 text-sm">
                                                        {
                                                            candidato.usuario
                                                                .email
                                                        }
                                                    </p>
                                                    <p className="text-gray-500 text-sm">
                                                        Postulado el:{" "}
                                                        {new Date(
                                                            candidato.created_at
                                                        ).toLocaleDateString()}{" "}
                                                        {new Date(
                                                            candidato.created_at
                                                        ).toLocaleTimeString()}
                                                    </p>
                                                </div>
                                                <div>
                                                    <SecondaryButton
                                                        onClick={() =>
                                                            toggleModal(candidato.cv)
                                                        }
                                                        className="text-blue-600 hover:underline font-medium"
                                                    >
                                                        Ver CV
                                                    </SecondaryButton>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
