'use strict';


/**
 * Altera o valor da Transacao
 * Altera o valor da Transacao na conta existente do cliente.
 *
 * codigo Long 
 * valor Double 
 * authorization String 
 * no response value expected for this operation
 **/
exports.alteraTransacao = function(codigo,valor,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Cadastra transação na Conta
 * Cadastra uma transação de débito ou depósito na conta.
 *
 * authorization String 
 * transacao Transacao 
 * tipo String 
 * returns Transacao
 **/
exports.cadastraTransacao = function(authorization,transacao,tipo) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "tipo" : "debito",
  "data" : "2000-01-23T04:56:07.000+00:00",
  "valor" : 6.027456183070403,
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deleta uma transacao
 * Deleta uma transacao indevida por um cliente.
 *
 * codigo Long 
 * authorization String 
 * no response value expected for this operation
 **/
exports.deletaTransacao = function(codigo,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

