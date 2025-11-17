import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Dashboard({ vacante, salarios, categorias }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        titulo: "",
        salario: "",
        categoria: "",
        empresa: "",
        ultimo_dia: "",
        descripcion: "",
        imagen: "",
    });

    useEffect(() => {
        if (vacante) {
            setData({
                titulo: vacante.titulo,
                salario: vacante.salario_id,
                categoria: vacante.categoria_id,
                empresa: vacante.empresa,
                ultimo_dia: vacante.ultimo_dia,
                descripcion: vacante.descripcion,
                imagen: vacante.imagen,
            });
        }
    }, [vacante]);

    const [fileName, setFileName] = useState("");
    const [imagePreview, setImagePreview] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
            if (!allowedTypes.includes(file.type)) {
                alert("Solo se permiten imágenes de tipo JPEG, PNG o GIF.");
                return;
            }
            if (file.size > 5 * 1024 * 1024) {
                alert("El tamaño de la imagen debe ser menor a 5MB.");
                return;
            }

            setData("imagen", file);
            setFileName(file.name);

            const reader = new FileReader();
            reader.onloadend = () => setImagePreview(reader.result);
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("vacantes_update", vacante.id), {
            onFinish: () => {
                console.log("Listo");
            },
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Vacantes de Trabajo en TI
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white sm:rounded-lg">
                        <form
                            onSubmit={submit}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:m-10"
                            noValidate
                        >
                            <div className="bg-white p-6 rounded-xl space-y-4">
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
                                            setData(
                                                "ultimo_dia",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.ultimo_dia}
                                        className="mt-2"
                                    />
                                </div>

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
                                        <option value="">
                                            -- Seleccione --
                                        </option>

                                        {salarios.map((salario) => (
                                            <option
                                                key={salario.id}
                                                value={salario.id}
                                            >
                                                {salario.salario}
                                            </option>
                                        ))}
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
                                        <option value="">
                                            -- Seleccione --
                                        </option>

                                        {categorias.map((categoria) => (
                                            <option
                                                key={categoria.id}
                                                value={categoria.id}
                                            >
                                                {categoria.categoria}
                                            </option>
                                        ))}
                                    </select>
                                    <InputError
                                        message={errors.categoria}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel value="Descripción" />
                                    <textarea
                                        className="mt-1 w-full h-40 border-gray-300 rounded-md"
                                        placeholder="Describe el puesto..."
                                        value={data.descripcion}
                                        onChange={(e) =>
                                            setData(
                                                "descripcion",
                                                e.target.value
                                            )
                                        }
                                    ></textarea>
                                    <InputError
                                        message={errors.descripcion}
                                        className="mt-2"
                                    />
                                </div>
                                <PrimaryButton
                                    disabled={processing}
                                    className="w-full"
                                >
                                    Editar Vacante
                                </PrimaryButton>
                            </div>

                            <div className="bg-white p-6 rounded-xl space-y-4">
                                <div>
                                    <InputLabel value="Imagen" />
                                    <div className="mt-1 space-y-2">
                                        <label
                                            htmlFor="imagen"
                                            className="cursor-pointer flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition"
                                        >
                                            📁 Subir imagen
                                        </label>

                                        <input
                                            id="imagen"
                                            type="file"
                                            className="hidden"
                                            onChange={handleFileChange}
                                        />

                                        {fileName && (
                                            <p className="text-gray-600 text-sm">
                                                Archivo seleccionado:{" "}
                                                <span className="font-medium">
                                                    {fileName}
                                                </span>
                                            </p>
                                        )}
                                    </div>

                                    <InputError
                                        message={errors.imagen}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    {imagePreview ? (
                                        <img
                                            src={imagePreview}
                                            alt="Vista previa de la imagen"
                                            className="object-cover rounded-lg mt-4"
                                        />
                                    ) : (
                                        <div>
                                            {vacante && vacante.imagen ? (
                                                <img
                                                    src={`/storage/vacantes/${vacante.imagen}`}
                                                    alt="Imagen de vacante"
                                                    className="w-full h-auto object-cover rounded-lg"
                                                />
                                            ) : (
                                                <p className="text-gray-600 text-sm">
                                                    No hay imagen disponible
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
