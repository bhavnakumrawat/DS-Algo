class Graph {
	constructor(vertices) {
	  this.vertices = vertices;
	  this.adjList = new Map();
	  for (let i = 0; i < vertices; i++) {
		this.adjList.set(i, []);
	  }
	}
  
	addEdge(from, to, weight) {
	  this.adjList.get(from).push({ to, weight });
	}
  
	topologicalSortUtil(v, visited, stack) {
	  visited[v] = true;
	  for (const neighbor of this.adjList.get(v)) {
		if (!visited[neighbor.to]) {
		  this.topologicalSortUtil(neighbor.to, visited, stack);
		}
	  }
	  stack.push(v);
	}
  
	topologicalSort() {
	  const stack = [];
	  const visited = new Array(this.vertices).fill(false);
  
	  for (let i = 0; i < this.vertices; i++) {
		if (!visited[i]) {
		  this.topologicalSortUtil(i, visited, stack);
		}
	  }
  
	  return stack.reverse();
	}
  
	shortestPath(source) {
	  const topologicalOrder = this.topologicalSort();
	  const dist = new Array(this.vertices).fill(Infinity);
	  dist[source] = 0;
  
	  for (const u of topologicalOrder) {
		for (const neighbor of this.adjList.get(u)) {
			let currentDistance  = dist[u] + neighbor.weight
		  if (dist[u] !== Infinity && currentDistance < dist[neighbor.to]) {
			dist[neighbor.to] = currentDistance;
		  }
		}
	  }
  
	  return dist;
	}
  }
  
  // Example usage:
  const graph = new Graph(6);
  graph.addEdge(0, 1, 5);
  graph.addEdge(0, 2, 3);
  graph.addEdge(1, 3, 6);
  graph.addEdge(1, 2, 2);
  graph.addEdge(2, 4, 4);
  graph.addEdge(2, 5, 2);
  graph.addEdge(2, 3, 7);
  graph.addEdge(3, 5, 1);
  graph.addEdge(3, 4, -1);
  graph.addEdge(4, 5, -2);
  
  const source = 1;
  const shortestDistances = graph.shortestPath(source);
  console.log("Shortest distances from vertex " + source + ": ", shortestDistances);
  