function dijkstra(graph, start) {
    const distances = {};
    const visited = new Set();
  
    for (const vertex in graph) {
      distances[vertex] = Infinity;
    }
    distances[start] = 0;
  
    while (visited.size !== Object.keys(graph).length) {
      let minVertex = null;
      for (const vertex in graph) {
        if (!visited.has(vertex) && (minVertex === null || distances[vertex] < distances[minVertex])) {
          minVertex = vertex;
        }
      }
  
      visited.add(minVertex);
  
      for (const neighbor in graph[minVertex]) {
        const distance = distances[minVertex] + graph[minVertex][neighbor];
        if (distance < distances[neighbor]) {
          distances[neighbor] = distance;
        }
      }
    }
  
    return distances;
  }
  
  // Example usage:
  const graph = {
    A: { B: 3, C: 2 },
    B: { A: 3, C: 1, D: 4 },
    C: { A: 2, B: 1, D: 2 },
    D: { B: 4, C: 2 },
  };
  
  const startVertex = 'A';
  const distances = dijkstra(graph, startVertex);
  console.log(distances);
  