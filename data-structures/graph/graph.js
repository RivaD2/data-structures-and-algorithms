'use strict';

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addNode(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
}