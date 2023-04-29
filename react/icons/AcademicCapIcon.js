const React = require("react");
function AcademicCapIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    "aria-hidden": "true",
    viewBox: "0 0 20 20",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16.25 11.809v4.25c0 2.074-2.797 3.75-6.25 3.75-3.348 0-6.078-1.579-6.242-3.563l-.008-.187v-4.25l3.77 2.152a4.997 4.997 0 004.96 0zM8.758.329a2.515 2.515 0 012.484 0l8.13 4.648c.839.476.839 1.687 0 2.168l-8.13 4.648a2.515 2.515 0 01-2.484 0L.628 7.145a1.248 1.248 0 010-2.168zm0 0",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(AcademicCapIcon);
module.exports = ForwardRef;