import { Component } from '@angular/core';
import { Tarefa } from 'src/app/interfaces/tarefa';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.scss']
})
export class ListarTarefasComponent {
  tarefas: Tarefa[] = [ 
    { descricao: 'Tarefa 1', concluida: false },
    { descricao: 'Tarefa 2', concluida: true },
    { descricao: 'Tarefa 3', concluida: false },
    { descricao: 'Tarefa 4', concluida: true },
    { descricao: 'Tarefa 5', concluida: false },
    { descricao: 'Tarefa 6', concluida: true },
    { descricao: 'Tarefa 7', concluida: true },
    { descricao: 'Tarefa 8', concluida: false },
    { descricao: 'Tarefa 9', concluida: true },
    { descricao: 'Tarefa 10', concluida: false }
  ];

  concluirTarefa(tarefa: any) {
    tarefa.concluida = !tarefa.concluida;
  }
}
