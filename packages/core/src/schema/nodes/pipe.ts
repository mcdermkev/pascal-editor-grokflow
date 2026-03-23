import { z } from 'zod';
import { BaseNode } from '../base';  // This matches the import style in index.ts

export const PipeNode = BaseNode.extend({
  type: z.literal('pipe'),
  diameter: z.number().min(0.01).max(0.5).default(0.05), // meters
  material: z.enum(['PVC', 'Copper', 'PEX', 'Galvanized Steel']).default('PVC'),
  slope: z.number().default(0.00635), // approx 1/4" per foot in m/m
  connections: z.array(z.string()).default([]), // node IDs of connected elements
  flowDirection: z.enum(['supply', 'waste', 'vent', 'recirculation']).optional(),
  // Add more later: length (calculated), fittings, insulation, etc.
});

export type PipeNode = z.infer<typeof PipeNode>;
