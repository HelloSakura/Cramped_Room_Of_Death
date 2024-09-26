System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Layers, Node, UITransform, _crd, createUINode, randomByRange, reg, getNumberWithinString, sortSpriteFrame;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Layers = _cc.Layers;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ba54aODLvBAcL7qUJqHFf+I", "index", undefined);

      //常用功能封装成函数
      __checkObsolete__(['Layers', 'Node', 'SpriteFrame', 'UITransform']);

      _export("createUINode", createUINode = function createUINode(name) {
        if (name === void 0) {
          name = '';
        }

        var node = new Node(name); //添加UI组件

        var transform = node.addComponent(UITransform); //设置左上角为原点

        transform.setAnchorPoint(0, 1); //设置layer

        node.layer = 1 << Layers.nameToLayer("UI_2D");
        return node;
      }); //根据参数范围返回随机数


      _export("randomByRange", randomByRange = (start, end) => Math.floor(start + (end - start) * Math.random())); //根据spriteFrame进行正则排序


      reg = /\((\d+)\)/;

      getNumberWithinString = str => parseInt(str.match(reg)[1] || '0');

      _export("sortSpriteFrame", sortSpriteFrame = spriteFrames => {
        spriteFrames.sort((a, b) => getNumberWithinString(a.name) - getNumberWithinString(b.name));
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=26b9e1f524b071a4e1447e9abe10d6e44bace1b6.js.map