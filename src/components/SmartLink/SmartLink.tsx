import { forwardRef } from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';

export const SmartLink = forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, style, ...rest } = props;
  // Desired styles per the UX (will be appended automatically when styles are not passed from consumer)
  const styleOverrides = { textDecoration: 'none', color: 'black' };

  // Map href (Material UI) -> to (react-router)
  return (
    <RouterLink
      style={style ? style : styleOverrides}
      ref={ref}
      to={href}
      {...rest}
    />
  );
});
