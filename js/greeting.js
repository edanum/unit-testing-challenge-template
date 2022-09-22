export function greet(name) {
  if (name == "Dalia") {
    return "Howdy Boss!";
  }
  if (name == "Ernst" || name == "Marc" || name == "Martin") {
    return "Howdy Coach!";
  }
  else {
    return `Howdy ${name}`;
  }
}
