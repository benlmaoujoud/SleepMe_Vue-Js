new Vue({
    el : '#app', //everything in app i can controle it 
    data: {
       hour:'',
       min:'',
       flag :'',
       result : '',
       selectedTime :'',
       
    },
    methods: {
       calcule : function(){
    if(this.hour && this.min)
    selectedTime = this.hour+":"+this.min+": 00"+" "+this.flag
    var d = new Date(moment(selectedTime,'h:mm:ss a'))
    
    var time = moment.duration("08:15:00")
    var date = moment(d)
    date.subtract(time)
    
    this.result = "You should try to fall asleep at : "+moment(date).format("h:mm a")
       
    }
    },

    
})

