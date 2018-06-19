import React from 'react';

import LinearGradient from 'react-native-linear-gradient';

const LG = props => <LinearGradient {...props}>{props.children}</LinearGradient>;
export default LG;
