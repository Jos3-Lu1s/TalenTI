<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Salario;
use App\Models\Categoria;
use App\Models\Vacante;
use Illuminate\Support\Facades\Auth;

class VacanteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('vacantes/index', [
            'vacantes' => Vacante::where('user_id', Auth::user()->id)->paginate(3)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('vacantes/create', [
            'salarios' => Salario::all(),
            'categorias' => Categoria::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'titulo' => 'required',
            'salario' => 'required',
            'categoria' => 'required',
            'empresa' => 'required',
            'ultimo_dia' => 'required|date',
            'descripcion' => 'required',
            'imagen' => 'required|image|max:2048',
        ]);

        $request->file('imagen')->store('vacantes', 'public');
        $nombreImagen = $request->file('imagen')->hashName();

        Vacante::create([
            'titulo' => $request->titulo,
            'salario_id' => $request->salario,
            'categoria_id' => $request->categoria,
            'empresa' => $request->empresa,
            'ultimo_dia' => $request->ultimo_dia,
            'descripcion' => $request->descripcion,
            'imagen' => $nombreImagen,
            'user_id' => Auth::user()->id,
        ]);

        return redirect()->route('dashboard');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Vacante $vacante)
    {
        return Inertia::render('vacantes/edit', [
            'vacante' => $vacante,
            'salarios' => Salario::all(),
            'categorias' => Categoria::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Vacante $vacante)
    {
        $request->validate([
            'titulo' => 'required',
            'salario' => 'required',
            'categoria' => 'required',
            'empresa' => 'required',
            'ultimo_dia' => 'required|date',
            'descripcion' => 'required',
            // 'imagen' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:5120'
        ]);

        $vacante->update([
            'titulo' => $request->titulo,
            'salario' => $request->salario,
            'categoria' => $request->categoria,
            'empresa' => $request->empresa,
            'ultimo_dia' => $request->ultimo_dia,
            'descripcion' => $request->descripcion,
        ]);

        if ($request->hasFile('imagen')) {
            if ($vacante->imagen && file_exists(storage_path('app/public/vacantes/' . $vacante->imagen))) {
                unlink(storage_path('app/public/vacantes/' . $vacante->imagen));
            }

            $nombreImagen = $request->file('imagen')->hashName();
            $request->file('imagen')->store('vacantes', 'public');


            $vacante->imagen = $nombreImagen;
            $vacante->save();
        }

        // $nombreImagen = $request->file('imagen')->hashName();
        return redirect()->route('dashboard');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
