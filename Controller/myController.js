const data = require('../models/myModel');

exports.checkString = (req,res,next)=>{

    var max = -2;
    var data = req.body;
    var strA = data[Object.keys(data)[0]];
    const strB = data[Object.keys(data)[1]];

    for(var i=0; i< strB.length; i++)
    {
        var val = strA.indexOf(strB[i]);
        strA = strA.replace(strB[i],'_'); // remove a specific character

        if(max<val) max = val;
        else
        {
            return res.status(200).json({
                result: 'false'
            });
        }
    }
    next();
}

//read all object data
exports.readAllObject = async (req,res)=>{

    const testData = await data.find();

    res.status(200).json({
        total: testData.length,
        list: testData
    });
}

//create data
exports.createObject =  async (req,res) =>{
    
    try{
        // console.log(req.body);
        const newTour = await data.create(req.body); // creating documents
    
        res.status(200).json({
            result:'true'
       });
    }
    catch(err)
    {
        res.status(500).json({
            message: 'Insert Fail'
        });
    }
}