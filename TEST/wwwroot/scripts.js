
var tetris = [];

// for (let index = 0; index < 36; index++) {
    //     tetris.push(index);
    // }
    
    function Play(){
        var main = document.getElementById('main');
        //var paragraph = document.getElementById('para');

        while (main.firstChild) {
            main.removeChild(main.firstChild)
        }
        
        // for (let index = 0; index < 4; index++) {
        //     var nextPiece;
        //     nextPiece = document.createElement('div');
        //     nextPiece.style.background = "white";
        //     paragraph.appendChild(nextPiece);
        // }

        for(let i = 0; i < 36; i++)
        {
            var rectangle;
            rectangle = document.createElement('div');
            var thisID = `div${i+1}`;
            rectangle.id = thisID;
            rectangle.style.backgroundColor = "white"
            

            rectangle.onclick = function clickedCell() {
               var cellIndex = document.getElementById(thisID);
               console.log(cellIndex);
                this.style.backgroundColor = "gray";
                                
            }
            main.appendChild(rectangle);
            tetris.push(rectangle);
        }
    }

    class Cell{
            constructor(div){
                this.occupied = false;
                this.div = div;
            }

    setStateOccupied() {
        this.style.backgroundColor = "gray";
    // if (rectangle.backgroundColor == "white") {
        //     rectangle.backgroundColor = "black"
        //     isOccupied();
    // } else {
    //     alert("You Lose");
    // }
    }
    setStateFree(){
        this.backgroundColor = "white";
    }
    isOccupied(){
        this.occupied = true;
    }
}

class BasePiece{
    putOnGrid(){}
}
            
class WhiteTopLeft extends BasePiece {
    
    putOnGrid(){
        var TL = [false, true, true, true];           
    }
}

class WhiteTopRight extends BasePiece {
    putOnGrid(){
        var TR = [true, false, true, true]; 
    }
}
                        
class WhiteBottomLeft extends BasePiece {
    putOnGrid(){
        var BL = [true, true, false, true]; 
    }
}
                            
class WhiteBottomRight extends BasePiece {
    putOnGrid(){
        var BR = [true, true, true, false]; 
    }
}
var aviablePieces = [];
aviablePieces.push(new WhiteTopLeft);
aviablePieces.push(new WhiteTopRight);
aviablePieces.push(new WhiteBottomLeft);
aviablePieces.push(new WhiteBottomRight);