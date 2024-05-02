export enum TaskType {
  Common = "common",
  Reputable = "repeatable",
}

export enum TaskPriority {
  Low = "low",
  Medium = "medium",
  High = "high",
}

export interface RepeatableProps {
  interval: string;
  daysOfWeek?: number[];
}

export interface Task {
  id: string;
  title: string;
  description: string;
  type: TaskType;
  repeatableProps?: RepeatableProps;
  completed: boolean;
  priority: TaskPriority;
  dueDate?: Date;
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
  subtasks?: string[];
  owner: string;
}
