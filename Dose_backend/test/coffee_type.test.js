const { query } = require('express');
const { coffee_typeController } = require('../controllers');
const { coffee_typeService } = require('../services'); // Servizio che contiene la logica

function createMockReqRes(){
    let req_err;
    let req;
    let res;

    res = {
        status: jest.fn(() => res), 
        send: jest.fn(),
    };

    req={body:{}, query:{}}
    req_err={body:{}, query:{}}
    
    req.body["variety"]="Burboun";
    req.body["name"]="SLM1600";
    req.body["productor"]="Antonio Medina";
    req.body["origin"]="GUatemala";
    req.body["region"]=null;
    req.body["altitude"]=1600;
    req.body["process"]="Washed";
    req.body["roastingDay"]="01/01/2023";
    req.body["roastingDegree"]="medium";
    req.body["roaster"]="Paolo";
    req.body["harvestDate"]="02/02/02";
    
    req_err.body["variety"]="Burboun";
    // req_err.body["name"]="SLM1600";
    req_err.body["productor"]="Antonio Medina";
    req_err.body["origin"]="GUatemala";
    req_err.body["region"]=null;
    req_err.body["altitude"]=1600;
    req_err.body["process"]="Washed";
    req_err.body["roastingDay"]="01/01/2023";
    req_err.body["roastingDegree"]="medium";
    req_err.body["roaster"]="Paolo";
    req_err.body["harvestDate"]="02/02/02";
    

    return [req,req_err,res]
}

describe("GET /getById",()=>{
    const reqResObj=createMockReqRes();
    let req_err=reqResObj[1];
    let req=reqResObj[0];
    let res=reqResObj[2];


    describe("Rilevamento errori", ()=>{
        it("Missing parameter", async()=>{
            await coffee_typeController.getById(req_err, res);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.send).toHaveBeenCalledWith({
                name: 'MISSING_PARAMETER',
                messageError: 'Bad Request: some parameters are missing'  
                });
        });
        it("Bad format parameter - negative number",async()=>{
            req_err.query["id"]=-10;
            await coffee_typeController.getById(req_err, res);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.send).toHaveBeenCalledWith({
                name: 'BAD_FORMAT_PARAMETERS',
                messageError: 'Bad Request: some parameters are not in the right format'  
                });
            });
        it("Bad format parameter - string",async()=>{
            req_err.query["id"]="pd";
            await coffee_typeController.getById(req_err, res);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.send).toHaveBeenCalledWith({
                name: 'BAD_FORMAT_PARAMETERS',
                messageError: 'Bad Request: some parameters are not in the right format'  
                });
            });
    })
    // it("SERVICES", async () => {
    //     // Simula la funzione prova nel service che restituisce {data: "OK"}
    //     jest.spyOn(coffee_typeService, 'prova').mockResolvedValue({ data: "OK" });

    //     // Chiama la funzione controller
    //     await coffee_typeController.prova(req, res);
    //     expect(res.status).toHaveBeenCalledWith(200);
    //     expect(res.send).toHaveBeenCalledWith({ data: "OK" });
    // });
});

describe("POST /updateCoffee",()=>{
    const reqResObj=createMockReqRes();
    let req_err=reqResObj[1];
    let req=reqResObj[0];
    let res=reqResObj[2];

    res = {
        status: jest.fn(() => res), 
        send: jest.fn(),
    };
    req_err = { body: {} };
    req = { body: {} };
    describe("Rilevamento errori", ()=>{
        it("Missing parameter", async()=>{
            await coffee_typeController.updateCoffee(req_err, res);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.send).toHaveBeenCalledWith({
                name: 'MISSING_PARAMETER',
                messageError: 'Bad Request: some parameters are missing'  
                });
        });
        it("Bad format parameter - negative number",async()=>{
            req_err.body["id"]=-10;
            await coffee_typeController.updateCoffee(req_err, res);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.send).toHaveBeenCalledWith({
                name: 'BAD_FORMAT_PARAMETERS',
                messageError: 'Bad Request: some parameters are not in the right format'  
                });
            });
        it("Bad format parameter - string",async()=>{
            req_err.body["id"]="pd";
            await coffee_typeController.updateCoffee(req_err, res);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.send).toHaveBeenCalledWith({
                name: 'BAD_FORMAT_PARAMETERS',
                messageError: 'Bad Request: some parameters are not in the right format'  
                });
            });
    })
});

describe("POST /addCoffee",()=>{
    
    const reqResObj=createMockReqRes();
    let req_err=reqResObj[1];
    let req=reqResObj[0];
    let res=reqResObj[2];

    describe("Rilevamento errori", ()=>{
        it("Missing parameter", async()=>{
            await coffee_typeController.updateCoffee(req_err, res);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.send).toHaveBeenCalledWith({
                name: 'MISSING_PARAMETER',
                messageError: 'Bad Request: some parameters are missing'  
                });
        });
    })
});

describe("POST /deleteCoffe",()=>{
    const reqResObj=createMockReqRes();
    let req_err=reqResObj[1];
    let req=reqResObj[0];
    let res=reqResObj[2];
    describe("Rilevamento errori", ()=>{
        it("Missing parameter", async()=>{
            await coffee_typeController.deleteCoffee(req_err, res);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.send).toHaveBeenCalledWith({
                name: 'MISSING_PARAMETER',
                messageError: 'Bad Request: some parameters are missing'  
                });
        });
        it("Bad format parameter - negative number",async()=>{
            req_err.body["id"]=-10;
            await coffee_typeController.deleteCoffee(req_err, res);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.send).toHaveBeenCalledWith({
                name: 'BAD_FORMAT_PARAMETERS',
                messageError: 'Bad Request: some parameters are not in the right format'  
                });
            });
        it("Bad format parameter - string",async()=>{
            req_err.body["id"]="pd";
            await coffee_typeController.deleteCoffee(req_err, res);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.send).toHaveBeenCalledWith({
                name: 'BAD_FORMAT_PARAMETERS',
                messageError: 'Bad Request: some parameters are not in the right format'  
                });
            });
        })
    });

    