<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use App\Models\Salario;
use App\Models\Vacante;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $termino = $request->input('termino');
        $categoria = $request->input('categoria');
        $salario = $request->input('salario');

        $query = Vacante::with(['categoria', 'salario']);

        if ($termino) {
            $query->where('titulo', 'LIKE', "%{$termino}%")
                ->orWhere('descripcion', 'LIKE', "%{$termino}%");
        }

        if ($categoria) {
            $query->where('categoria_id', $categoria);
        }

        if ($salario) {
            $query->where('salario_id', $salario);
        }

        $vacantes = $query->latest()
            ->paginate(9)
            ->withQueryString();

        return Inertia::render('home/index', [
            'vacantes'   => $vacantes,
            'categorias' => Categoria::all(),
            'salarios'   => Salario::all(),
            'filtros'    => [
                'termino'   => $termino,
                'categoria' => $categoria,
                'salario'   => $salario,
            ]
        ]);
    }
}
