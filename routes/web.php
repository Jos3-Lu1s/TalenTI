<?php

use App\Http\Controllers\CandidatoController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\NotificacionController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\VacanteController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', HomeController::class)->name('welcome');

Route::get('/dashboard', [VacanteController::class, 'index'])->middleware(['auth', 'verified','rol.reclutador'])->name('dashboard');
Route::get('/vacantes/create', [VacanteController::class, 'create'])->middleware(['auth', 'verified'])->name('vacantes_create');
Route::post('/vacantes', [VacanteController::class, 'store'])->middleware(['auth', 'verified'])->name('vacantes_store');
Route::get('/vacantes/{vacante}/edit', [VacanteController::class, 'edit'])->middleware(['auth', 'verified'])->name('vacantes_edit');
Route::post('/vacantes/{vacante}', [VacanteController::class, 'update'])->middleware(['auth', 'verified'])->name('vacantes_update');
Route::delete('/vacantes/{vacante}', [VacanteController::class, 'destroy'])->middleware(['auth', 'verified'])->name('vacantes_delete');
Route::get('/vacantes/{vacante}', [VacanteController::class, 'show'])->name('vacantes_show');

Route::post('/candidatos', [CandidatoController::class, 'store'])->name('candidatos_store');
Route::get('/candidatos/{vacante}', [CandidatoController::class, 'index'])->middleware(['auth', 'verified'])->name('candidatos_index');

Route::get('/notificaciones', NotificacionController::class)->name('notificacion')->middleware(['auth','verified','rol.reclutador']);;


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
