import { Pipe, PipeTransform } from '@angular/core';
import {Task} from 'src/app/shared/models/task';

@Pipe({
  name: 'taskFilter',
  pure: false
})
export class TaskFilterPipe implements PipeTransform {

  transform(tasks: Task[], status: boolean): Task[] {

    const filteredTasks: Task[] = [];

    // -- Je retourne un tableau de tâches filtré par rapport au "status".
    for(let i = tasks.length; i--;){
      console.log(tasks[i]);

      // -- Je vérifie si le statut de l'une de mes tâches correspond au "status" que je recherche
      if(tasks[i].status === status){
        filteredTasks.push(tasks[i]);
      }
    }

     return filteredTasks;
  }

}
