console.log('hello world')

// set html scroll behavior to smooth when clicking anchor tag
document.addEventListener('click', function(e){  
    var anchor = e.target.closest('a');
    if(anchor !== null) {
        console.log('hello world');
        document.querySelector('html').style.scrollBehavior = 'smooth';
      //do something with a tag
    }
  });