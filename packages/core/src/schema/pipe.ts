import { z } from 'zod';
import { BaseNode } from '../base';  // Adjust path if needed (likely '../base' or './base')

export const PipeNode = BaseNode.extend({
  type: z.literal('pipe'),
  diameter: z.number().min(0.01).max(0.5).default(0.05), // meters (e.g., 50mm typical)
  material: z.enum(['PVC', 'Copper', 'PEX', 'Galvanized Steel']).default('PVC'),
  slope: z.number().default(0.00635), // ~1/4" per foot (m/m) for gravity drainage
  connections: z.array(z.string()).default([]), // connected node IDs (e.g., fixtures, other pipes)
  flowDirection: z.enum(['supply', 'waste', 'vent', 'recirculation']).optional(),
  // Optional extras we can expand later: insulationThickness, fittings: array, pressureRating, etc.
  metadata: z.record(z.any()).optional(), // for custom props like code notes
});

// Export for use in union
export type PipeNode = z.infer<typeof PipeNode>;
