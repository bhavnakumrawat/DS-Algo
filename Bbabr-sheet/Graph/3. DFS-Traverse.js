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

  dfsRecursive(startVertex) {
    if (!this.vertices[startVertex]) {
      return [];
    }

    const visited = {};
    const result = [];

    const dfs = (vertex) => {
      visited[vertex] = true;
      result.push(vertex);

      for (const adjacentVertex of this.vertices[vertex]) {
        if (!visited[adjacentVertex]) {
          dfs(adjacentVertex);
        }
      }
    };

    dfs(startVertex);

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

const dfsResult = graph.dfsRecursive("A");
console.log(dfsResult);
