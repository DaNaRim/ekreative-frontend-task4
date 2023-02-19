import {useMediaQuery} from "react-responsive";

const DESKTOP_MIN_WIDTH = 992;
const TABLET_MIN_WIDTH = 768;

export const Desktop = ({children}) => {
  const isDesktop = useMediaQuery({minWidth: DESKTOP_MIN_WIDTH});
  return isDesktop ? children : null;
};
export const Tablet = ({children}) => {
  const isTablet = useMediaQuery({minWidth: TABLET_MIN_WIDTH, maxWidth: DESKTOP_MIN_WIDTH - 1});
  return isTablet ? children : null;
};
export const Mobile = ({children}) => {
  const isMobile = useMediaQuery({maxWidth: TABLET_MIN_WIDTH - 1});
  return isMobile ? children : null;
};
export const Default = ({children}) => {
  const isNotMobile = useMediaQuery({minWidth: TABLET_MIN_WIDTH});
  return isNotMobile ? children : null;
};