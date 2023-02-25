function tagID(id) {
    return document.querySelector(id);
  }
  
  function duyetMang(mang, callback) {
    for (let i = 0; i < mang.length; i++) {
      callback(mang[i]);
    }
  }
  
  function kiemTraSoNguyenTo(num) {
    var output = false;
    var dem = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        dem++;
      }
    }
    if (dem == 2) {
      output = true;
    }
    return output;
  }
  