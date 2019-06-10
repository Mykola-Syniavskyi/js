Vue.config.devtools = true;


var today = new Date();
    var today1 = new Date();
    Vue.component('day-in-comp',{
        template: `
            <td align="center"  :class="{ 'grey':dayOne.name === 'grey',
                    'black': dayOne.name === 'black',
                    'red' : dayOne.name === 'red',
                    'current': dayOne.name ==='current' }">{{dayOne.day}}</td>
        `,
        props: ['dayOne']
    });
    Vue.component('week-in-comp',{
        template:`
            <tr>
                <day-in-comp v-for="(dayOne, index1) in item" :key='index1' :dayOne='dayOne'></day-in-comp>
            </tr>
        `,
        props:['item']
    });
    var calendarComponent = {
        template: `
            <table class="table">
                <tr> <td colspan="7"  @click="foundDays"><button @click="show">click here!</button></td></tr>
                <tr v-if="showThis">
                    <td colspan="3"><button @click="funWeekFromMonday ">Start week from Monday</button></td>
                    <td colspan="4"><button @click="funWeekFromSunday">Start week from Sunday</button></td>
                </tr>
                <tr v-if="showThis">
                    <th ><button @click="back"><<</button></th>
                    <th colspan="5">{{nameMonth()}} {{year}}</th>
                    <th ><button @click="forward">>></button></th>
                </tr>
                <tr v-if="daysFromMon && showThis">
                    <th v-for="day in daysWeekMon">{{day}}</th>
                </tr>
                <week-in-comp v-if="daysFromMon" v-for="(item, index) in week[0]" :key='index' :item='item'></week-in-comp>
                <week-in-comp v-if="daysFromMon" v-for="(item, index) in week[1]" :key='index' :item='item'></week-in-comp>
                <week-in-comp v-if="daysFromMon" v-for="(item, index) in week[2]" :key='index' :item='item'></week-in-comp>
                <week-in-comp v-if="daysFromMon" v-for="(item, index) in week[3]" :key='index' :item='item'></week-in-comp>
                <week-in-comp v-if="daysFromMon" v-for="(item, index) in week[4]" :key='index' :item='item'></week-in-comp>
                <week-in-comp v-if="daysFromMon" v-for="(item, index) in week[5]" :key='index' :item='item'></week-in-comp>
                <tr v-if="!daysFromMon && showThis">
                    <th v-for="day in daysWeekSun">{{day}}</th>
                </tr>
                <week-in-comp v-if="!daysFromMon" v-for="(item, index) in week[0]" :key='index' :item='item'></week-in-comp>
                <week-in-comp v-if="!daysFromMon" v-for="(item, index) in week[1]" :key='index' :item='item'></week-in-comp>
                <week-in-comp v-if="!daysFromMon" v-for="(item, index) in week[2]" :key='index' :item='item'></week-in-comp>
                <week-in-comp v-if="!daysFromMon" v-for="(item, index) in week[3]" :key='index' :item='item'></week-in-comp>
                <week-in-comp v-if="!daysFromMon" v-for="(item, index) in week[4]" :key='index' :item='item'></week-in-comp>
                <week-in-comp v-if="!daysFromMon" v-for="(item, index) in week[5]" :key='index' :item='item'></week-in-comp>
            </table>
            `,
        data: function () {
            return {
                showThis: false,
                numMonth: today.getMonth(),
                thisMonth: today1.getMonth(),
                year: today.getFullYear(),
                thisYear: today1.getFullYear(),
                daysFromMon: true,
                daysWeekMon: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                daysWeekSun: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                todayDayWeek: today.getDay(),
                todayDayThis: today.getDate(),
                firstDayWeek: this.funFirstDayWeek(),
                weekPrev: 0,
                weekThis: 0,
                week: [ { thisDays: [{name: '',day: '',},{name: '', day: '',},{name: '', day: '',},{name: '',day: '', },{name: '', day: '',},
                        {name: '',day: '',},{name: '', day: '',}],},{ thisDays: [{name: '',day: '',},{name: '', day: '',},{name: '', day: '',},
                        {name: '',day: '', },{name: '', day: '',},{name: '',day: '',},{name: '', day: '',}],},{ thisDays: [{name: '',day: '',},
                        {name: '', day: '',},{name: '', day: '',},{name: '',day: '', },{name: '', day: '',},{name: '',day: '',},{name: '', day: '',}],}, 
                        { thisDays: [{name: '',day: '',},{name: '', day: '',},{name: '', day: '',},{name: '',day: '', },{name: '', day: '',},
                        {name: '',day: '',},{name: '', day: '',}],}, { thisDays: [{name: '',day: '',},{name: '', day: '',},{name: '', day: '',},
                        {name: '',day: '', },{name: '', day: '',},{name: '',day: '',},{name: '', day: '',}],}, { thisDays: [{name: '',day: '',},
                        {name: '', day: '',},{name: '', day: '',},{name: '',day: '', },{name: '', day: '',},{name: '',day: '',},{name: '', day: '',}],},],
            }
        },
        methods: {
            show: function () {
                if (this.showThis == false){
                    this.showThis = true;
                    
                }else{
                    
                    this.showThis = false;
                    
                }

                
                

            },
            back: function () {
                this.numMonth--;
                today.setMonth(this.numMonth);
                if (this.numMonth < 0) {
                    this.year--;
                    today.setFullYear(this.year);
                    this.numMonth = 11;
                    today.setMonth(this.numMonth);
                }
                this.foundDays();
            },
            forward: function () {
                this.numMonth++;
                today.setMonth(this.numMonth);
                if (this.numMonth > 11) {
                    this.year++;
                    today.setFullYear(this.year);
                    this.numMonth = 0;
                    today.setMonth(this.numMonth);
                }
                this.foundDays();
            },
            foundDays: function () {
                var index1 = 0;
                var index2 = 0;
                var index3 = 0;
                var index4 = 0;
                var index5 = 0;
                var index6 = 0;
                var days = 1;
                var daysNext = 1;
                var daysForPrev = 1;
                var firstDayWeek = '';
                var daysInPrevMonth = 32 - new Date(today.getFullYear(), today.getMonth() - 1, 32).getDate();
                var daysInThisMonth = 32 - new Date(today.getFullYear(), today.getMonth(), 32).getDate();
                if(this.daysFromMon){
                     firstDayWeek = this.funFirstDayWeek();
                } else{
                     firstDayWeek = this.funFirstDayWeek()+1;
                }
                var some = firstDayWeek - 2;
                for (var i = 0; i < 202; i++) {
                    if (daysForPrev < firstDayWeek && index1 < 7 && some >= 0) {
                        if (index1 === 6 || index1 === 5) {
                            this.week[0].thisDays[index1].name = 'red';
                        } else {
                            this.week[0].thisDays[index1].name = 'grey';
                        }
                        this.week[0].thisDays[index1].day = (daysInPrevMonth - some);
                        //console.log(daysInThisMonth);
                        index1++;
                        daysForPrev++;
                        some--;
                    } else if (firstDayWeek === daysForPrev && index1 < 7 && days <= daysInThisMonth) {
                        if (index1 === 6 || index1 === 5) {
                            this.week[0].thisDays[index1].name = 'red';
                        } else if(days===this.todayDayThis && this.thisMonth===this.numMonth && this.year===this.thisYear){
                            this.week[0].thisDays[index1].name = 'current';
                        } else {
                            this.week[0].thisDays[index1].name = 'black';
                        }
                        this.week[0].thisDays[index1].day = days;
                        index1++;
                        days++;
                    } else if (firstDayWeek === daysForPrev && index1 > 6 && index2 < 7 && days <= daysInThisMonth) {
                        if (index2 === 6 || index2 === 5) {
                            this.week[1].thisDays[index2].name = 'red';
                        } else if(days===this.todayDayThis && this.thisMonth===this.numMonth && this.year===this.thisYear){
                            this.week[1].thisDays[index2].name = 'current';
                        }else {
                            this.week[1].thisDays[index2].name = 'black';
                        }
                        this.week[1].thisDays[index2].day = days;
                        index2++;
                        days++;
                    }
                    else if (firstDayWeek === daysForPrev && index1 > 6 && index2 > 6 && index3 < 7 && days <= daysInThisMonth) {
                        if (index3 === 6 || index3 === 5) {
                            this.week[2].thisDays[index3].name = 'red';
                        } else if(days===this.todayDayThis && this.thisMonth===this.numMonth && this.year===this.thisYear){
                            this.week[2].thisDays[index3].name = 'current';
                        }else {
                            this.week[2].thisDays[index3].name = 'black';
                        }
                        this.week[2].thisDays[index3].day = days;
                        index3++;
                        days++;
                    }
                    else if (firstDayWeek === daysForPrev && index1 > 6 && index2 > 6 && index3 > 6 && index4 < 7 && days <= daysInThisMonth) {
                        if (index4 === 6 || index4 === 5) {
                            this.week[3].thisDays[index4].name = 'red';
                        } else if(days===this.todayDayThis && this.thisMonth===this.numMonth && this.year===this.thisYear){
                            this.week[3].thisDays[index4].name = 'current';
                        }else {
                            this.week[3].thisDays[index4].name = 'black';
                        }
                        this.week[3].thisDays[index4].day = days;
                        index4++;
                        days++;
                    }
                    else if (firstDayWeek === daysForPrev && index1 > 6 && index2 > 6 && index3 > 6 && index4 > 6 && index5 < 7 && days <= daysInThisMonth) {
                        if (index5 === 6 || index5 === 5) {
                            this.week[4].thisDays[index5].name = 'red';
                        } else if(days===this.todayDayThis && this.thisMonth===this.numMonth && this.year===this.thisYear){
                            this.week[4].thisDays[index5].name = 'current';
                        }else {
                            this.week[4].thisDays[index5].name = 'black';
                        }
                        this.week[4].thisDays[index5].day = days;
                        index5++;
                        days++;
                    }
                    else if (firstDayWeek === daysForPrev && index1 > 6 && index2 > 6 && index3 > 6 && index4 > 6 && index5 < 7 && days > daysInThisMonth) {
                        if (index5 === 6 || index5 === 5) {
                            this.week[4].thisDays[index5].name = 'red';
                        } else {
                            this.week[4].thisDays[index5].name = 'grey';
                        }
                        this.week[4].thisDays[index5].day = daysNext;
                        index5++;
                        days++;
                        daysNext++;
                    }
                    else if (firstDayWeek === daysForPrev && index1 > 6 && index2 > 6 && index3 > 6 && index4 > 6 && index5 > 6 && index6 < 7 && days <= daysInThisMonth) {
                        if (index6 === 6 || index6 === 5) {
                            this.week[5].thisDays[index6].name = 'red';
                        } else if(days===this.todayDayThis && this.thisMonth===this.numMonth && this.year===this.thisYear){
                            this.week[5].thisDays[index6].name = 'current';
                        }else {
                            this.week[5].thisDays[index6].name = 'black';
                        }
                        this.week[5].thisDays[index6].day = days;
                        index6++;
                        days++;
                    }
                    else if (firstDayWeek === daysForPrev && index1 > 6 && index2 > 6 && index3 > 6 && index4 > 6 && index5 > 6 && index6 < 7 && days > daysInThisMonth) {
                        if (index6 === 6 || index6 === 5) {
                            this.week[5].thisDays[index6].name = 'red';
                        } else {
                            this.week[5].thisDays[index6].name = 'grey';
                        }
                        this.week[5].thisDays[index6].day = daysNext;
                        index6++;
                        daysNext++;
                    }
                    i++;
                }
            },
            funFirstDayWeek: function () {
                today.setDate(1);
                return today.getDay();
            },
            nameMonth: function () {
                var name_month = "";
                switch (this.numMonth) {
                    case 0:
                        name_month = "January";
                        break;
                    case 1:
                        name_month = "February";
                        break;
                    case 2:
                        name_month = "March";
                        break;
                    case 3:
                        name_month = "April";
                        break;
                    case 4:
                        name_month = "May";
                        break;
                    case 5:
                        name_month = "June";
                        break;
                    case 6:
                        name_month = "July";
                        break;
                    case 7:
                        name_month = "August";
                        break;
                    case 8:
                        name_month = "September";
                        break;
                    case 9:
                        name_month = "October";
                        break;
                    case 10:
                        name_month = "November";
                        break;
                    case 11:
                        name_month = "December";
                        break;
                }
                return name_month
            },
            funWeekFromMonday: function () {
                this.daysFromMon = true;
                this.foundDays();
            },
            funWeekFromSunday: function () {
                this.daysFromMon = false;
                this.foundDays();
            }
        }
    };
    new Vue({
        el: '#app',
        components: {
            calendar: calendarComponent,
        }
    });