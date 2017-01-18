var coverBands = [
    {
        bandName: 'Living Putsteaks',
        contact: 'dave@livingputsteaks.com',
        covering: 'Yardbirds'
    },
    {
        bandName: 'Petty Theft',
        contact: 'steve@pettytheft.com ',
        covering: 'Tompetty'
    },
    {
        bandName: 'Metalachi',
        contact: 'arriche@metalachi.com',
        covering: 'Metalica'
    },
    {
        bandName: 'Led Zeppagain',
        contact: 'Mike@zeppagain.com',
        covering: 'Journey'
    },
    {
        bandName: 'Heartbreakers',
        contact: 'breakers@breakers.com',
        covering: 'Tompetty'
    },
    {
        bandName: 'Arnel',
        contact: 'Arnel@littlepinodude.com',
        covering: 'Journey'
    },
    {
        bandName: 'Distance',
        contact: 'gothedistance@distance.com',
        covering: 'Journey'
    }
]

function countCoverBands(arrayOfCoverBands) { // function with array for parameter
      var resultsObj = {}; //Create an object to contain results
      for (var i = 0; i < arrayOfCoverBands.length; i++) { //for loop - loops through object / array, checks length, adds to it.
          var bandName = arrayOfCoverBands[i].covering; //adds the item check result to a variable

          if(resultsObj.hasOwnProperty(bandName)) { //if the value of the key checked is true
            resultsObj[bandName]++;//add another to it
          } else {
            resultsObj[bandName] = 1; // if it doesn't exist, add it to the results.
          }
      }
      return resultsObj;
}

countCoverBands(coverBands);


var exampleBand {
    bandName: 'Distance',
    contact: 'gothedistance@distance.com',
    covering: 'Journey'
}

var expectedResult = {
    yardbirds: 1,
    Tompetty: 2,
    Metalica: 1,
    Journey: 3
}
