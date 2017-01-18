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
      for (var i = 0; i < arrayOfCoverBands.length; i++) {
          var bandName = arrayOfCoverBands[i].covering;
          if(resultsObj.hasOwnProperty(bandName)) {
            resultsObj[bandName];
          }

      }
      /* if(coverBands[i].covering exists in resultsObj) {
            add one to count
    } else {

  }


      */
}


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
