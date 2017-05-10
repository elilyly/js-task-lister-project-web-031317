// Task Model

class Task {

  constructor(description, priority, list) {

    this.description = description;
    this.priority = priority;
    this.list = list
    this.id = Task.all.length
    list.tasks.push(this)
    Task.all.push(this)
  }
}

Task.all = []
