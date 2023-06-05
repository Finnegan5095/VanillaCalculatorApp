// 

runSpeechRecog = () => {
    document.getElementById("output").innerHTML = "Loading text...";
    var output = document.getElementById('output');
    var action = document.getElementById('action');
    let recognization = new webkitSpeechRecognition();
    recognization.onstart = () => {
      action.innerHTML = "Listening...";
    }
    recognization.onresult = (e) => {
      var transcript = e.results[0][0].transcript;
      //  transcriptResults = transcript;
      output.innerHTML = transcript;
      output.classList.remove("hide")
      action.innerHTML = "";
    }
    recognization.start();
  }

  determineTheVoiceInput = () => {
    

  }

  function solveExpression(params) {
    console.log("Got here")
    try {
        document.getElementById("calc-expression").value = eval(document.getElementById("calc-expression").value);
    } catch (error) {
        console.log("There was an error evauluating the expression.")
    }
  }

  function addToForm(params) {
    console.log("Got here")
    try {
        document.getElementById("calc-expression").value += params;
        // formId += params;
    } catch (error) {
        console.log("There was an error adding this char to the form.")
    }
  }

  function clearForm() {
    document.getElementById("calc-expression").value = null;
  }

