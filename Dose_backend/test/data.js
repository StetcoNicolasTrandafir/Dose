// const jest= require("jest")

const request_addCoffe = {
    body: {
        variety: "Arabica",
        name: "Premium Coffee Blend",
        productor: "Coffee Farm Co.",
        origin: "Colombia",
        region: "Huila",
        altitude: "1500m",
        process: "Washed",
        roastingDay: "2024-10-01",
        roastingDegree: "Medium",
        roaster: "Artisan Roasters Inc.",
        harvestDate: "2024-06-15"
    }
};

const response_addCoffe={
    status:jest.fn((x)=>x),
    send:jest.fn((x)=>x),
    sendStatus:jest.fn((x)=>x)
}

jest

module.exports=[
    request_addCoffe,
    response_addCoffe
]