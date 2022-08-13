import { ErrorHandler } from "../helpers/error.js";
import CircularNode from "../model/CircularNode.js";

export const lastPlayerCalculator = async (req, res, next) => {
    try {
        let circularNode = new CircularNode()
        
        var root = null;
        var {totalPeople} = req.body
        
        var totalPeople =  Array(totalPeople).fill(1).map((n, i) => n + i)
        for (let i = 0; i < totalPeople.length; i++) {

            root = circularNode.addCircularNode(root, totalPeople[i]);
        }

        while (true) {
                        
            if (root.next.data != root.data) { // last element 
                if (root.next.data != null) {
                    
                    root = circularNode.deleteCircularNode(root,root.next.data);
                    root= root.next;
                }
                    
            } else {
                break
            }

        }  

        res.json({
            status:2000,
            response: root.data
        })

    } catch (error) {
        next(new ErrorHandler(error.status || 404, error.message));
    }
    finally {
    }
  }

