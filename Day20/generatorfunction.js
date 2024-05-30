function* genfunc() {
    let index = 0;
    while (index<2) {
      yield index++;
    }
  }
  
  const gen = genfunc();
  
  console.log(gen.next().value); 
  console.log(gen.next().value); 
  console.log(gen.next().value); 
