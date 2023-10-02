class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(vertex) {
    if (!this.vertices[vertex]) {
      this.vertices[vertex] = [];
    }
  }

  addEdge(source, destination) {
    if (this.vertices[source] && this.vertices[destination]) {
      this.vertices[source].push(destination);
      this.vertices[destination].push(source); // Uncomment this line for an undirected graph
    }
  }

  hasCycle() {
    const visited = new Set();

    for (const vertex in this.vertices) {
      if (!visited.has(vertex) && this.dfsHasCycle(vertex, visited, null)) {
        return true;
      }
    }

    return false;
  }

  dfsHasCycle(vertex, visited, parent) {
    visited.add(vertex);

    for (const adjacentVertex of this.vertices[vertex]) {
      if (!visited.has(adjacentVertex)) {
        if (this.dfsHasCycle(adjacentVertex, visited, vertex)) {
          return true;
        }
      } else if (adjacentVertex !== parent) {
        return true;
      }
    }

    return false;
  }
}

// Usage example:

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
graph.addEdge("D", "E");
graph.addEdge("E", "A"); // Creating a cycle

const hasCycle = graph.hasCycle();
console.log(hasCycle); // Output: true
