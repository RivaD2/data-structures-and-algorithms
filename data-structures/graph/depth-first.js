'use strict';

class Graph {
    constructor() {
        this.adjacencyList = {};
        this.nodes = [];
    }
    addNode(node) {
        this.nodes.push(node);
        this.edges[node] = [];
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    getNeighbors(startingNode) {
        let visited = {};
        let stack = [startingNode];
        const result = [];
        let currentNode;

        visited[startingNode] = true;
        while(stack.length) {
            currentNode = stack.pop();
            result.push(currentNode);
           this.adjacencyList[currentNode].forEach(neighbor => {
               if(!visited[neighbor]) {
                   visited[neighbor] = true;
                   stack.push(neighbor);
               }
           })
        }
        return result;
    }
    preOrderDFSTraversal(adjacencyList) {
    // Create a Stack and add starting node in
        let stack = [currentNode]
        let visited = new Set();
        stack.push(currentNode);

    }
    
}
let g = new Graph();
g.addNode("A");
g.addNode("B");
g.addNode("C");
g.addNode("D");
g.addNode("E");
g.addNode("F");
g.addNode("G");

g.addEdge("A", "C");
g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("B", "G");

g.preOrder("A");