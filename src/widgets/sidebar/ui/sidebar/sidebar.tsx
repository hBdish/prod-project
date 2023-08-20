import { memo } from 'react';
import { ToggleFeatures } from '@/shared';
import { SidebarDeprecated } from './sidebar-deprecated/sidebar-deprecated';
import { SidebarRedesigned } from './sidebar-redesigned/sidebar-redesigned';

interface SidebarProps {
  className?: string;
}

const Sidebar = memo(({ className }: SidebarProps) => (
  <ToggleFeatures
    name="isAppRedesigned"
    on={<SidebarRedesigned />}
    off={<SidebarDeprecated />}
  />
));

export { Sidebar };
