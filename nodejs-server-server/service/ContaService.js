'use strict';


/**
 * Consulta Saldo
 * Consulta saldo da conta do cliente
 *
 * agencia Integer 
 * numero Long 
 * digito Integer 
 * authorization String 
 * returns Double
 **/
exports.consultaSaldo = function(agencia,numero,digito,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = 0.8008281904610115;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

