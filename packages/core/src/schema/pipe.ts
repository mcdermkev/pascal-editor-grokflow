import { z } from 'zod';
import { BaseNode } from '../base';  // Should resolve correctly

export const PipeNode = BaseNode.extend({
  type: z.literal('pipe'),
  diameter: z.number().min(0.01).max(0.5).default(0.05), // meters
  material: z.enum(['PVC', 'Copper', 'PEX', 'Galvanized Steel']).default('PVC'),
  slope: z.number().default(0.00635), // ~1/4" per foot (m/m) for drainage
  connections: z.array(z.string()).default([]), // connected node IDs
  flowDirection: z.enum(['supply', 'waste', 'vent', 'recirculation']).optional(),
});

export type PipeNode = z.infer<typeof PipeNode>;
