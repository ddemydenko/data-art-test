const nxtPrmFib = require('../prime-fibonacci-number-orig');
const { nextPrimeFibonacci, testables } = require('../prime-fibonacci-number-optimize');

const TimeExecution = require('../time-execution.js');

const NUMBER_OF_EXECUTIONS = 100;

const expectNumbers = {
  0: 2,
  1: 2,
  20: 89,
  89: 233,
  233: 1597,
  1597: 28657,
  28657: 514229,
};

describe('Fibonacci and Primary Test', () => {
  test('getLandParcelsForCompany', async () => {
    const timeExecution = new TimeExecution();
    timeExecution.start();

    for (let i = 0; i < NUMBER_OF_EXECUTIONS; i++) {
      Object.entries(expectNumbers).forEach(([number, result]) => {
        expect(nxtPrmFib(Number(number))).toEqual(result);
      });
    }
    expect(nxtPrmFib(514229)).toEqual(433494437);
    timeExecution.mark('finish original');

    for (let i = 0; i < NUMBER_OF_EXECUTIONS; i++) {
      Object.entries(expectNumbers).forEach(([number, result]) => {
        expect(nextPrimeFibonacci(Number(number))).toEqual(result);
      });
    }
    expect(nextPrimeFibonacci(514229)).toEqual(433494437);
    timeExecution.mark('finish optimize');
  });

});
