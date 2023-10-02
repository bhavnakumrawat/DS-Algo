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
    const visited = {};
    for (const vertex in this.vertices) {
      if (!visited[vertex] && this.bfsHasCycle(vertex, visited)) {
        return true;
      }
    }
    return false;
  }

  bfsHasCycle(startVertex, visited) {
    const queue = [{ vertex: startVertex, parent: null }];
    visited[startVertex] = true;

    while (queue.length > 0) {
      const { vertex, parent } = queue.shift();

      for (const adjacentVertex of this.vertices[vertex]) {
        if (!visited[adjacentVertex]) {
          visited[adjacentVertex] = true;
          queue.push({ vertex: adjacentVertex, parent: vertex });
        } else if (adjacentVertex !== parent) {
          return true;
        }
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
