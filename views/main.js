window.onload = function() {
  const FindSongButton = document.getElementById("FindSong");
  FindSongButton.addEventListener("click", myfunc);
};

function myfunc() {
  var myword = document.getElementById("myword").value;
  alert(myword);
}

// function disp() {
//   document.getElementByld("table").style.display = "default";
// }

document.getElementById("search").addEventListener("click", () => {
  //   disp();
  const val = document.getElementById("myword").value;
  slovo = val;

  //   if (!val) {
  //     return;
  //   }

  // var str = val;
  // alert(str.substring(2));

  document.location.href = "/search?word=" + val;
});

// document.getElementById('stats').addEventListener('click', () => {
//     //const val = document.getElementById('myword').value;

//     //if (!val) { return; }

//     // // var str = val;
//     // // alert(str.substring(2));

//     document.location.href = ("/statistic");
// });
