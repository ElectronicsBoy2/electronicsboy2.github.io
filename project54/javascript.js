function calculate() {
  var side = Number(document.getElementById("firstno").value);
  
  var pere = side * 4;
  var area = side * side;
  
  var ans = "Perimeter is ";
  var ans3 = ", Area is ";
  
  var ans1 = ans.concat(pere);
  var ans2 = ans1.concat(ans3);
  var ans3 = ans2.concat(area);
  
  window.alert(ans3);
  
  
}
