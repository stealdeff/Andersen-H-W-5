
class BaseStorage{
constructor(maxSize = 10){
    if (typeof maxSize !== 'number' || maxSize <= 0) {
        throw new Error('Invalid number!');
    }
    this.storage = [];
    this.maxSize = maxSize;
  
}
isEmpty(){
const fl=(this.storage.length===0)
return fl
}
toArray(){
return [...this.storage]
}
};




try {
    const storage = new BaseStorage(5);
    console.log(storage.isEmpty()); 
    console.log(storage.toArray());
} catch (error) {
    console.error(error.message);
}



class Stack extends BaseStorage{
    constructor(maxSize=10){
       super(maxSize)
    }
    push(elem){
    if(this.maxSize <= this.storage.length)
        throw new Error("Stack is full") 
   let newstor=new Array(this.storage.length+1)
   for(let index=0;index<this.storage.length;index++)
   {
   newstor[index]=this.storage[index]
   }
   newstor[this.storage.length]=elem
   this.storage=newstor
    }
    pop(){
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        let newstor = new Array(this.storage.length - 1);
        for(let index=0;index<newstor.length;index++)
            {
            newstor[index]=this.storage[index]
            }
            const popped=this.storage[this.storage.length-1]
            this.storage=newstor
      return popped
    }
    peek(){
        if(this.isEmpty())
        {
            return null
        }
        return this.storage[this.storage.length-1]
    }
    static fromIterable(iterable){
        try {
            for (const item of iterable) {} 
        } catch (e) {
            throw new Error('Not iterable');
        }
        const newstack=new Stack()
        for (const item of iterable) {
            newstack.push(item); 
        }

        return newstack;
    }
}
const st=new Stack(3)
st.push(4)
st.push(3)
st.push(2)
console.log(st.toArray())
console.log(st.pop())
console.log(st.toArray())
console.log(st.peek())

class  Queue extends BaseStorage{
constructor(maxSize=10){
    super(maxSize)
 }
push(elem)
{
    if(this.maxSize <= this.storage.length)
        throw new Error("Queue is full") 
   let newstor=new Array(this.storage.length+1)
   for(let index=0;index<this.storage.length;index++)
   {
   newstor[index]=this.storage[index]
   }
   newstor[this.storage.length]=elem
   this.storage=newstor
}
shift()
{
    if (this.isEmpty()) {
        throw new Error("Queue is empty");
    }
    let newstor = new Array(this.storage.length - 1);
    for(let index=0;index<newstor.length;index++)
        {
        newstor[index]=this.storage[index+1]
        }
        const popped=this.storage[0]
        this.storage=newstor
  return popped
}
peek()
{
    if(this.isEmpty())return null
    return this.storage[0]
}
static fromIterable(iterable){
    try {
        for (const item of iterable) {} 
    } catch (e) {
        throw new Error('Not iterable');
    }
    const newqueue=new Queue()
    for (const item of iterable) {
        newqueue.push(item); 
    }

    return newqueue;
}
}
const q=new Queue(5)
q.push(4)
q.push(1)
q.push(2)
q.push(3)
console.log(q.toArray())
console.log(q.shift())
console.log(q.toArray())
console.log(q.peek())
const array = [1, 2, 3, 4, 5];
const stackFromArray = Stack.fromIterable(array);
console.log(stackFromArray.toArray()); 

const string = "hello";
const stackFromString = Queue.fromIterable(string);
console.log(stackFromString.toArray());