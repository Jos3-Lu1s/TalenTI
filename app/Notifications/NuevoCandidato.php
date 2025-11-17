<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class NuevoCandidato extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public $id_vacante;
    public $nombre_vacante;
    public $usuario_id;
    public function __construct($id_vacante, $nombre_vacante, $usuario_id)
    {

        $this->id_vacante = $id_vacante;
        $this->nombre_vacante = $nombre_vacante;
        $this->usuario_id = $usuario_id;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail', 'database'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('Nuevo candidato en tu vacante')
            ->greeting('¡Hola ' . $notifiable->name . '!')
            ->line("Se ha registrado un nuevo candidato para tu vacante: **{$this->nombre_vacante}**.")
            ->line('Puedes revisar el perfil del candidato y su CV haciendo clic en el botón de abajo.')
            ->action('Ver candidato', url('/notificaciones/' . $this->id_vacante))
            ->line('Gracias por usar TalenTI, ¡tu plataforma de reclutamiento confiable!');
    }


    //almacenar en la base de datos
    public function toDatabase(object $notifiable)
    {
        return [
            'id_vacante' => $this->id_vacante,
            'nombre_vacante' => $this->nombre_vacante,
            'usuario_id' => $this->usuario_id,
        ];
    }
}
