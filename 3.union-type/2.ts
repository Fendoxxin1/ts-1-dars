function inputChecker(input: boolean | string) {
  if (typeof input == "boolean") {
    console.log(`"${input}"`);
  } else {
    console.log(input);
  }
}

inputChecker(true);
