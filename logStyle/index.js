/**
 * log 打印的样式
 * 
 * 
*/

    let printStr = ''; 
    let printChar =  function (col, char) {
        char = char?char:'-'; 
        for (var i=0; i<col; i++) { 
            printStr += char; 
        } 
    } 

    function n () { 
        printStr += '\n'; 
    } 

    let graph =  function (row, col, char) {
         for(var i=0; i<row; i++){
              printChar(55, ' ');
              printChar(col, char) 
              n(); 
            } 
    } 

    let triangle = function (i) {
         var j=1; for (;i>0;i--) {
              printChar(55, ' ');
               printChar(i, ' ');
                printChar(j);
                 j+=2 
                 n();
        } 
    } 

    let ktriangle = function (i) {
         var j=i*2-1;
          for (var i=1;j>0;i++) {
               printChar(55, ' ');
                printChar(i, ' ');
                 printChar(j);
                  j-=2 
                  n();
            } 
    }



let logZ = () => {
    graph(2, 10);
    triangle(4);
    ktriangle(4);
    graph(2, 10);
    console.log(printStr);  
}

module.exports =  {
    logZ
}