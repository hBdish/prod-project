import { buildSelector } from '@/shared';
import { JsonSettings } from '../types/json-settings';

const defaultJson: JsonSettings = {};

export const [useJsonSettings, getJsonSettings] = buildSelector(
  (state) => state.user?.authData?.jsonSettings ?? defaultJson,
);
