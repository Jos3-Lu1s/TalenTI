import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Index({ vacantes, categorias, salarios, filtros }) {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <div className="relative bg-gray-50 py-20 lg:py-32 overflow-hidden">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
                            Encuentra tu trabajo en Tech de forma remota
                        </span>
                    </h1>

                    <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                        Explora vacantes en empresas internacionales para
                        Frontend, Backend, DevOps, Mobile y mucho más. ¡Tu
                        oportunidad remota ideal te espera!
                    </p>

                    <div className="mt-8 flex justify-center gap-4 flex-wrap">
                        <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-medium text-sm">
                            Frontend
                        </span>
                        <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium text-sm">
                            Backend
                        </span>
                        <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium text-sm">
                            DevOps
                        </span>
                        <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full font-medium text-sm">
                            Mobile
                        </span>
                    </div>
                </div>
            </div>

            <div className="bg-white py-6">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 shadow-sm">
                        <form
                            method="GET"
                            action={route("welcome")}
                            className="flex flex-col md:flex-row gap-4 items-center"
                        >
                            <div className="w-full md:w-1/3">
                                <TextInput
                                    type="text"
                                    name="termino"
                                    placeholder="Buscar vacantes..."
                                    className="w-full px-3 py-2"
                                    defaultValue={filtros.termino || ""}
                                />
                            </div>

                            <div className="w-full md:w-1/3">
                                <select
                                    name="categoria"
                                    defaultValue={filtros.categoria || ""}
                                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                >
                                    <option value="">Categoría</option>
                                    {categorias.map((categoria) => (
                                        <option
                                            key={categoria.id}
                                            value={categoria.id}
                                        >
                                            {categoria.categoria}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="w-full md:w-1/3">
                                <select
                                    name="salario"
                                    defaultValue={filtros.salario || ""}
                                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                >
                                    <option value="">Salario</option>
                                    {salarios.map((salario) => (
                                        <option
                                            key={salario.id}
                                            value={salario.id}
                                        >
                                            {salario.salario}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <SecondaryButton type="submit" className="py-3">
                                Buscar
                            </SecondaryButton>
                        </form>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:mx-28">
                {vacantes.data.map((vacante) => (
                    <Link
                        key={vacante.id}
                        href={`/vacantes/${vacante.id}`}
                        className="block bg-white shadow-md rounded-lg p-5 border
                 hover:shadow-xl hover:border-blue-500 transition group"
                    >
                        <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
                            {vacante.titulo}
                        </h2>

                        <p className="text-gray-600 mt-2 line-clamp-3">
                            {vacante.descripcion}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                                💼 {vacante.categoria.categoria}
                            </span>

                            <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                                💰 {vacante.salario.salario}
                            </span>

                            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                                🏢 {vacante.empresa}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
            {vacantes.links && (
                <div className="mt-8 flex justify-center gap-2">
                    {vacantes.links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.url || "#"}
                            className={`px-3 py-1 border rounded ${
                                link.active
                                    ? "bg-indigo-500 text-white"
                                    : "bg-white text-gray-700"
                            }`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ))}
                </div>
            )}
        </AuthenticatedLayout>
    );
}
