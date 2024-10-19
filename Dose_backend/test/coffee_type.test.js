const { coffee_typeController } = require('../controllers');
const { coffee_typeService } = require('../services'); // Service containing the logic

// Mock request and response creation
function createMockReqRes() {
    let req = { body: {}, query: {} };
    let req_err = { body: {}, query: {} };
    let res = {
        status: jest.fn(() => res),
        send: jest.fn(),
    };

    // Test data for valid request
    req.body = {
        variety: "Bourbon",
        name: "SLM1600",
        productor: "Antonio Medina",
        origin: "Guatemala",
        region: null,
        altitude: 1600,
        process: "Washed",
        roastingDay: "01/01/2023",
        roastingDegree: "medium",
        roaster: "Paolo",
        harvestDate: "02/02/2023"
    };

    // Erroneous request for testing
    req_err.body = {
        variety: "Bourbon",
        productor: "Antonio Medina",
        origin: "Guatemala",
        region: null,
        altitude: 1600,
        process: "Washed",
        roastingDay: "01/01/2023",
        roastingDegree: "medium",
        roaster: "Paolo",
        harvestDate: "02/02/2023"
        // Missing 'name'
    };

    return [req, req_err, res];
}

describe("CoffeeType API", () => {

    let req, req_err, res;
    
    beforeEach(() => {
        [req, req_err, res] = createMockReqRes();
    });
    

    describe("GET /getById", () => {


        it("should return a coffe by its ID", async () => {
            req.query["id"]=10;
            await coffee_typeController.getById(req, res);
            
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.send).toHaveBeenCalledWith({
                    data: [{
                        id: 10,
                        name: 'ginop',
                        productor: null,
                        origin: null,
                        region: null,
                        altitude: null,
                        variety: null,
                        process: null,
                        roasting_day: null,
                        roasting_degree: null,
                        roaster: null,
                        harvest_date: null
                      }]
            });
        });

        it("should return an error if a parameter is missing", async () => {
            await coffee_typeController.getById(req_err, res);
            
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.send).toHaveBeenCalledWith({
                name: 'MISSING_PARAMETER',
                messageError: 'Bad Request: some parameters are missing'
            });
        });

        it("should return an error for an invalid parameter format - negative number", async () => {
            req_err.query["id"] = -10;
            
            await coffee_typeController.getById(req_err, res);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.send).toHaveBeenCalledWith({
                name: 'BAD_FORMAT_PARAMETERS',
                messageError: 'Bad Request: some parameters are not in the right format'
            });
        });

        it("should return an error for an invalid parameter format - string", async () => {
            req_err.query["id"] = "pd";
            await coffee_typeController.getById(req_err, res);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.send).toHaveBeenCalledWith({
                name: 'BAD_FORMAT_PARAMETERS',
                messageError: 'Bad Request: some parameters are not in the right format'
            });
        });
    });

    describe("POST /updateCoffee", () => {
        it("should return an error if a parameter is missing", async () => {
            await coffee_typeController.updateCoffee(req_err, res);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.send).toHaveBeenCalledWith({
                name: 'MISSING_PARAMETER',
                messageError: 'Bad Request: some parameters are missing'
            });
        });

        it("should return an error for an invalid parameter format - negative number", async () => {
            req_err.body["id"] = -10;
            await coffee_typeController.updateCoffee(req_err, res);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.send).toHaveBeenCalledWith({
                name: 'BAD_FORMAT_PARAMETERS',
                messageError: 'Bad Request: some parameters are not in the right format'
            });
        });

        it("should return an error for an invalid parameter format - string", async () => {
            req_err.body["id"] = "pd";
            await coffee_typeController.updateCoffee(req_err, res);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.send).toHaveBeenCalledWith({
                name: 'BAD_FORMAT_PARAMETERS',
                messageError: 'Bad Request: some parameters are not in the right format'
            });
        });
    });

    describe("POST /addCoffee", () => {
        it("should return an error if a parameter is missing", async () => {
            await coffee_typeController.addCoffee(req_err, res);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.send).toHaveBeenCalledWith({
                name: 'MISSING_PARAMETER',
                messageError: 'Bad Request: some parameters are missing'
            });
        });
    });

    describe("POST /deleteCoffee", () => {
        it("should return an error if a parameter is missing", async () => {
            await coffee_typeController.deleteCoffee(req_err, res);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.send).toHaveBeenCalledWith({
                name: 'MISSING_PARAMETER',
                messageError: 'Bad Request: some parameters are missing'
            });
        });

        it("should return an error for an invalid parameter format - negative number", async () => {
            req_err.body["id"] = -10;
            await coffee_typeController.deleteCoffee(req_err, res);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.send).toHaveBeenCalledWith({
                name: 'BAD_FORMAT_PARAMETERS',
                messageError: 'Bad Request: some parameters are not in the right format'
            });
        });

        it("should return an error for an invalid parameter format - string", async () => {
            req_err.body["id"] = "pd";
            await coffee_typeController.deleteCoffee(req_err, res);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.send).toHaveBeenCalledWith({
                name: 'BAD_FORMAT_PARAMETERS',
                messageError: 'Bad Request: some parameters are not in the right format'
            });
        });
    });
});
