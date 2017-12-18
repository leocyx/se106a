var M = module.exports = {}
var eatmoney = new Array()
var trafficmoney = new Array()
var leisuremoney = new Array()
var totalm = ''
        function work(option){
            var money = document.getElementById("amount")
            var total = document.getElementById("total")
            totalm = total.innerText
            if(option === "eat")total.innerText = M.eat(money.value)
            else if(option === "traffic")total.innerText = M.traffic(money.value)
            else if(option === "leisure")total.innerText = M.leisure(money.value)
        }
        M.eat = function(money){
          eatmoney.push(money)
        totalm = eval(totalm+"+"+money)
        return  totalm;
      }
      M.traffic = function (money){
          trafficmoney.push(money)
          totalm = eval(totalm+"+"+money)
          return  totalm;
        }
        M.leisure = function (money){
          leisuremoney.push(money)
          totalm = eval(totalm+"+"+money)
          return  totalm;
        }