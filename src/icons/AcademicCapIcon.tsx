import React from "react";
import Icon, { IconProps } from "../Icon";

const AcademicCapIcon = (
  props: IconProps
): React.ReactElement<React.ComponentProps<any>, any> => {
  return (
    <Icon {...props} viewBox="0 0 24 24">
      <path d="M17,13.5977511 L17,17 C17,18.6568542 14.7614237,20 12,20 C9.32225576,20 7.13615141,18.7370236 7.00611913,17.1497303 L7,17 L7,13.5977511 L10.0154442,15.3212215 C11.2451749,16.0239247 12.7548251,16.0239247 13.9845558,15.3212215 L17,13.5977511 Z M11.0077221,4.41526482 C11.6225875,4.0639132 12.3774125,4.0639132 12.9922779,4.41526482 L12.9922779,4.41526482 L19.4961389,8.13175686 C20.1679537,8.515651 20.1679537,9.484349 19.4961389,9.86824314 L19.4961389,9.86824314 L12.9922779,13.5847352 C12.3774125,13.9360868 11.6225875,13.9360868 11.0077221,13.5847352 L11.0077221,13.5847352 L4.50386106,9.86824314 C3.83204631,9.484349 3.83204631,8.515651 4.50386106,8.13175686 L4.50386106,8.13175686 Z" />
    </Icon>
  );
}

export default AcademicCapIcon;
