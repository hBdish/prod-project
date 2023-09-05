import { ReactElement } from 'react';
import { FeatureFlags } from '@/shared';
import { getFeatureFlag } from '../../lib/set-get-features';

interface ToggleFeaturesOptions {
  name: keyof FeatureFlags;
  on: ReactElement;
  off: ReactElement;
}

export function ToggleFeatures({ off, on, name }: ToggleFeaturesOptions) {
  if (getFeatureFlag(name)) {
    return on;
  }

  return off;
}
