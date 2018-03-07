Object.defineProperty(exports,"__esModule",{value:true});exports.shouldHaveStyles=exports.shouldSimulateOnPress=exports.shouldHaveComponent=exports.shouldHaveText=undefined;var _react=require('react');var _react2=_interopRequireDefault(_react);var _enzyme=require('enzyme');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var isEquivalent=function isEquivalent(a,b){var aProps=Object.getOwnPropertyNames(a);var bProps=Object.getOwnPropertyNames(b);if(aProps.length!==bProps.length){return false;}for(var i=0;i<aProps.length;i+=1){var propName=aProps[i];if(!Object.is(a[propName],b[propName])){return false;}}return true;};var shouldHaveStyles=function shouldHaveStyles(componentWithStyles,styles){expect(isEquivalent(componentWithStyles.props().style,styles)).toBeTruthy();};var shouldHaveText=function shouldHaveText(mainComponent,text){var wrapper=(0,_enzyme.shallow)(mainComponent);return expect(wrapper.contains(text)).toBeTruthy();};var shouldHaveComponent=function shouldHaveComponent(mainComponent,component){var wrapper=(0,_enzyme.shallow)(mainComponent);return expect(wrapper.find(component)).toHaveLength(1);};var shouldSimulateOnPress=function shouldSimulateOnPress(mainComponent){var cb=jest.fn();var cloned=_react2.default.cloneElement(mainComponent,{onPress:cb});var wrapper=(0,_enzyme.shallow)(cloned);wrapper.simulate('press');expect(cb).toHaveBeenCalledTimes(1);};exports.shouldHaveText=shouldHaveText;exports.shouldHaveComponent=shouldHaveComponent;exports.shouldSimulateOnPress=shouldSimulateOnPress;exports.shouldHaveStyles=shouldHaveStyles;