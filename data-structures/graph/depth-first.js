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
        this.preOrderDFSTraversal.push()
        }
    
}