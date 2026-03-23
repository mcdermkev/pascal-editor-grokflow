// packages/viewer/src/components/renderers/pipe/PipeRenderer.tsx

import { Line } from '@react-three/drei';
import { PipeNode } from '@pascal-app/core/schema/nodes/pipe'; // Adjust alias if needed (core/schema/nodes/pipe)

type Props = {
  node: PipeNode;
};

export function PipeRenderer({ node }: Props) {
  // Placeholder: straight line along X-axis (5m example)
  // Later: calculate real path from node.connections (lookup connected nodes' positions)
  const points = [
    [0, 0, 0],                // start at node position
    [5, 0, 0],                // end 5m right
  ];

  return (
    <group
      position={[node.position?.x ?? 0, node.position?.y ?? 0, node.position?.z ?? 0]}
      rotation={[node.rotation?.x ?? 0, node.rotation?.y ?? 0, node.rotation?.z ?? 0]}
      scale={[node.scale?.x ?? 1, node.scale?.y ?? 1, node.scale?.z ?? 1]}
    >
      <Line
        points={points}
        color="#0000FF" // Blue = plumbing convention
        lineWidth={5}
        dashed={false}
      />
      {/* Optional: add diameter as tube later */}
      {/* <mesh>
        <tubeGeometry args={[pathCurve, 8, node.diameter ?? 0.05, 8, false]} />
        <meshStandardMaterial color="blue" />
      </mesh> */}
    </group>
  );
}
