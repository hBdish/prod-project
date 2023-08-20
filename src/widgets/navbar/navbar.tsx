import { memo } from 'react';
import { useSelector } from 'react-redux';
import { ToggleFeatures } from '@/shared';
import { authDataSelector } from '@/entities';
import { NavbarRedesigned } from './navbar-redesigned/navbar-redesigned';
import { NavbarDeprecated } from './navbar-deprecated/navbar-deprecated';

interface NavbarProps {
  className?: string;
}

const Navbar = memo(({ className }: NavbarProps) => {
  const authData = useSelector(authDataSelector);

  return (
    <ToggleFeatures
      name="isAppRedesigned"
      on={<NavbarRedesigned isAuth={!!authData} />}
      off={<NavbarDeprecated isAuth={!!authData} />}
    />
  );
});

export { Navbar };
