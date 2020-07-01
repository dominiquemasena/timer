const seconds = process.argv.slice(2);
const timer = function(times){
  for (let time of times){
    setTimeout(() => process.stdout.write('\x07'), time * 1000)

  }
}

timer(seconds);