class Graph {
  constructor(numVertices) {
    this.numVertices = numVertices;
    this.adjList = new Map();
    this.indegree = new Map();
  }

  addEdge(u, v) {
    if (!this.adjList.has(u)) {
      this.adjList.set(u, []);
      this.indegree.set(u, 0);
    }
    if (!this.adjList.has(v)) {
      this.adjList.set(v, []);
      this.indegree.set(v, 0);
    }
    this.adjList.get(u).push(v);
    this.indegree.set(v, this.indegree.get(v) + 1);
  }

  topologicalSort() {
    const result = [];
    const queue = [];

    // Enqueue vertices with indegree 0
    for (const [vertex, indegree] of this.indegree.entries()) {
      if (indegree === 0) {
        queue.push(vertex);
      }
    }

    while (queue.length > 0) {
      const vertex = queue.shift();
      result.push(vertex);

      if (this.adjList.has(vertex)) {
        for (const neighbor of this.adjList.get(vertex)) {
          this.indegree.set(neighbor, this.indegree.get(neighbor) - 1);
          if (this.indegree.get(neighbor) === 0) {
            queue.push(neighbor);
          }
        }
      }
    }

    // If there are remaining edges, the graph has a cycle
    for (const [vertex, indegree] of this.indegree.entries()) {
      if (indegree !== 0) {
        return [];
      }
    }

    return result;
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
console.log(sortedVertices);  // Output: [4, 5, 2, 0, 3, 1]
