var output = "0 1";
var n = 10, f=0, s=1, sum=0;

for(var i=2; i<=n; i++) {
  sum = f + s;
  output += ' ' + sum;
  f = s;
  s = sum;
}

console.log(output);
