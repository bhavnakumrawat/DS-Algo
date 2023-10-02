class Graph {
  constructor(numVertices) {
    this.numVertices = numVertices;
    this.adjList = new Map();
  }

  addEdge(u, v) {
    if (!this.adjList.has(u)) {
      this.adjList.set(u, []);
    }
    if (!this.adjList.has(v)) {
      this.adjList.set(v, []);
    }
    this.adjList.get(u).push(v);
    this.adjList.get(v).push(u);
  }

  shortestPath(start, end) {
    if (!this.adjList.has(start) || !this.adjList.has(end)) {
      return null; // Invalid vertices
    }

    const queue = [start];
    const visited = {};
    const distance = {};
    const path = {};

    visited[start] = true;
    distance[start] = 0;
    path[start] = null;

    while (queue.length > 0) {
      const vertex = queue.shift();

      if (vertex === end) {
        // Found the destination, reconstruct the path
        return this.reconstructPath(path, start, end);
      }

      for (const neighbor of this.adjList.get(vertex)) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
          distance[neighbor] = distance[vertex] + 1;
          path[neighbor] = vertex;
        }
      }
    }

    return null; // No path found
  }

  reconstructPath(path, start, end) {
    const shortestPath = [end];
    let current = end;

    while (current !== start) {
      current = path[current];
      shortestPath.unshift(current);
    }

    return shortestPath;
  }
}

// Example usage:
const graph = new Graph(7);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(2, 5);
graph.addEdge(4, 6);
graph.addEdge(5, 6);

const shortestPath = graph.shortestPath(0, 6);
console.log(shortestPath); // Output: [0, 2, 5, 6]
