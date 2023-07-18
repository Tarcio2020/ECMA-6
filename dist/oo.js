"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
var _hp = /*#__PURE__*/new WeakMap();
/*function Pokemon (nomeDoPokemon, tipoDoPokemon) {
    this.nome = nomeDoPokemon,
    this.tipo = tipoDoPokemon
*/
// const pikachu = new Pokemon (pikachu, eletrico);
var Pokemon = /*#__PURE__*/function () {
  function Pokemon(nomeDoPokemon, tipoDoPokemon, nomeDoAtaque) {
    _classCallCheck(this, Pokemon);
    ///nome= '';
    ///tipo = '';
    //# recurso é privado....ele só irá ser alterado dentro da classe
    _classPrivateFieldInitSpec(this, _hp, {
      writable: true,
      value: 100
    });
    this.nome = nomeDoPokemon;
    this.tipoDoPokemon = tipoDoPokemon;
    //  this.ataque = nomeDoAtaque;
  }
  _createClass(Pokemon, [{
    key: "atacar",
    value: function atacar(ataque) {
      console.log("".concat(this.nome, " atacou com ").concat(ataque));
    }
  }, {
    key: "recebeuAtaque",
    value: function recebeuAtaque() {
      this.hp -= 10;
    }
  }]);
  return Pokemon;
}();
var Pikachu = /*#__PURE__*/function (_Pokemon) {
  _inherits(Pikachu, _Pokemon);
  var _super = _createSuper(Pikachu);
  function Pikachu() {
    _classCallCheck(this, Pikachu);
    return _super.call(this, 'PIKACHU', 'ELETRICO');
  }
  _createClass(Pikachu, [{
    key: "atacar",
    value: function atacar() {
      console.log("".concat(this.nome, " atacou com choque do trov\xE3o"));
    }
  }]);
  return Pikachu;
}(Pokemon);
var pikachudoAsh = new Pikachu();
pikachudoAsh.recebeuAtaque();
pikachudoAsh.hp = 5000;
pikachudoAsh.atacar();
console.log(pikachudoAsh.hp);

//const pikachudoAsh = new Pikachu('pikachu', 'eletrico')
var pikachu = new Pokemon('pikachu', 'eletrico', 'choque');
//pikachu.atacar('choque do trovão');
//pikachu.nome = 'pikachu';
//pikachu.tipo = 'eletrico';
console.log(pikachu);
console.log(pikachudoAsh);
console.log(pikachudoAsh instanceof Pikachu);
console.log(pikachudoAsh instanceof Pokemon);