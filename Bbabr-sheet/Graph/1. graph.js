class Graph {
    constructor(){
        this.vertices = []
    }
    addVertex(v){
        this.vertices[v] = []
    }
    addEdge(src,dest){
        if( this.vertices[src] && this.vertices[dest]){
            this.vertices[src].push(dest)
            this.vertices[dest].push(src)
        }
    }
    removeVertex(vertexToRemove) {
        if (this.vertices[vertexToRemove]) {
          // Remove vertex from the list of vertices
          delete this.vertices[vertexToRemove];
    
          // Remove all references to the vertex in other adjacency lists
          for (const vertex in this.vertices) {
            this.vertices[vertex] = this.vertices[vertex].filter((v) => v !== vertexToRemove);
          }
        }
      }
    
        removeEdge(d,s){
        if(this.vertices[d] && this.vertices[s]){
            this.vertices[s] = this.vertices[s].filter((v)=>v!=s)
            this.vertices[d] = this.vertices[d].filter((v)=>v!=d)
        }
    }
    print(){
        for(let v in this.vertices){
            console.log(`${v}->${this.vertices[v].join(',')}`)
        }
    }
}
const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
graph.addEdge("D", "A");
console.log("Welcome to Programiz!",graph.removeVertex('A'));
