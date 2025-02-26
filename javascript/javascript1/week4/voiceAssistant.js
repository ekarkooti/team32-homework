let persons = [];
let currentPerson;

function getReply(command) {
  command = command.toLowerCase();
  const commandSplit = command.split(" ");
  const pattern = /what is (\d+) ([+\-*/]) (\d+)/;

  if (command.startsWith("hello my name is")) {
    const name = commandSplit[commandSplit.length - 1];
    if (persons.length === 0 || !persons.find((p) => p.name === name)) {
      currentPerson = { name: name, todo: [] };
      persons.push(currentPerson);
      return `nice to meet you ${currentPerson.name}`;
    } else {
      currentPerson = persons[persons.findIndex((p) => p.name === name)];
      return `nice to see you again ${currentPerson.name}!`;
    }
  } else if (command === "what is my name?") {
    if (currentPerson.name) {
      return `your name is ${currentPerson.name}`;
    } else {
      return "I don't know your name yet.";
    }
  } else if (command.startsWith("add") && command.endsWith("to my todo")) {
    let todo = commandSplit.slice(1, -3).join(" ");
    currentPerson.todo.push(todo);
    return `${todo} added to your todo`;
  } else if (command === "what is on my todo?") {
    return currentPerson.todo;
  } else if (command.startsWith("remove") && command.endsWith("from my todo")) {
    let toRemove = commandSplit.slice(1, -3).join(" ");
    console.log(toRemove);
    const index = currentPerson.todo.findIndex((item) => item === toRemove);
    console.log(index);
    currentPerson.todo.splice(index, 1);
    return `"Removed ${toRemove} from your todo"`;
  } else if (command === "what day is it today?") {
    const today = new Date();
    const day = today.getDate();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[today.getMonth()];
    const year = today.getFullYear();

    return `${day}. of ${month} ${year}`;
  } else if (command.match(pattern)) {
    return eval(commandSplit.slice(2).join(" "));
  } else if (command.startsWith("set a timer for")) {
    const timeInMinutes = commandSplit.slice(4, -1).join("");
    const timeInMiliseconds = timeInMinutes * 60 * 1000;
    setTimeout(() => {
      console.log("Timer done!");
    }, timeInMiliseconds);

    return `timer set for ${timeInMinutes} minutes`;
  } else if (command === "goodbye!") {
    return `goodbye ${currentPerson.name}`;
  }
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("what is 3 + 3"));
console.log(getReply("what is 4 * 12"));
console.log(getReply("Set a timer for 0.1 minutes"));
console.log(getReply("goodbye!"));
