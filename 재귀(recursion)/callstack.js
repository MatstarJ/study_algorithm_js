
function takeShower() {
  return 'showering';
}

function eatBreakfast() {
  let meal = cookFood();
  return `Eating ${meal}`
}

function cookFood() {
  let items = ['Oatmeal', 'Eggs', 'Protein Shake']
  return items[Math.floor(Math.random() * items.len)];
}

function wakeUp() {
  takeShower();
  eatBreakfast();
  console.log('ok ready to go');
}



wakeUp();