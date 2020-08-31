function row_1(){
  var a = [];
  for (var i = 1; i <= 9; i++){
    a[0] = i;
    for (var j = 1; j <= 9; j++){
      if (i != j){
        a[1] = j;
        a[2] = 15 - (a[0] + a[1]);
        if(a[2] > 0 && a[2] <= 9 && a[2] != a[0] && a[2] != a[1]){
          console.log(a);
        }
      }
    }
  }
}
row_1()