let app = Vue.createApp({
    data(){
       return {
        showTable:false,
        time_loaded: "",
        tickets: [],
        mphOver25: []
       }
    },
    created(){
        this.getCurrentDate();
        this.getAllTickets();
        this.getTicketsBy25Mph();
    },
    methods: {
        async getAllTickets(){
            const response = await fetch("tickets1.json");
            this.tickets = await response.json();
            this.showTable = true;
        },
         async getTicketsBy25Mph(){
            const response = await fetch("tickets1.json");
            this.mphOver25 = await response.json();
            this.mphOver25 = this.mphOver25.filter((ticket) => (ticket.actual_speed - ticket.posted_speed) > 25);
            this.showTable = true;
        },
        getCurrentDate(){
            const monthNames = [
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
              ];
            var date = new Date();
            const monthIndex = date.getMonth();
            const monthName = monthNames[monthIndex];
            const day = date.getUTCDate();
            const year = date.getFullYear();
            this.time_loaded = `${monthName} ${day}, ${year}`;
        },
        
    },
    
})
app.mount("#main")
