const handleKeyPress = () => {
        document.addEventListener('keyup', (e) => {
         if (e.key.toUpperCase() === keyTrigger.toUpperCase()) {
          changeColor();
          props.setLastKey(id);
          soundEl.current.play();
         }
        });
   };
   document.addEventListener('keyPress', handleKeyPress);