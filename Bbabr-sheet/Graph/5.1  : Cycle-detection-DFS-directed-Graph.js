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

  hasCycle() {
    const visited = {};
    const dfsVisited = {};

    for (const vertex in this.adjList) {
      if (!visited[vertex] && this.dfsCheckCycle(vertex, visited, dfsVisited)) {
        return true;
      }
    }

    return false;
  }

  dfsCheckCycle(vertex, visited, dfsVisited) {
    visited[vertex] = true;
    dfsVisited[vertex] = true;

    if (this.adjList[vertex]) {
      for (const neighbor of this.adjList[vertex]) {
        if (!visited[neighbor] && this.dfsCheckCycle(neighbor, visited, dfsVisited)) {
          return true;
        } else if (dfsVisited[neighbor]) {
          return true;
        }
      }
    }

    dfsVisited[vertex] = false;
    return false;
  }
}

// Example usage:
const graph = new Graph(4);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(2, 3);
graph.addEdge(3, 3);

console.log(graph.hasCycle());  // Output: true
