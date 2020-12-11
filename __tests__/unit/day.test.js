const { it } = require("@jest/globals");

it('Retorna dia da semana valido', () => {

    var my_date = new Date("12/12/2020")

    function getWeekDay(date){
      var weekdays = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado"]
      var day = date.getDay()
      return weekdays[day]
    }

    function is_weekend(week_day){
      if(week_day === 'Domingo' || week_day === 'Sabado'){ return true}
      return false
    }

    function first_monday(date){
      if(getWeekDay(date) === 'Domingo'){ return date.getDay() + 1}
      if(getWeekDay(date) === 'Sabado'){ return date.getDay() + 1}
    }


    function find_day(date){
        if( is_weekend(date) ){ return first_monday(date) }
        return date
    }
    console.log("É : ", getWeekDay(new Date(`12/${first_monday(my_date)}/2020`)))



})