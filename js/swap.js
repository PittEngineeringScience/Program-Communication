function swap(class1) {

    const c1 = document.getElementsByClassName("class1");
    
    
    store = c1[0].inneHTML
    c1[0].innerHTML = c1[1].innerHTML
    c1[1].innerHTML = store
  }