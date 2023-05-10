const input = Number(window.prompt('몇개를 찍을까요?'));


for(let i = 0; i < input; i++)  {
    for(let j = input -1; j > i; j--)  {
      // space
      document.write('&nbsp');  
    }
    for(let j = 0; j <= i; j++)  {
      document.write('*');
    }
    for(let j = 1; j <= i; j++)  {
      document.write('*');
    }
    document.write('<br>');
  }