type EdgeData = {
    id: string;
    source: string;
    target: string;
    animated?: boolean;
};

const initialEdges: EdgeData[] = [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e2-3', source: '2', target: '3', animated: true },
];

export default initialEdges;
