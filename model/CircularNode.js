export default class CircularNode {
    constructor() {
        this.data = 0;
        this.next = null;
    }
     
    deleteCircularNode = (root, data) =>{
        if (root == null)
            return null;
    
        var curr = root, prev = new CircularNode();
        while (curr.data != data) {
            if (curr.next == root) {
    
                break;
            }
    
            prev = curr;
            curr = curr.next;
        }
    
        if (curr == root && curr.next == root) {
            root = null;
            return root;
        }
    
        if (curr == root) {
            prev = root;
            while (prev.next != root)
                prev = prev.next;
            root = curr.next;
            prev.next = root;
        }
        else if (curr.next == root) {
            prev.next = root;
        } else {
            prev.next = curr.next;
        }
        return root;
    }
    
      addCircularNode  = (root, data) => {
    
        if (root == null) {
            root = new CircularNode();
            root.data = data;
            root.next = root
            return root;
        }
    
        let iter = root;
        do {
            if (iter.next == root) {
                var temp = new CircularNode();
                temp.data = data;
                iter.next = temp;
                temp.next = root;
                break;
            }
            iter = iter.next;
        } while (iter != root) {
        };
        return root;
    }
    
    
}

