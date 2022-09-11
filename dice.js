const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());
//app.use(express.cors());

let currentDice = 0;


app.get("/test", (req, res) => {

    res.json({
        message:"I'm here"
    })
});


app.post("/rolldice", (req, res) => {

    const sixSidedDice = ["1", "2", "3", "4", "5", "6"];
    const fourSidedDice = ["1", "2", "3", "4"];
    const tenSidedDice = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const twelveSidedDice = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    const twentySidedDice = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];

    let numSixSidedDice = req.body.numSixSidedDice;
    let numFourSidedDice = req.body.numFourSidedDice;
    let numTenSidedDice = req.body.numTenSidedDice;
    let numTwelveSidedDice = req.body.numTwelveSidedDice;
    let numTwentySidedDice = req.body.numTwentySidedDice;

    console.log("4 Sided: " + numFourSidedDice + "\n")
    console.log("6 Sided: " + numSixSidedDice + "\n")
    console.log("10 Sided: " + numTenSidedDice + "\n")
    console.log("12 Sided: " + numTwelveSidedDice + "\n")
    console.log("20 Sided: " + numTwentySidedDice + "\n")


    var fourArray = [];
    let sixArray = [];
    let tenArray = [];
    let twelveArray = [];
    let twentyArray = [];
    var tempDiceHolderfour = 0;
    var tempDiceHoldersix = 0;
    var tempDiceHolderten = 0;
    var tempDiceHoldertwelve = 0;
    var tempDiceHoldertwenty = 0;

    for (let i = 0; i < numFourSidedDice; i++ )
    {
        
        tempDiceHolderfour = _.sample(fourSidedDice);
        fourArray[i] = tempDiceHolderfour;
    }
    for (let i = 0; i < numSixSidedDice; i++ )
    {
        
        tempDiceHoldersix = _.sample(sixSidedDice);
        sixArray[i] = tempDiceHoldersix;
    }
    for (let i = 0; i < numTenSidedDice; i++ )
    {
        
        tempDiceHolderten = _.sample(tenSidedDice);
        tenArray[i] = tempDiceHolderten;
    }
    for (let i = 0; i < numTwelveSidedDice; i++ )
    {
        
        tempDiceHoldertwelve = _.sample(twelveSidedDice);
        twelveArray[i] = tempDiceHoldertwelve;

    }
    for (let i = 0; i < numTwentySidedDice; i++ )
    {    
        tempDiceHoldertwenty = _.sample(twentySidedDice);
        twentyArray[i] = tempDiceHoldertwenty;
    
    }

    console.log("Four Sided Dice Rolls: " + fourArray);
    console.log("Six Sided Dice Rolls: " + sixArray);
    console.log("Ten Sided Dice Rolls: " + tenArray);
    console.log("Twelve Sided Dice Rolls: " + twelveArray);
    console.log("Twenty Sided Dice Rolls: " + twentyArray);


    let diceArray = [];

    currentDice = (numSixSidedDice + numFourSidedDice + numTenSidedDice + numTwelveSidedDice + numTwentySidedDice)


  

    for(let i = 1; i <= currentDice; i++)
    {
        console.log(i);
    }
    
    res.json({

        fourSidedDice: fourArray,
        sixSidedDice: sixArray,
        tenSidedDice: tenArray,
        twelveSidedDice: twelveArray,
        twentySidedDice: twentyArray



    });
});

/*app.get("/comments/:id", async (req, res) => {
    const id = req.params.id;
    let content;

    try {
        content = await fs.readFile(`data/comments/${id}.txt`, "utf-8");
    }   catch (err) {
        return res.sendStatus(404);
    }
    
    res.json({
        content: content
    });

});

app.post("/comments", async (req, res) => {
    const id = uuid();
    const content = req.body.content;

    if(!content)
    {
        return res.sendStatus(400);
    }

    await fs.mkdir("data/comments", {recursive: true});
    await fs.writeFile(`data/comments/${id}.txt`, content);
    
    res.status(201).json({
        id: id
    });
});*/

app.listen(3000, () => console.log("API server is running..."));