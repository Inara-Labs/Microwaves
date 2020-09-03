import FeatherIcon from 'react-native-vector-icons/Feather';
import styled from 'styled-components';
import {
  compose,
  color,
  typography,
  TypographyProps,
  ColorProps,
} from 'styled-system';

interface IconProps extends TypographyProps, ColorProps {
  name: string;
}

export const Icon: React.FunctionComponent<IconProps> = styled(FeatherIcon)`
  ${compose(color, typography)}
`;
Icon.defaultProps = {
  fontSize: 3,
};
