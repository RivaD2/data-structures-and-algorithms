'use strict';
const graph = require('../graph/graph')

class BFSGraph extends graph {
   constructor() {
       super() 
    this.adjacencyList = {};
    this.nodes = [];
   }
   BFSTraversal(start) {
       const queue = [start];
       const result = [];
       const visited = {};
       let currentVertex;

       while(queue.length) {
           currentVertex = queue.shift();
           result.push(currentVertex);

           this.adjacencyList[currentVertex].forEach(neighbor => {
               if(!visited[neighbor]) {
                   visited[neighbor] = true;
                   queue.push(neighbor);
               }
           })
       }
       return result;
   }
}
let g = new BFSGraph();
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');