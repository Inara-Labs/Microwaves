import {Text as RNText} from 'react-native';
import styled from 'styled-components';
import {compose, typography, color} from 'styled-system';

export const Text = styled(RNText)`
  ${compose(typography, color)}
`;
Text.defaultProps = {
  fontFamily: 'medium',
  fontSize: 2,
  lineHeight: 2,
  color: 'black',
};

export const Title = styled(Text)`
  ${compose(typography, color)}
`;

Title.defaultProps = {
  fontFamily: 'extrabold',
  fontSize: 5,
  lineHeight: 5,
};

export const Label = styled(Text)`
  ${compose(typography, color)}
`;

Label.defaultProps = {
  fontFamily: 'bold',
  fontSize: 1,
  lineHeight: 1,
  color: 'black',
};
