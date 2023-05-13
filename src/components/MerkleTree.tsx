import React, { useCallback } from 'react';
import ReactFlow, {
    addEdge,
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
} from 'reactflow';



import 'reactflow/dist/style.css';
import './overview.css';





const onInit = (reactFlowInstance: any) => console.log('flow loaded:', reactFlowInstance);

const OverviewFlow = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState();
    const [edges, setEdges, onEdgesChange] = useEdgesState();
    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

    // we are using a bit of a shortcut here to adjust the edge type
    // this could also be done with a custom edge for example
    const edgesWithUpdatedTypes = edges.map((edge) => {
        if (edge.sourceHandle) {
            const edgeType = nodes.find((node) => node.type === 'custom').data.selects[edge.sourceHandle];
            edge.type = edgeType;
        }

        return edge;
    });

    return (
        <ReactFlow
            nodes={nodes}
            edges={edgesWithUpdatedTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={onInit}
            fitView
            attributionPosition="top-right"
            nodeTypes={nodeTypes}
        >
            <MiniMap style={minimapStyle} zoomable pannable />
            <Controls />
            <Background color="#aaa" gap={16} />
        </ReactFlow>
    );
};

export default OverviewFlow;
