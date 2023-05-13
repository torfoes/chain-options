import React from 'react';
import ReactFlow, { MiniMap, Node, Edge } from 'reactflow';
import 'reactflow/dist/style.css';

import defaultNodes from './nodes';
import defaultEdges from './edges';

type NodeData = {
    id: string;
    type: string;
    data: { label: string | JSX.Element };
    position: { x: number; y: number };
    style: { backgroundColor: string; color: string };
};

const nodeColor = (node: NodeData): string => {
    switch (node.type) {
        case 'input':
            return '#6ede87';
        case 'output':
            return '#6865A5';
        default:
            return '#ff0072';
    }
};

const MerkleTree: React.FC = () => {
    return (
        <ReactFlow defaultNodes={defaultNodes as Node<any, string>[]} defaultEdges={defaultEdges as Edge[]}>
            <MiniMap nodeStrokeWidth={3} zoomable pannable />
        </ReactFlow>
    );
};

export default MerkleTree;
