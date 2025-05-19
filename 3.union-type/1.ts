function formatlash(narx: string | number) {
  if (typeof narx == "string") {
    narx = parseInt(narx);
  }
  console.log(narx);
}

formatlash("5")