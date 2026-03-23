// packages/viewer/src/components/renderers/pipe/PipeRenderer.tsx

import { Line } from '@react-three/drei';
import { useMemo } from 'react';
import { PipeNode } from '@pascal-app/core/schema/nodes/pipe'; // Adjust import if needed (core is aliased or relative)

type Props = {
  node: PipeNode;
};

export function PipeRenderer({ node }: Props) {
  // Placeholder: render a straight horizontal line (replace with real start/end from connections later)
  const points = useMemo(() => [
    [0, 0, 0], // start (relative to node position)
    [5, 0, 0], // end (5m length example)
  ], []);

  return (
    <group position={[node.position?.x ?? 0, node.position?.y ?? 0, node.position?.z ?? 0]}>
      <Line
        points={points}
        color="#0000FF" // Blue for plumbing
        lineWidth={4}
        dashed={false}
      />
      {/* Add text label or cylinder for thickness later */}
    </group>
  );
}
