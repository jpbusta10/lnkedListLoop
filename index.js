class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class list {
    constructor() {
        this.head = null;
    }

    insertEnd(data) {
        let node = new Node(data)
        let current = this.head;
        if (!this.head) {
            this.head = node;
        }
        else {
            while (current.next) {
                current = current.next
            }
            current.next = node;
        }
    }
    remove(data){           ///removes the data add in parameter
        let current = this.head;
        let last = this.head;
        if(this.head){
            while((current )&&(current.data != data)){
                last = current;
                current = current.next;
            }
            if(current)
            {
                last.next = current.next;
            }
            return data
        }
        else {
            return null;///if the data is not found return null
        }
    }
    printList(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
    checkLoop(){
        let pointer1 = this.head;
        let pointer2 = this.head;
    
        while(pointer1 && pointer2 && pointer2.next){
            pointer1 = pointer1.next;
            pointer2 = pointer2.next.next;
    
            if (pointer1 === pointer2) {
                console.log("there is a loop");
                return true;
            }
        }
        console.log("there is no loop");
        return false;
    }
    

}

const lista = new list();

lista.insertEnd(5);
lista.insertEnd(6);
lista.insertEnd(9);
lista.insertEnd(7);
lista.printList();
let current = lista.head;
for(let i=0;i<2;i++){
    current = current.next;
}
current.next = lista.head;
lista.checkLoop();


