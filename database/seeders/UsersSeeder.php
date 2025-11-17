<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // ---- Rol 1: Administradores (4) ----
        $admins = [
            ['name' => 'Admin Principal', 'email' => 'admin1@example.com', 'password' => Hash::make('Admin123!'), 'rol' => 2, 'email_verified_at' => now(),],
            ['name' => 'Soporte Admin', 'email' => 'admin2@example.com', 'password' => Hash::make('Admin123!'), 'rol' => 2, 'email_verified_at' => now(),],
            ['name' => 'Supervisor General', 'email' => 'admin3@example.com', 'password' => Hash::make('Admin123!'), 'rol' => 2, 'email_verified_at' => now(),],
            ['name' => 'Operador Admin', 'email' => 'admin4@example.com', 'password' => Hash::make('Admin123!'), 'rol' => 2, 'email_verified_at' => now(),],
        ];

        // ---- Rol 2: Usuarios normales (4) ----
        $users = [
            ['name' => 'Alejandro Martín Rueda López', 'email' => 'user1@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'María Fernanda Gutiérrez Silva', 'email' => 'user2@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Jorge Luis Herrera Camacho', 'email' => 'user3@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Silvia Natalia Robles Cordero', 'email' => 'user4@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Ricardo Alonso Pérez Ortega', 'email' => 'user5@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Daniela Sofía Márquez Pineda', 'email' => 'user6@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Luis Eduardo Salinas Prado', 'email' => 'user7@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Gabriela Estefanía Muñoz Rivas', 'email' => 'user8@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Armando Iván Cabrera Molina', 'email' => 'user9@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Valeria Noemí Sánchez Aranda', 'email' => 'user10@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],

            ['name' => 'Fernando Ismael Cortés Roldán', 'email' => 'user11@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Patricia Elena Varela Domínguez', 'email' => 'user12@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'César Augusto Medina Bravo', 'email' => 'user13@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Claudia Irene Jiménez Valdés', 'email' => 'user14@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Ernesto Paulo Villalba Ruiz', 'email' => 'user15@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Nathalie Carolina Rosales Pinto', 'email' => 'user16@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Héctor Manuel Vázquez Arroyo', 'email' => 'user17@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Sofía Daniela Contreras Beltrán', 'email' => 'user18@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Tomás Adrián Flores Lozano', 'email' => 'user19@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Alicia Monserrat Rojas Dueñas', 'email' => 'user20@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],

            ['name' => 'Francisco Javier Luna Revueltas', 'email' => 'user21@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Miranda Elisa Domínguez Acevedo', 'email' => 'user22@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Óscar Nicolás Álvarez Bustos', 'email' => 'user23@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Camila Antonella Serrano Lara', 'email' => 'user24@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Rodrigo Esteban Castañeda Ríos', 'email' => 'user25@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Elena Julieta Navarro Puga', 'email' => 'user26@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Mateo Alonso Barrios Tovar', 'email' => 'user27@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Paula Alejandra Carrasco Cedeño', 'email' => 'user28@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Diego Samuel Espinoza Rentería', 'email' => 'user29@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Lorena Isabel Paredes Aguado', 'email' => 'user30@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],

            ['name' => 'Julián Eduardo Zamora Baeza', 'email' => 'user31@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Rebeca Liliana Calderón Vides', 'email' => 'user32@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Bruno Sebastián Aguilar Pardo', 'email' => 'user33@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Marisol Emilia Armenta Jurado', 'email' => 'user34@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Gustavo Ángel Beltrán Chacón', 'email' => 'user35@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Renata Sofía Bustamante Oliva', 'email' => 'user36@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Emanuel Rodrigo Carvajal Peña', 'email' => 'user37@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Adriana Teresa Valdez Quintero', 'email' => 'user38@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Jonathan Eliseo Coronado Ríos', 'email' => 'user39@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Pilar Alejandra Esquivel Mena', 'email' => 'user40@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],

            ['name' => 'Marco Antonio Porras Medina', 'email' => 'user41@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Verónica Susana Alarcón Tapia', 'email' => 'user42@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Samuel Ignacio Galindo Rocha', 'email' => 'user43@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Andrea Luciana Lozano Perales', 'email' => 'user44@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Cristian Mateo Roldán Serrato', 'email' => 'user45@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Victoria Alejandra Torres Vergara', 'email' => 'user46@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Nicolás Fernando Ochoa Márquez', 'email' => 'user47@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Julieta Camila Pizarro Sáenz', 'email' => 'user48@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Emilio Andrés Cornejo Palma', 'email' => 'user49@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
            ['name' => 'Yolanda Mercedes Vázquez León', 'email' => 'user50@example.com', 'password' => Hash::make('User123!'), 'rol' => 1, 'email_verified_at' => now()],
        ];


        User::insert(array_merge($admins, $users));
    }
}
