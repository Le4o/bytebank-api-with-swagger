'use strict';


/**
 * Consulta extrato
 * Consulta o extrato da conta do cliente.
 *
 * agencia Integer 
 * numero Long 
 * digito Integer 
 * authorization String 
 * returns Extrato
 **/
exports.consultaExtrato = function(agencia,numero,digito,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

