const { coffee_typeController } = require('../controllers');
const { coffee_typeService } = require('../services'); // Servizio che contiene la logica

// Mock per req e res
const req_err = {
    body: {
        provaErrore:"ciao"
    }
};

const req = {
    body: {
        
    }
};

const res = {
    status: jest.fn(() => res), // Fa chaining, quindi res.status(200).send('ok') funziona
    send: jest.fn(),
};


// check funzionamento controller
it("CONTROLLER", async () => {

    // Chiama la funzione controller
    await coffee_typeController.prova(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({ data: "OK" });

    
    // await coffee_typeController.prova(req_err, res);
    // expect(res.status).toHaveBeenCalledWith(400);
    // expect(res.send).toHaveBeenCalledWith({
    //     message: 'Bad Request: some parameters are missing or in bad format'
    //   });
});


it("ERRORE", async()=>{
    
    await coffee_typeController.prova(req_err, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith({
        data: 'Bad Request: some parameters are missing or in bad format'
      });
})


// check funzionamento services
it("SERVICES", async () => {
    // Simula la funzione prova nel service che restituisce {data: "OK"}
    jest.spyOn(coffee_typeService, 'prova').mockResolvedValue({ data: "OK" });

    // Chiama la funzione controller
    await coffee_typeController.prova(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({ data: "OK" });
});