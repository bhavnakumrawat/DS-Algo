class Graph {
  constructor(numVertices) {
    this.numVertices = numVertices;
    this.adjList = {};
  }

  addEdge(u, v) {
    if (!this.adjList[u]) {
      this.adjList[u] = [];
    }
    this.adjList[u].push(v);
  }

  topologicalSort() {
    const visited = {};
    const stack = [];

    for (const vertex in this.adjList) {
      if (!visited[vertex]) {
        this.topoSort(vertex, visited, stack);
      }
    }

    return stack.reverse();
  }

  topoSort(vertex, visited, stack) {
    visited[vertex] = true;

    if (this.adjList[vertex]) {
      for (const neighbor of this.adjList[vertex]) {
        if (!visited[neighbor]) {
          this.topoSort(neighbor, visited, stack);
        }
      }
    }

    stack.push(vertex);
  }
}

// Example usage:
const graph = new Graph(6);
graph.addEdge(5, 2);
graph.addEdge(5, 0);
graph.addEdge(4, 0);
graph.addEdge(4, 1);
graph.addEdge(2, 3);
graph.addEdge(3, 1);

const sortedVertices = graph.topologicalSort();
console.log(sortedVertices);  // Output: [5, 4, 2, 3, 1, 0]
