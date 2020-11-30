'use strict';

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addNode(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
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
}

let g = new Graph();
g.addNode('A');
g.addNode('B');
g.addNode('C');
g.addNode('D');
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('B', 'C');
g.getNeighbors('A');