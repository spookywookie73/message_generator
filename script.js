randomWords1 = ['neighbourhood', 'town', 'city', 'local supermaket'];
randomWords2 = ['giant ants', 'zombies', 'aliens', 'inflatable ponies'];
randomWords3 = ['the airforce', 'heavy artillery', 'emergency services', 'cannon fodder'];
randomWords4 = ['very high', 'good', 'not so good', 'slim to none'];

const messageGenerator = () => {
  const randomNumber = () => Math.floor(Math.random() * 4);
  
  console.log(`\n!Urgent message!, Your ${randomWords1[randomNumber()]} is under a red alert.\n`);
  
  console.log(`Satellites have detected ${randomWords2[randomNumber()]} preparing to attack.\n`);
  
  const chosenNum = randomNumber();
  if (chosenNum != 3) {
    console.log(`You have been randomly chosen to help ${randomWords3[chosenNum]}.\n`);
  } else {
    console.log(`You have been chosen to be ${randomWords3[chosenNum]}.\n`)
  };

  console.log(`The odds of your success are ${randomWords4[randomNumber()]}. Good Luck.\n`);
};

messageGenerator()