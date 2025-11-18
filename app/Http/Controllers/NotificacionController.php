<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NotificacionController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $notification = auth()->user()->unreadNotifications;
        $readNotifications = auth()->user()->readNotifications;

        auth()->user()->unreadNotifications->markAsRead();

        return Inertia::render(
            'notificaciones/index',
            [
                'notificaciones' => $notification,
                'readNotifications' => $readNotifications,
            ]
        );
    }
}
