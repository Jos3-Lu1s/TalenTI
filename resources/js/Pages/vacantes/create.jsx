import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Dashboard() {
    const { data, setData, post, processing, errors, reset } = useForm({
        titulo: "",
        salario: "",
        categoria: "",
        empresa: "",
        ultimo_dia: "",
        descripcion: "",
        imagen: "",
    });
    const submit = () => {};

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Crear vacante
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-6xl mx-auto px-6">
                    <form
                        onSubmit={submit}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        noValidate
                    >
                        <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
                            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">
                                Información General
                            </h2>

                            <div>
                                <InputLabel value="Título de la vacante" />
                                <TextInput
                                    className="mt-1 w-full"
                                    placeholder="Ej: Diseñador UI/UX"
                                    value={data.titulo}
                                    onChange={(e) =>
                                        setData("titulo", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.titulo}
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                <InputLabel value="Empresa" />
                                <TextInput
                                    className="mt-1 w-full"
                                    placeholder="Nombre de la empresa"
                                    value={data.empresa}
                                    onChange={(e) =>
                                        setData("empresa", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.empresa}
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                <InputLabel value="Último día" />
                                <TextInput
                                    type="date"
                                    className="mt-1 w-full"
                                    value={data.ultimo_dia}
                                    onChange={(e) =>
                                        setData("ultimo_dia", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.ultimo_dia}
                                    className="mt-2"
                                />
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
                            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">
                                Detalles del puesto
                            </h2>

                            <div>
                                <InputLabel value="Salario" />
                                <select
                                    className="w-full mt-1 rounded-md border-gray-300"
                                    value={data.salario}
                                    onChange={(e) =>
                                        setData("salario", e.target.value)
                                    }
                                >
                                    <option value="">-- Seleccione --</option>
                                    <option value="1000-2000">
                                        $1,000 - $2,000
                                    </option>
                                    <option value="2000-3000">
                                        $2,000 - $3,000
                                    </option>
                                </select>
                                <InputError
                                    message={errors.salario}
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                <InputLabel value="Categoría" />
                                <select
                                    className="w-full mt-1 rounded-md border-gray-300"
                                    value={data.categoria}
                                    onChange={(e) =>
                                        setData("categoria", e.target.value)
                                    }
                                >
                                    <option value="">-- Seleccione --</option>
                                    <option value="TI">TI</option>
                                    <option value="Marketing">Marketing</option>
                                </select>
                                <InputError
                                    message={errors.categoria}
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                <InputLabel value="Imagen" />
                                <input
                                    type="file"
                                    className="w-full mt-1"
                                    onChange={(e) =>
                                        setData("imagen", e.target.files[0])
                                    }
                                />
                                <InputError
                                    message={errors.imagen}
                                    className="mt-2"
                                />
                            </div>
                        </div>

                        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-md">
                            <InputLabel value="Descripción" />
                            <textarea
                                className="mt-1 w-full h-40 border-gray-300 rounded-md"
                                placeholder="Describe el puesto..."
                                value={data.descripcion}
                                onChange={(e) =>
                                    setData("descripcion", e.target.value)
                                }
                            ></textarea>
                            <InputError
                                message={errors.descripcion}
                                className="mt-2"
                            />
                        </div>

                        <div className="md:col-span-2 flex justify-end">
                            <PrimaryButton disabled={processing}>
                                Guardar Vacante
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
