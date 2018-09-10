import {Component} from '@angular/core';
import {Task} from 'src/app/shared/models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // -- Notre tableau de tâches
  tasks: Task[] = [
    {
      id: 1,
      name: 'Faire la vaisselle',
      status: false
    },
    {
      id: 2,
      name: 'Sortir les poubelles',
      status: false
    },
    {
      id: 3,
      name: 'Sortir ma fiancée',
      status: true
    },
    {
      id: 4,
      name: 'Corriger les évaluations du PoleS',
      status: false
    },
  ];

  // -- L'utilisateur viens de terminer une tâche. @param {Task} task.
  taskIsDone(task: Task) {
    task.status = true;
  }


  // -- Lorsque l'utilisateur crée une tâche dans "add-task",
  // celle ci est récupérée par "app-component" puis ajoutée dans le tableau de tâches.
  // @param task
  newTask(task: Task) {
    this.tasks.push(task);
  }

  // -- L'utilisateur viens de supprimer une tâche. On la retire du tableau. @param task
  removeTask(task: Task) {
    this.tasks.splice(this.tasks.indexOf(task),1);
  }
}
