class TimeExecution {
  start(){

    this.start = process.hrtime();
  }
  mark(note){
    var precision = 3; // 3 decimal places
    var elapsed = process.hrtime(this.start)[1] / 1000000; // divide by a million to get nano to milli
    console.log(process.hrtime(this.start)[0] + ' s, ' + elapsed.toFixed(precision) + ' ms - ' + note); // print message + time
    this.start = process.hrtime(); // reset the
  }
}

module.exports = TimeExecution;
