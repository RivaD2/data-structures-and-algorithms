'use strict';
const graph = require('../graph/graph')

class BFSGraph extends graph {
   constructor() {
       super() 
    this.adjacencyList = {};
    this.nodes = [];
   }
   BFTraversal(start) {
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