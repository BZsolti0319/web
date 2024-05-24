const fs = require('fs');  

fs.readFile('./docs/dal.txt', (err, data) => {
    if (err) {
      console.log(err);
    }  
    console.log(data.toString());
  });

  fs.writeFile('./docs/dal.txt', 'You can find me in the club, bottle full of bub Look mami I got the X if you into takin drugs Im into havin sex, I ain t into makin love So come give me a hug if you into gettin rubbed You can find me in the club, bottle full of bub Look, mami, I got the X if you into takin drugs Im into havin sex, I aint into makin love So come give me a hug if you into gettin rubbed', () => {
    console.log('file was written');
  });
  