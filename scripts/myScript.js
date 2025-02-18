// const { watch } = require("./vue.global");

const {createApp} = Vue

// Vue.createApp({
//     data(){
//         return{
//             counter: 0,
//             title: "Счетчик"
//         }
//     },
// }).mount('#app');

// Vue.createApp({
//     data(){
//         return{
//             counter: 0,
//             title: "Точно НЕ счетчик"
//         }
//     },
// }).mount('#app2');

// Vue.createApp({
//     data(){
//         return{
//             title: "Заметки",
//             myPlaceholder: "Введите название заметки",
//             inputValue: '',
//             notes: [],
//             ulCount: ''
//         }
//     },
//     methods:{
//         inputChangeHandler(event){
//             this.inputValue = event.target.value;
//         },
//         addNewNote(){
//             if(this.inputValue != ''){
//                 this.notes.unshift(this.inputValue);
//             }
//             else{
//             }
//         },
//         // countAllNotes(event){
//         //     console.log(this.notes.length);
//         //     ulCount = this.notes.length;
//         // },
//         addNewCountNotes(){
//             for(let i = 1; i <= Number(this.inputValue); i++){
//                 this.notes.unshift(i);
//             }
//         },
//         removeNote(idx){
//             this.notes.splice(idx,1);
//         }
//     }
    
// }).mount('#form');

// Vue.createApp({

//     data(){
//         return{
//             rows: '',
//             cols: ''
//         }
//     },
//     methods:{
//         createTable(){
            
//         }
//     }

// }).mount('#table');

// Vue.createApp({
//     data(){
//         return{
//             title: "Список високосных годов",
//             myPlaceholder: "Введите начало отсчета",
//             mySecondPlaceholder: "Введите конец отсчета",
//             inputValue: '',
//             inputValueSecond: '',
//             notes: [],
//             // ulCount: ''
//         }
//     },
//     methods:{
//         // inputChangeHandler(event){
//         //     this.inputValue = event.target.value;
//         // },
//         // inputChangeHandlerSecond(event){
//         //     this.inputValueSecond = event.target.value;
//         // },
//         addYears(){
//             // if(this.inputValue != '' && this.inputValueSecond != ''){
//             //     this.notes.push(this.inputValue && this.inputValueSecond);
//             // }
//             let i = Number(this.inputValue);
//             let j = Number(this.inputValueSecond);
//             // console.log(i , j);
//             if(i != '' && j != ''){
//                 for(i; i <= j; i++){
//                     if(i % 4 == 0 && (i % 400 == 0 || i % 100 != 0)){
//                         this.notes.unshift(i);
//                     }
//                 }
//             }
//             else{
//             }
//             this.inputValue = ''; this.inputValueSecond = '';

//         },
//         // countAllNotes(event){
//         //     console.log(this.notes.length);
//         //     ulCount = this.notes.length;
//         // },
//         // addNewCountNotes(){
//         //     for(let i = 1; i <= Number(this.inputValue); i++){
//         //         this.notes.unshift(i);
//         //     }
//         // },
//         // removeNote(idx){
//         //     this.notes.splice(idx,1);
//         // }
//     }
    
// }).mount('#form');

// Vue.createApp({
//     data(){
//         return{
//             title: "Список покупок",
//             myPlaceholder: "Введите покупку",
//             inputValue: '',
//             private: [],
//             groceries: [],
//             important: [],
//             privateOpt: "Личное",
//             groceriesOpt: "я забыла",
//             importantOpt: "Важное",
//             selectValue: '',
//         }
//     },
//     methods:{
//         addTask(){
//             if(this.selectValue == this.privateOpt){
//                 this.private.push(this.inputValue);
//             }
//             if(this.selectValue == this.groceriesOpt){
//                 this.groceries.push(this.inputValue);
//             }
//             if(this.selectValue == this.importantOpt){
//                 this.important.push(this.inputValue);
//             }
//         },
//         removeNotePr(idx){
//             this.private.splice(idx,1);
//         },
//         removeNoteGr(idx){
//             this.groceries.splice(idx,1);
//         },
//         removeNoteIm(idx){
//             this.important.splice(idx,1);
//         }

//     }
    
// }).mount('#form');

Vue.createApp({
    data() {
        return{
            savedConvertsArr: JSON.parse(localStorage.getItem('convertation')),
            usdFrom: "USD",
            cnyFrom: "CNY",
            jpyFrom: "JPY",
            usdTo: "USD",
            cnyTo: "CNY",
            jpyTo: "JPY",
            amount: 0,
            finalAmount: 0,
            convertFrom: '',
            convertTo: '',
            savedConvertsArr: [],
        }
    },
    methods:{
        saveCurrency(){
            savedConvertsArr.push(this.finalAmount)
            localStorage.setItem('convertation', JSON.stringify(savedConvertsArr));
        }
    },
    computed: {
        countCurrency(){
            if(this.convertFrom == this.convertTo){
                finalAmount = this.amount;
            }

            else if(this.convertFrom == this.usdFrom && this.convertTo == this.cnyTo){
                finalAmount = this.amount * 2;
            }
            else if(this.convertFrom == this.usdFrom && this.convertTo == this.jpyTo){
                finalAmount = this.amount * 3.5;
            }

            else if(this.convertFrom == this.cnyFrom && this.convertTo == this.usdTo){
                finalAmount = this.amount * 0.5;
            }
            else if(this.convertFrom == this.cnyFrom && this.convertTo == this.jpyTo){
                finalAmount = this.amount * 1.5;
            }
            
            else if(this.convertFrom == this.jpyFrom && this.convertTo == this.usdTo){
                finalAmount = this.amount * 0.23;
            }
            else if(this.convertFrom == this.jpyFrom && this.convertTo == this.cnyTo){
                finalAmount = this.amount * 3.5;
            }
        }
    }
    // computed: {
    //     finalamount:function() {
    //         var to = this.convertto;
    //         var from = this.convertfrom;
    //         var final;
    //         switch(from) {
    //             case "INR":
    //             if (to == "USD") {
    //             final = this.amount * 0.016;
    //             }
    //             if (to == "EUR") {
    //             final = this.amount * 0.013;
    //             }
    //             if (to == "INR") {
    //             final = this.amount;
    //             }
    //             if (to == "BHD") {
    //             final = this.amount * 0.0059;
    //             }
    //             break;
    //             case "USD":
    //             if (to == "INR") {
    //             final = this.amount * 63.88;
    //             }
    //             if (to == "EUR") {
    //             final = this.amount * 0.84;
    //             }
    //             if (to == "USD") {
    //             final = this.amount;
    //             }
    //             if (to == "BHD") {
    //             final = this.amount * 0.38;
    //             }
    //             break;
    //             case "EUR":
    //             if (to == "INR") {
    //             final = this.amount * 76.22;
    //             }
    //             if (to == "USD") {
    //             final = this.amount * 1.19;
    //             }
    //             if (to == "EUR") {
    //             final = this.amount;
    //             }
    //             if (to == "BHD") {
    //             final = this.amount * 0.45;
    //             }
    //             break;
    //             case "BHD":
    //             if (to == "INR") {
    //             final = this.amount *169.44;
    //             }
    //             if (to == "USD") {
    //             final = this.amount * 2.65;
    //             }
    //             if (to == "EUR") {
    //             final = this.amount * 2.22;
    //             }
    //             if (to == "BHD") {
    //             final = this.amount;
    //             }
    //             break
    //         }
    //         return final;
    //     }
    // }
}).mount('#app');
