import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { showToast } from "@/utils/toast";

export default function Dashboard({ vacante }) {
    const user = usePage().props.auth.user;

    const [fileName, setFileName] = useState("");

    const { data, setData, post, processing, errors, reset } = useForm({
        cv: null,
        vacante_id: vacante?.id ?? null,
    });

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setData("cv", file);
            setFileName(file.name);
        }
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("candidatos_store"), {
            onSuccess: () => {
                reset("cv");
                setFileName("");
                showToast(
                    "¡Postulación exitosa! - Notificación enviada al reclutador.",
                );
            },
        });
    };

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
                            <div className="flex flex-col justify-between">
                                <div className="space-y-4 sm:space-y-6 px-4 sm:px-6 lg:px-8">
                                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
                                        {vacante.titulo}
                                    </h2>

                                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                                        {vacante.descripcion}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                        <div className="sm:items-center">
                                            <p className="font-semibold text-gray-700">
                                                Empresa:
                                            </p>
                                            <p className="ml-0 sm:ml-2 text-gray-600">
                                                {vacante.empresa}
                                            </p>
                                        </div>

                                        <div className="sm:items-center">
                                            <p className="font-semibold text-gray-700">
                                                Último Día para Aplicar:
                                            </p>
                                            <p className="ml-0 sm:ml-2 text-gray-600">
                                                {vacante.ultimo_dia}
                                            </p>
                                        </div>

                                        <div className="sm:items-center">
                                            <p className="font-semibold text-gray-700">
                                                Categoría:
                                            </p>
                                            <p className="ml-0 sm:ml-2 text-gray-600">
                                                {vacante.categoria.categoria}
                                            </p>
                                        </div>

                                        <div className="sm:items-center">
                                            <p className="font-semibold text-gray-700">
                                                Salario:
                                            </p>
                                            <p className="ml-0 sm:ml-2 text-gray-600">
                                                {vacante.salario.salario}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {user && user.rol === 1 && (
                                    <form
                                        noValidate
                                        onSubmit={submit}
                                        className="bg-white p-6 rounded-lg shadow-lg space-y-4"
                                    >
                                        <h2 className="text-2xl font-semibold text-center text-gray-800">
                                            Sube tu CV
                                        </h2>

                                        <div className="flex justify-center items-center bg-gray-100 p-4 rounded-md border-2 border-dashed border-gray-300 hover:border-blue-500 transition">
                                            <InputLabel
                                                htmlFor="cv"
                                                className="cursor-pointer flex items-center gap-2 text-lg text-gray-600 hover:text-blue-600"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-6 h-6"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="2"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M12 4v16m8-8H4"
                                                    />
                                                </svg>
                                                <span className="font-medium">
                                                    Haz clic para subir
                                                </span>
                                            </InputLabel>

                                            <input
                                                id="cv"
                                                name="cv"
                                                type="file"
                                                className="hidden"
                                                accept="application/pdf"
                                                onChange={handleFileChange}
                                            />
                                        </div>

                                        {fileName && (
                                            <div className="text-sm text-gray-700 mt-2">
                                                <strong>
                                                    Archivo seleccionado:
                                                </strong>{" "}
                                                {fileName}
                                            </div>
                                        )}

                                        {!fileName && (
                                            <div className="text-sm text-gray-500 mt-2">
                                                Aún no has cargado un CV. Por
                                                favor, haz clic en el área de
                                                arriba para subirlo.
                                            </div>
                                        )}
                                        <InputError
                                            message={errors.cv}
                                            className="mt-2"
                                        />
                                        <div>
                                            <PrimaryButton className="w-full px-6 py-3">
                                                Postúlate Ahora
                                            </PrimaryButton>
                                        </div>
                                    </form>
                                )}
                                {!user && (
                                    <div className="mt-6 text-center">
                                        <p className="text-gray-700 text-lg">
                                            ¿Deseas postularte a esta vacante?{" "}
                                            <Link
                                                href={route("login")}
                                                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                                            >
                                                Inicia sesión
                                            </Link>{" "}
                                            o{" "}
                                            <Link
                                                href={route("register")}
                                                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                                            >
                                                Regístrate
                                            </Link>
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div className="flex justify-center items-center">
                                <img
                                    src={`/storage/vacantes/${vacante.imagen}`}
                                    alt="Imagen de vacante"
                                    className="w-full h-auto rounded-md shadow-sm max-w-md"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src =
                                            "/storage/img/default.png";
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
