'use strict';


/**
 * Cadastra Cliente
 * Cadastra um novo cliente
 *
 * cliente_ Cliente  (optional)
 * returns Cliente
 **/
exports.cadastraCliente = function(cliente_) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "senha" : "senha123",
  "cpf" : "555.555.555-55",
  "conta" : [ {
    "transacoes" : [ {
      "tipo" : "debito",
      "data" : "2000-01-23T04:56:07.000+00:00",
      "valor" : 6.027456183070403,
      "id" : 0
    }, {
      "tipo" : "debito",
      "data" : "2000-01-23T04:56:07.000+00:00",
      "valor" : 6.027456183070403,
      "id" : 0
    } ],
    "numero" : 784563,
    "saldo" : 101.34,
    "agencia" : 975,
    "digito" : 7
  }, {
    "transacoes" : [ {
      "tipo" : "debito",
      "data" : "2000-01-23T04:56:07.000+00:00",
      "valor" : 6.027456183070403,
      "id" : 0
    }, {
      "tipo" : "debito",
      "data" : "2000-01-23T04:56:07.000+00:00",
      "valor" : 6.027456183070403,
      "id" : 0
    } ],
    "numero" : 784563,
    "saldo" : 101.34,
    "agencia" : 975,
    "digito" : 7
  } ],
  "id" : 1,
  "titular" : "Janete Silva"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

