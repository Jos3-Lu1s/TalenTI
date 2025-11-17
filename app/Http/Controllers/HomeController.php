<?php

namespace App\Http\Controllers;

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
        $vacantes = Vacante::with(['categoria', 'salario'])
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('home/index', [
            'vacantes' => $vacantes,
        ]);
    }
}
