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

  bfs(startVertex) {
    if (!this.vertices[startVertex]) {
      return [];
    }

    const visited = {};
    const queue = [startVertex];
    const result = [];

    visited[startVertex] = true;

    while (queue.length > 0) {
      const currentVertex = queue.shift();
      result.push(currentVertex);

      for (const adjacentVertex of this.vertices[currentVertex]) {
        if (!visited[adjacentVertex]) {
          visited[adjacentVertex] = true;
          queue.push(adjacentVertex);
        }
      }
    }

    return result;
  }
}

// Usage example:

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

const bfsResult = graph.bfs("A");
console.log(bfsResult);
