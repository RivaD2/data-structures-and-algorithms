'use strict';
const Graph = import('../graph/graph')

/*Write a function based on the specifications above, 
which takes in a graph, and an array of city names. 
Without utilizing any of the built-in methods available to your language, 
return whether the full trip is possible with direct flights, 
and how much it would cost.*/

class NewGraph extends graph {
    constructor() {
        super() 
          this.adjacencyList = {};
          this.nodes = [];
    }
    getEdge(graph, arr) {
        let countedCosts = 0;
        let visitedNeighbors = [];
        const getCity = arr.forEach(city => {
            // Will return a node, push node into visitedNeighbors
            getNeighbors(city);
            
        })
    }
}

