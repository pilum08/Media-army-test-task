
        let mainDivs = $(".services__img"); 
        let maxHeight = 0;
        for (let i = 0; i < mainDivs.length; ++i) {
          if (maxHeight < $(mainDivs[i]).height()) { 
            maxHeight = $(mainDivs[i]).height(); 
          }
        }
        for (let i = 0; i < mainDivs.length; ++i) {
          $(mainDivs[i]).height(maxHeight); 
        }
    
