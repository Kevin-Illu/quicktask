export interface IbtnSettings {
  iconPath?: string
  text?: string
  action: () => void
  styles: Array<string>
}

export type TodoState =
  | 'To-do' //una tarea que aun no se ha comenzado.
  | 'Active' //una tarea que ya se ha iniciado pero aún no se ha completado
  | 'Waiting' // una tarea que se ha iniciado pero que se ha detenido temporalmente por alguna razón y se espera que se reanude en el futuro.
  | 'Completed' //una tarea que ya se ha finalizado con éxito
  | 'Canceled' //una tarea que se ha cancelado y ya no se realizará
  | 'Deferred' //una tarea que se ha pospuesto para más adelante
