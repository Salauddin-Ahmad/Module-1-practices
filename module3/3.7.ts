class Counter {
    static count: number = 0;
    static increment() {
        // return (this.count= this.count)
        return (Counter.count= Counter.count + 1 );
        // 
    }
    static decrement(){
        return (Counter.count= Counter.count - 1);
    }
}   

const instance1 = new Counter();
// console.log(instance1.increment()); //differnet memory reference
console.log(Counter.increment()); //differnet memory reference

const instance2 = new Counter()
// console.log(instance2.increment()); //differnet memory reference
console.log(Counter.increment()); //differnet memory reference

const instance3 = new Counter()
// console.log(instance3.increment()); //differnet memory reference
console.log(Counter.increment()); //differnet memory reference

