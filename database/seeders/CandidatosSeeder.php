<?php

namespace Database\Seeders;

use App\Models\Candidato;
use App\Models\User;
use App\Models\Vacante;
use Illuminate\Database\Seeder;

class CandidatosSeeder extends Seeder
{
    public function run()
    {
        $usuarios = User::pluck('id')->toArray();

        // Tomar únicamente las últimas 9 vacantes
        $vacantes = Vacante::orderBy('created_at', 'desc')
            ->take(9)
            ->pluck('id')
            ->toArray();

        foreach ($vacantes as $vacanteId) {

            $cantidad = rand(3, 6);

            $usuariosSeleccionados = collect($usuarios)
                ->random($cantidad)
                ->values();

            foreach ($usuariosSeleccionados as $userId) {
                Candidato::create([
                    'user_id'    => $userId,
                    'vacante_id' => $vacanteId,
                    'cv'         => "cv_user_{$userId}.pdf",
                ]);
            }
        }
    }
}
