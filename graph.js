// Graphs

// A collection of nodes known as vertices
// Nodes may point to other nodes, known as edges

function createNode(key){
    const neighbors = [];

    return {
        key,
        neighbors,
        addNeighbors(node){
            neighbors.push(node);
        }
    }
}

function createGraph(directed = false){
    const nodes = [];
    const edges = [];

    return {
        directed,
        nodes, 
        edges,

        addNode(key){
            nodes.push(createNode(key));
        },

        getNode(key){
            return nodes.find(node => node.key === key)
        },

        addEdge(node1key, node2key){
            const node1 = this.getNode(node1key);
            const node2 = this.getNode(node2key);

            node1.addNeighbors(node2);
            edges.push(`${node1key}-${node2key}`);
  

        if (!directed){
            node2.addNeighbors(node1);
        }
    },

    print(){
        return nodes
            .map(({key, neighbors}) => {
            let result = key;

            if (neighbors.length){
                result += ` => ${neighbors
                    .map(neighbor => neighbor.key)
                    .join(' ')}`
            }
            return result;
        })
        .join('\n')
    }
}
}

const graph = createGraph(true);

graph.addNode('Kyle');
graph.addNode('Anna');
graph.addNode('Krios');
graph.addNode('Tali');

graph.addEdge('Kyle', 'Anna');
graph.addEdge('Anna', 'Kyle');
graph.addEdge('Kyle', 'Kiros');
graph.addEdge('Kyle', 'Tail');

console.log(graph.print());