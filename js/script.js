let happy = 0;
let energy = 0;
let petName = prompt("What is your pet's name?");
for (let index = 0; index < 6; index++) {
    
    let action = prompt("Would you like to feed, walk or pet?");
    
        if (action === "walk" && energy <= 0){
            alert("Not enough energy to enjoy a  walk." );
        } 

        if (action === "walk" && energy > 0){
            happy += 2;
            energy -= 1;
           }
        
        if (action === "feed"){
            energy += 2;
            
            }
        if (action === "pet"){
            happy += 1;   
         }

        /*console.log (petName);
        console.log ("Happiness= "+happy);
        console.log ("Energy= "+energy);*/
}

console.log (petName+" has " + happy + " happiness and " + energy + " energy."); 
