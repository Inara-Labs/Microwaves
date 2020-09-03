import {View} from 'react-native';
import styled from 'styled-components';
import {compose, color, flex, border, space} from 'styled-system';

export const Box = styled(View)`
  ${compose(color, flex, border, space)}
`;
