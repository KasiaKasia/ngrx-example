
export interface AppStateTask {
  taskId: number;
  taskName: string;
}

export interface AppStateNote {
  readonly note: Note[];
}

export interface Note {
  title: string;
  value: string;
}