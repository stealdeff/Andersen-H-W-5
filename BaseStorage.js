// Task #1
// Create a BaseStorage.
// The BaseStorageconstructor must take the maximum number of elements in the storage as its only optional parameter.
//  If the parameter is an invalid number, generate an error. If the parameter is not specified, set the maximum stack size to 10.

// Required properties:
// storage: array
// maxSize: number

// Methods:
// - isEmpty() - returns a Boolean value (whether the storage is empty or not);
// - toArray() - returns a new array consisting of stored elements.
class BaseStorage{
constructor(maxSize = 10){
    if (typeof maxSize !== 'number' || maxSize <= 0) {
        throw new Error('Invalid number!');
    }
    this.storage = [];
    this.maxSize = maxSize;
  
}
isEmpty(){
return (this.storage.length===0)
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

// Create a Stack class deriving from BaseStorage.

// Implement public methods:
// - push(elem) - add a new element to the stack (generate an error if the stack is full);
// - pop() - remove the top element of the stack and return it (generate an error if the stack is empty);
// - peek() - get the top element of the stack (return null if the stack is empty);


// Implement static public methods:
// - fromIterable(iterable) - returns a new Stack, the elements of which are the elements of the passed iterable entity.
//  The maximum number of elements of such a stack must be equal to the length of this entity. If the entity is not iterable, generate an error.

class Stack extends BaseStorage{
   
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
const st=new Stack()
st.push(4)
st.push(3)
st.push(2)
st.push(2)
st.push(2)
st.push(2)
st.push(2)
st.push(2)
st.push(2)
st.push(2)


console.log(st.toArray())
console.log(st.pop())
console.log(st.toArray())
console.log(st.peek())

// Create a Queue class deriving from BaseStorage.

// Implement public methods:
// - push(elem) - add a new element to the queue (generate an error if the queue is full);
// - shift() - remove the first element of the stack and return it (generate an error if the queue is empty);
// - peek() - get the first element of the queue (return null if the queue is empty);


// Implement static public methods:
// - fromIterable(iterable) - returns a new Queue, the elements of which are the elements of the passed iterable entity.
//  The maximum number of elements of such a queue must be equal to the length of this entity. If the entity is not iterable, generate an error.
class  Queue extends BaseStorage{

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