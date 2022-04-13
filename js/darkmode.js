
    //dark mode/light mode muda os estilos da pagina
    function changeMode(){

        changeClasses();
        //console.log('cliquei')
        changeText();
    }
    
    
    function changeClasses(){
    
      
        button.classList.toggle('dark-mode')
        h1.classList.toggle('dark-mode')
        body.classList.toggle('dark-mode')
      
    }
    
    
    function changeText(){
    
        const lightMode = "Light Mode";
        const darkMode = "Dark Mode"
       
        if(body.classList.contains('dark-mode')){
            button.innerHTML = lightMode;
            h1.innerHTML = "Jogo da Velha " + darkMode + " ON"
            return; //sai da função
    
        }
    
        button.innerHTML = darkMode;
        h1.innerHTML = "Jogo da Velha " + lightMode + " ON"
    
        console.log('cliquei')
    }
    
    //const darkModeClass = 'dark-mode';
    const button = document.getElementById('mode-selector')
    const h1 = document.getElementById('page-title')
    const body = document.getElementsByTagName('body')[0];
    
    console.log(button)
    
    
    button.addEventListener('click', changeMode);
    
    