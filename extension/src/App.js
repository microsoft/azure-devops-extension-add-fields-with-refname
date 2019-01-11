var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "react", "react-dom", "./NameWithReferenceComponent"], function (require, exports, React, ReactDOM, NameWithReferenceComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = /** @class */ (function (_super) {
        __extends(App, _super);
        function App(props, context) {
            return _super.call(this, props, context) || this;
        }
        App.prototype.render = function () {
            return (React.createElement("div", { className: "hub-view" },
                React.createElement(NameWithReferenceComponent_1.NameWithReferenceComponent, null)));
        };
        return App;
    }(React.Component));
    function init() {
        ReactDOM.render(React.createElement(App, null), document.getElementById("react-container"));
    }
    exports.init = init;
});
