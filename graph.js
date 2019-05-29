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
    const node = [];
    const node = [];

    return {
        directed,
        nodes, 
        edeges,

        addNode(key){
            node.push(createNode(key));
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
        return node
            .map(({key, neighbours}) => {
            let result = key;

            if (neighbours.length){
                result += ` => ${neighbours
                    .map(neighbour => neighbour.key)
                    .join(' ')}`
            }
            return result;
        })
        .join('\n')
    }
}
}