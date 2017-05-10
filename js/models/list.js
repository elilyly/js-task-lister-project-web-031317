// List Model
class List {

  constructor(title) {
    this.title = title;
    this.tasks = [];
    this.id = List.all.length
    List.all.push(this)
    }
  }

  List.all = []
