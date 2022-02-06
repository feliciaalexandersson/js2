    //event listener för tangettryckningarna, funktionen vad som händer när event/trycket görs
      $(document).bind("keyPress", function (event) {
          if (event.key==="0" || event.key==="1" || event.key==="2" || event.key==="3" || event.key==="4" || event.key==="5" || event.key==="6" || event.key==="7" || event.key==="8" || event.key==="9" ||
          event.key==="+" || event.key==="-" || event.key==="=" || event.key==="." || event.key==="Enter" || event.key==="Home" || event.key==="End" || event.key==="ArrowRight" || event.key==="ArrowLeft"|| event.key==="Backspace")
        
        {
            //använder preventDefault metoden i event för att hantera felhantering med switch
            event.preventDefault()
            switch (event.key)
            //de olika casen skrivs ut i beräkningen
            { 
             case"0": 
             $(".expression").val($(".expression").val()+"0");
              break;

             case"1": 
             $(".expression").val($(".expression").val()+"1");
              break;

              case"2": 
             $(".expression").val($(".expression").val()+"2");
              break;
              
              case"3": 
             $(".expression").val($(".expression").val()+"3");
              break;
              
              case"4": 
             $(".expression").val($(".expression").val()+"4");
              break;

              case"5": 
             $(".expression").val($(".expression").val()+"5");
              break;

              case"6": 
             $(".expression").val($(".expression").val()+"6");
              break;

              case"7": 
             $(".expression").val($(".expression").val()+"7");
              break;

              case"8": 
             $(".expression").val($(".expression").val()+"8");
              break;

              case"9": 
             $(".expression").val($(".expression").val()+"9");
              break;

              case".": 
             $(".expression").val($(".expression").val()+".");
              break;

              //triggar funktionen calculate
              case"=":
              calculate()
              break;

              case"Enter":
              calculate()
              break;

              //triggar funktionen addrem
              case"+":
              addrem()
              break;

              case"-":
              addrem()
              break;

              //triggar funktionen del
              case"Backspace":
              del()
              break;

            }
            
        
        }  
    
        else 
        return (event.key==="0" || event.key==="1" || event.key==="2" || event.key==="3" || event.key==="4" || event.key==="5" || event.key==="6" || event.key==="7" || event.key==="8" || event.key==="9"
        || event.key==="Delete" || event.key==="." || event.key==="ArrowLeft" || event.key==="ArrowRight" || event.key==="Backspace" || event.key==="Home" || event.key==="End")
    }
)
//binder click-eventet "+"" resp "-"" med funktionen addrem
$ ("#plus").bind("click", function(event) {

    addrem("+")
})

$ ("#minus").bind("click", function(event) {

    addrem("-")
})
//binder click-eventet "=" med funktionen calculate
$ ("#eval").bind("click", function(event) {

    calculate()
})

// funktionen addrem (add/remove) som skriver ut beräkningen och vad användaren matar in
function addrem(value){
    if (value === "+")
    {
        let calc=$(".expression")
    
        let input=$(".inputnr")

        if (!$.trim(calc.html()).length)
        {
            calc.append(input.val())
        }
        else {
            calc.append("+"+input.val())
        }
        input.val("")
    }
    if (value === "-")
    {
        let calc=$(".expression")
    
        let input=$(".inputnr")

        if (!$.trim(calc.html()).length)
        {
            calc.append(input.val())
        }
        else {
            calc.append("-"+input.val())
        }
        input.val("")
    }
}

// funktionen som gör beräkningen och skriver ut den i tänkt div
function calculate(){
    let calc=$(".expression")

    // skapar arrayen till de inmatade nummren och beräkningen samt delar upp den med split 
    //för att få bort det där sista + eller --tecknet och anger vart den ska börja och sluta
    let inputArray=calc.html().split(/(\+)|(\-)/g).filter(Boolean)

    while (inputArray.length>=3){
        let value=operator(inputArray[1], parseFloat(inputArray[0], parseFloat(inputArray[2])))
        //med splice tar vi bort/lägger till i Arrayen
        inputArray.splice(0,3)
        inputArray.splice(0,0,value.toString())
        if (inputArray.length===1){
            $(".result").text(inputArray[0])
            calc.html("")
            $(".inputnr").val("")
    }
    }
}
// funktionen operator som checkar om vi gjort plus eller minus
function operator(check,a,b){
    let res;
    switch (check){
        case"1": 
        res=a+b;
        break
        case"2": 
        res=a-b;
        break
    }
    return res
}