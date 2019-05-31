//javascript document
//
//creating a array to hold the potential answers
var wins = 0;
    var losses = 0;
    var gameDiv = document.getElementById("psychicGame");
    var game = ["j","y","o","t","i","a","n","i","b","n"];
    var guessleft= 10;
    var choice= Math.floor(Math.random()*game.length);
   var answer=game[choice];
   //var mylength=answer.length;
    var lettersGuessed=[];
   var text;
   var ltext;
   var wtext;
   var guestleft;

  
           
            document.onkeyup = function(event)
                
                { 
                    debugger;
                   
                   // text="";ltext="";wtext="";var guestleft="";
                   // document.getElementById('Guess').addEventListener(onkeyup,reset);
                    console.log("Answer----------"+answer);
                   if(lettersGuessed.indexOf(event.key)===-1);
                         lettersGuessed.push(event.key);
                     text = document.createTextNode(event.key);
                     //text=text+',';
                     document.getElementById('yourGuesssofar').appendChild(text);
                     if(event.key===answer)
                        {
                            wins++;
                            wtext = document.createTextNode(wins);
                            document.getElementById('wins').appendChild(wtext);
                            guessleft--;
                             guestleft= document.createTextNode(guessleft);
                            
                            document.getElementById("guessleft").appendChild(guestleft);
                        }
                     
                    else 
                        {   guessleft--;
                             console.log("You lose");
                              losses++;
                             ltext = document.createTextNode(losses);
                            document.getElementById('looses').appendChild(ltext);
                             guestleft= document.createTextNode(guessleft);
                            document.getElementById("guessleft").appendChild(guestleft);                     
                            choice= Math.floor(Math.random()*game.length);
                            answer=game[choice];
                            //lettersGuessed = [];
                            guestleft="";
                        }
                        if(guessleft===0)
                        {
                           alert("You finished your turns..!");
                           return;

                        }
                        else
                       {
                           console.log("Press letter to guess");
                           
                    
                       }         
                    
                    
                    
                }
                 function restSel() {
                    
                    document.getElementById("wins").appendChild(wins);
                    document.getElementById("looses").textContent.innerHTML="";
                    document.getElementById("guessleft").textContent.innerHTML="";
                    document.getElementById("yourGuesssofar").textContent.innerHTML="";
                  };
            
            
            
