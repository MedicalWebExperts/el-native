Gradient Component

This component provides a wrapper to other components so that a vertical linear
gradient is shown as background.

It expects:

children: Elements to be nested inside the gradient.
gradientColors (required): An array of colors to form the gradient.
style: Provided to override the size and shape of the container element.

If not a vertical gradient is wanted, index.js must be modified, being start, end
and locations the attributes responsible for this behavior.

IMPORTANT:
This component is based on 'react-native-linear-gradient'. That means you have to install
it as a dependency in your project in order to work.

For more information reach https://github.com/react-native-community/react-native-linear-gradient
