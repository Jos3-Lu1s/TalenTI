<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class SalarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('salarios')->insert([
            'salario' => '$8,000 - $12,000',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('salarios')->insert([
            'salario' => '$12,000 - $18,000',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('salarios')->insert([
            'salario' => '$18,000 - $25,000',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('salarios')->insert([
            'salario' => '$25,000 - $35,000',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('salarios')->insert([
            'salario' => '$35,000 - $50,000',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('salarios')->insert([
            'salario' => '$50,000 - $70,000',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('salarios')->insert([
            'salario' => '$70,000 - $100,000',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('salarios')->insert([
            'salario' => '$100,000 - $150,000',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('salarios')->insert([
            'salario' => '+ $150,000',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
