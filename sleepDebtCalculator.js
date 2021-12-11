
// Get sleep hours for each day
const getSleepHours = day => {
switch (day){
  case 'monday':
    return 8;
    break;
  case 'tuesday':
    return 7;
    break;
  case 'wednesday':
    return 5;
    break;
  case 'thursday':
    return 5;
    break;
  case 'friday':
    return 5;
    break;
  case 'saturday':
    return 5;
    break;
  case 'sunday':
    return 5;
    break;

  default:
  return 'Error!';
}
}; 

// 1. Getting my actual sleep hours
const getActualSleepHours = () =>
  getSleepHours('monday') + 
  getSleepHours('tuesday') + 
  getSleepHours('wednesday') + 
  getSleepHours('thursday') + 
  getSleepHours('friday') + 
  getSleepHours('saturday') + 
  getSleepHours('sunday');
  // console.log(getSleepHours('monday')); // my individual sleep hours
  console.log('I got '+ getActualSleepHours() + ' hours of sleep.');   // sum of all the hours of sleep throughout week

// 2. Get the ideal sleep hours that is prefered
const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};
console.log('Ideal sleep ' + getIdealSleepHours() + (' hours I want to achieve every week.')); 

// 3. Calculate the sleep debt.
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours){
    console.log('You got perfect amount of sleep! ');
  }
  else if (actualSleepHours > idealSleepHours){
    console.log('You got more sleep than needed!')
  }
  else if(actualSleepHours < idealSleepHours){
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep this week. Get some rest.');
  }
  else {
    console.log('oops!');
  }

}

calculateSleepDebt(); //runs the code











